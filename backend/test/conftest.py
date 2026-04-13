import pytest
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from app import app


@pytest.fixture
def client():
    app.testing = True
    return app.test_client()