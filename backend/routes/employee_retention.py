from flask import jsonify, request
from flask_openapi3 import APIBlueprint, Tag
from providers.predictor_provider import get_predictor
from schema.employee_retention_schema import EmployeeSchema, PredictionViewSchema

employee_retention_tag = Tag(
    name="Employee Retention",
    description="Avaliação de risco de retenção de funcionários"
)

api = APIBlueprint('employee', __name__, abp_tags=[employee_retention_tag])


def get_request_data(form_data=None):
    if form_data and any(form_data.model_dump().values()):
        return form_data.model_dump()

    if request.is_json:
        return request.get_json()

    return request.form.to_dict()


@api.post('/predict', tags=[employee_retention_tag], responses={"200": PredictionViewSchema})
def predict(form: EmployeeSchema = None):
    try:
        predictor = get_predictor()

        data = get_request_data(form_data=form)

        resultado, diagnostico, probabilidade = predictor.predict(data)

        return jsonify({
            'status': 'sucesso',
            'resultado': resultado,
            'diagnostico': diagnostico,
            'probabilidade': float(probabilidade) if probabilidade is not None else None
        })

    except ValueError as e:
        return jsonify({
            'status': 'erro',
            'diagnostico': str(e)
        }), 400

    except Exception as e:
        return jsonify({
            'status': 'erro',
            'diagnostico': 'Erro interno'
        }), 500