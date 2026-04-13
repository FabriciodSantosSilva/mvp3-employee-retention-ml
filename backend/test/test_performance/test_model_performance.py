import pickle
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score


def test_model_performance():
    # carregar modelo real (pipeline)
    with open("ml/modelo_retencao_v20260412_2.pkl", "rb") as f:
        model = pickle.load(f)

    # carregar dataset (URL pública — requisito MVP)
    url = "https://raw.githubusercontent.com/FabriciodSantosSilva/mvp3-employee-retention-ml/main/data/Employee.csv"
    df = pd.read_csv(url)

    # separar features e target
    X = df.drop("LeaveOrNot", axis=1)
    y = df["LeaveOrNot"]

    # holdout (igual ao treino)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y,
        test_size=0.2,
        random_state=7,
        stratify=y
    )

    # predição
    y_pred = model.predict(X_test)

    # métrica
    acc = accuracy_score(y_test, y_pred)

    print(f"Acurácia do modelo: {acc:.3f}")

    # regra de qualidade (ajuste se necessário)
    assert acc >= 0.75