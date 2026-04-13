from flask_cors import CORS
from flask_openapi3 import OpenAPI, Info
import pkgutil
import importlib
import routes

info = Info(title="Employee ML Service API", version="1.0.0")
app = OpenAPI(__name__, info=info)
CORS(app)


def register_apis(app, package):
    """Carrega dinamicamente todos os módulos de rotas"""
    IGNORED_MODULES = ["__init__", "base"]
    for _, module_name, _ in pkgutil.iter_modules(package.__path__):
        if module_name in IGNORED_MODULES:
            continue
        module = importlib.import_module(f"{package.__name__}.{module_name}")

        # procura atributo 'api'
        if hasattr(module, "api"):
            blueprint = getattr(module, "api")

            if blueprint:
                app.register_api(blueprint)


# Auto-load de todas as rotas
register_apis(app, routes)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002)