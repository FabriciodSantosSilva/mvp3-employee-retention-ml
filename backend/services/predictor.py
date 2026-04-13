import pandas as pd

class ModelPredictor:
    def __init__(self, model):
        self.model = model

    def predict(self, input_data: dict):
        try:
            df = pd.DataFrame([input_data])

            prediction = self.model.predict(df)[0]

            # probabilidade do KNN
            #prob = self.model.predict_proba(df)[0][prediction]
            probs = self.model.predict_proba(df)[0]
            prob_leaving = probs[1]  # SEMPRE classe 1

            diagnostico = (
                "Alta chance de saída" if prediction == 1
                else "Alta chance de permanência"
            )

            #return int(prediction), diagnostico, float(prob)
            return int(prediction), diagnostico, float(prob_leaving)

        except Exception as e:
            raise RuntimeError(f"Erro na predição: {str(e)}")