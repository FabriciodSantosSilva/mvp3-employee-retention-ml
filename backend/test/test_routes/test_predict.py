def test_predict_success(client, mocker):
    # Mock do predictor
    mock_predictor = mocker.Mock()
    mock_predictor.predict.return_value = ("Stay", 0.92)

    # Mock do provider
    mocker.patch(
        "providers.predictor_provider.get_predictor",
        return_value=mock_predictor
    )

    payload = {
        "Education": "Bachelors",
        "JoiningYear": 2018,
        "City": "Bangalore",
        "PaymentTier": 2,
        "Age": 30,
        "Gender": "Male",
        "EverBenched": "No",
        "ExperienceInCurrentDomain": 5
    }

    response = client.post("/predict", data=payload)

    assert response.status_code == 200

    data = response.get_json()

    assert data["status"] == "sucesso"
    assert data["resultado"] == 1
    assert data["probabilidade"] == 0.8181818181818182

def test_predict_validation_error(client, mocker):
    mock_predictor = mocker.Mock()
    mock_predictor.predict.side_effect = ValueError("Dados inválidos")

    mocker.patch(
        "providers.predictor_provider.get_predictor",
        return_value=mock_predictor
    )

    response = client.post("/predict", data={})

    assert response.status_code == 422

    data = response.get_json()
    assert isinstance(data, list)
    assert data[0]["type"] == "missing"

def test_predict_internal_error(client, mocker):
    mock_predictor = mocker.Mock()
    mock_predictor.predict.side_effect = Exception("Erro interno")

    mocker.patch(
        "providers.predictor_provider.get_predictor",
        return_value=mock_predictor
    )

    response = client.post("/predict", json={"foo": "bar"})

    assert response.status_code == 422

    data = response.get_json()

    assert isinstance(data, list)
    assert data[0]["type"] == "missing"