import pickle
import os

class ModelLoader:
    @staticmethod
    def load(model_path: str):
        if not os.path.exists(model_path):
            raise FileNotFoundError(f"Modelo não encontrado: {model_path}")

        try:
            with open(model_path, "rb") as f:
                return pickle.load(f)
        except Exception as e:
            raise RuntimeError(f"Erro ao carregar modelo: {str(e)}")