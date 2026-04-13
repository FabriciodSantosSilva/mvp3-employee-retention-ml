import os
from services.loader import ModelLoader
from services.predictor import ModelPredictor

_predictor = None

MODEL_PATH = os.path.join(
    os.path.dirname(__file__),
    "..",
    "ml",
    "modelo_retencao_v20260412_2.pkl"
)

def get_predictor():
    global _predictor

    if _predictor is None:
        try:
            model = ModelLoader.load(MODEL_PATH)
            _predictor = ModelPredictor(model)
        except Exception as e:
            raise RuntimeError(f"Erro ao inicializar predictor: {str(e)}")

    return _predictor