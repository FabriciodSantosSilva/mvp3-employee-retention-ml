from flask_openapi3 import APIBlueprint, Tag
from schema import *
from flask import redirect

# Definindo a tag e o Blueprint
home_tag = Tag(name="Documentação", description="Seleção de documentação: Swagger, Redoc ou RapiDoc")
api = APIBlueprint('open_api', __name__, abp_tags=[home_tag])


@api.get('/', tags=[home_tag])
def home():
    """Redireciona para /openapi."""
    return redirect('/openapi')