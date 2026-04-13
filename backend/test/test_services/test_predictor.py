from services.predictor import ModelPredictor

def test_predictor_with_mocked_model(mocker):
    mock_model = mocker.Mock()

    mock_model.predict.return_value = [1]
    mock_model.predict_proba.return_value = [[0.1, 0.9]]

    predictor = ModelPredictor(mock_model)

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

    result, diagnostico, prob = predictor.predict(data)

    assert result == 1
    assert prob == 0.9