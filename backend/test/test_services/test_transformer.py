from pytest_mock import mocker

from services.transformer import DataTransformer

def mock_encoder(mocker):
    m = mocker.Mock()
    m.transform.return_value = [0]
    return m

def test_transformer_basic(mocker):
    transformer = DataTransformer()

    data = {
        "Education": "Bachelors",
        "JoiningYear": 2018,
        "City": "Bangalore",
        "PaymentTier": 2,
        "Age": 30,
        "Gender": "Male",
        "EverBenched": "No",
        "ExperienceInCurrentDomain": 5
    }

    encoders = {
        "Education": mock_encoder(mocker),
        "City": mock_encoder(mocker),
        "Gender": mock_encoder(mocker),
        "EverBenched": mock_encoder(mocker)
    }

    result = transformer.transform(data, encoders)

    assert result is not None