# 🧠 Employee Retention API — Predição de Retenção de Funcionários

API responsável por realizar predições sobre a probabilidade de um funcionário deixar a empresa, utilizando um modelo de Machine Learning treinado com Scikit-Learn.

O modelo é servido diretamente pelo back-end e processa dados em tempo real através de um pipeline completo de pré-processamento e classificação.

---

## 📚 Visão Geral

Este serviço permite:

- Receber dados de funcionários
- Processar automaticamente os dados (sem transformação manual)
- Realizar predição de retenção
- Retornar diagnóstico e probabilidade de saída

O modelo foi treinado utilizando técnicas clássicas de Machine Learning e otimizado para desempenho e simplicidade.

---

## ✨ Funcionalidades

### 🤖 Predição de Retenção
- Classifica se o funcionário:
  - **FICARÁ** (0)
  - **SAIRÁ** (1)
- Retorna:
  - Resultado da predição
  - Diagnóstico interpretável
  - Probabilidade de saída

### ⚙️ Pipeline Automatizado
O modelo utiliza um pipeline completo que inclui:

- OneHotEncoder (variáveis categóricas)
- StandardScaler (variáveis numéricas)
- KNN (modelo final)

👉 Nenhuma transformação manual é necessária no backend

---

## 🔌 Endpoint

### 🔹 Predição de retenção
`POST /predict`

---

### 📥 Request

Pode ser enviado via form-data:

```json
{
  "Education": "Bachelors",
  "JoiningYear": 2018,
  "City": "Bangalore",
  "PaymentTier": 2,
  "Age": 30,
  "Gender": "Male",
  "EverBenched": "No",
  "ExperienceInCurrentDomain": 5
}
```

### 📤 Response (sucesso)
```json
{
  "status": "sucesso",
  "resultado": 1,
  "diagnostico": "Alta chance de saída",
  "probabilidade": 0.82
}
```

### 📤 Response (erro)
```json
{
  "status": "erro",
  "diagnostico": "Erro na predição"
}
```

---


## 🧠 Modelo de Machine Learning

O modelo utilizado foi:

- **Algoritmo:** K-Nearest Neighbors (KNN)
- **Parâmetros:**
  - `n_neighbors = 11`
  - `metric = manhattan`

---

## 📊 Performance

- Acurácia no conjunto de teste: **~82.9%**
- Avaliado com holdout + validação cruzada

---

## 🎯 Justificativa

O KNN foi escolhido por:

- Bom desempenho
- Baixo custo computacional
- Simplicidade de implementação
- Melhor tempo de execução em comparação ao SVM

---

## 🧪 Testes Automatizados

O projeto inclui testes automatizados utilizando **PyTest**, garantindo a confiabilidade e estabilidade da aplicação.

Os testes cobrem:

- Rotas da API
- Comportamento do predictor
- Integração com o modelo
- Teste de Performance

  Foi implementado um teste específico para validar o desempenho do modelo, assegurando que ele mantenha um nível mínimo de qualidade:

  ```python
  assert accuracy >= 0.75
  ```
---

## 🗂️ Estrutura do Projeto

```text
backend/
├── app.py
├── routes/
│   └── employee_retention.py
├── services/
│   ├── loader.py
│   └── predictor.py
├── providers/
│   └── predictor_provider.py
├── ml/
│   └── modelo_retencao.pkl
├── test/
│   ├── test_routes/
│   └── test_services/
├── requirements.txt
```


## 🚀 Como Executar

Siga os passos abaixo para executar a aplicação localmente.

---

### 🔹 1. Criar ambiente virtual

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

### 🔹 2. Instalar dependências
```bash
pip install -r requirements.txt
```

### 🔹 3. Executar aplicação
```bash
python app.py
```

### 🔹 4. Acessar API
```text
http://localhost:5000
```

---

## ⚙️ Tecnologias Utilizadas
- Python 3
- Flask
- Scikit-Learn
- Pandas
- PyTest
- Pickle

---

## ⚠️ Considerações de Segurança

O dataset utilizado não contém informações que permitam identificar diretamente os funcionários ou a empresa.

No entanto, algumas variáveis, como idade e gênero, podem ser consideradas sensíveis em determinados contextos.

Em um cenário real, seria recomendável:

- Aplicar técnicas de anonimização ou generalização de dados
- Avaliar possíveis vieses do modelo
- Garantir conformidade com a LGPD
- Implementar controles de acesso aos dados

---

## 🧠 Arquitetura

A aplicação foi estruturada seguindo princípios de separação de responsabilidades:

- Loader: responsável por carregar o modelo
- Predictor: executa a lógica de predição
- Provider: gerencia a instância única do modelo (singleton)
- Routes: expõe os endpoints da API

Essa abordagem torna o sistema mais modular, testável e escalável.

---

## 👤 Autor

| Nome                          | LinkedIn                                                                 | GitHub                                      |
|-------------------------------|--------------------------------------------------------------------------|---------------------------------------------|
| Fabricio dos Santos da Silva   | [linkedin.com/in/fabriciossilva](https://www.linkedin.com/in/fabriciossilva/) | [github.com/FabriciodSantosSilva](https://github.com/FabriciodSantosSilva) |
