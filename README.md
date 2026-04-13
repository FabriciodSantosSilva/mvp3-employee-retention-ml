# 🧠 Employee Retention Prediction — MVP

Projeto de Machine Learning + Aplicação Full Stack para previsão de retenção de funcionários.

Este projeto foi desenvolvido como um MVP, com o objetivo de demonstrar a construção completa de uma solução baseada em dados, desde o treinamento do modelo até sua disponibilização em uma API e consumo via interface web.

---

## 📊 Visão Geral

A solução permite prever se um funcionário tem maior probabilidade de:

- Permanecer na empresa
- Deixar a empresa

A predição é realizada com base em atributos como:

- Educação
- Idade
- Cidade
- Experiência
- Nível salarial

---

## 🧠 Machine Learning

- Algoritmo: K-Nearest Neighbors (KNN)
- Pipeline completo com:
  - OneHotEncoder
  - StandardScaler
- Acurácia aproximada: **82.9%**
- Avaliação com:
  - Holdout (treino/teste)
  - Validação cruzada
  - Tuning de hiperparâmetros

---

## 🏗️ Arquitetura

O projeto é dividido em três partes principais:

### 🔹 Notebook (ML)
- Análise e preparação dos dados
- Treinamento e comparação de modelos
- Otimização de hiperparâmetros
- Exportação do modelo

---

### 🔹 Backend (API)
- Carregamento do modelo treinado
- Endpoint de predição (`/predict`)
- Arquitetura modular (loader, predictor, provider)
- Testes automatizados (incluindo performance)

---

### 🔹 Frontend (Interface)
- Formulário para entrada de dados
- Consumo da API
- Exibição de resultado e probabilidade

---
### 🖼️ Diagrama da Arquitetura

<p align="center">
  <img src="data/MVP-Sprint3.svg" alt="MVP-Sprint3.svg" width="850"/>
</p>

<p align="center">
  <em>Figura 1 — Visão macro da arquitetura baseada em microsserviços orquestrados via Docker Compose.</em>
</p>

---

## 🔮 Exemplo de Uso

### 📥 Entrada

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

---

### 📤 Saída

```json
{
  "status": "sucesso",
  "resultado": 1,
  "diagnostico": "Alta chance de saída",
  "probabilidade": 0.82
}
```

---

## 🚀 Como Executar

### 🫳 Manual
Cada parte do projeto possui instruções específicas:

- Backend → responsável pela API
- Frontend → interface de usuário

Consulte os READMEs em referências para execução detalhada. 

### 🐳 Execução com Docker Compose

O projeto pode ser executado de forma simplificada utilizando Docker Compose, iniciando simultaneamente o backend (API) e o frontend (interface web).

---

### 🔹 Pré-requisitos

- Docker instalado
- Docker Compose instalado

---

### 🔹 Executar aplicação

Na raiz do projeto, execute:

```bash
docker-compose up --build
```

---

### 🔹 Acessos

Após a inicialização:

- 🖥️ Frontend: http://localhost:5000  
- 🔌 Backend (API): http://localhost:5001  

---

### 🔹 Funcionamento

O Docker Compose realiza:

- Build das imagens do backend e frontend
- Inicialização dos containers
- Configuração de rede entre os serviços
- Exposição das portas para acesso local

---

### 🔹 Parar execução

```bash
docker-compose down
```

---

## 🧠 Benefícios do uso de Docker

- Ambiente padronizado
- Facilidade de execução
- Eliminação de problemas de dependência
- Execução rápida para demonstração

Essa abordagem facilita a replicação do projeto em diferentes ambientes, incluindo avaliação acadêmica.
---

## 📚 Referências

- 📦 Backend: `backend/README.md`
- 🖥️ Frontend: `frontend/README.md`

---

## ⚠️ Considerações

- O dataset não contém dados diretamente identificáveis
- Variáveis como idade e gênero podem ser sensíveis
- Em ambiente real, recomenda-se adequação à LGPD e análise de viés

---

## 👤 Autor

| Nome                          | LinkedIn                                                                 | GitHub                                      |
|-------------------------------|--------------------------------------------------------------------------|---------------------------------------------|
| Fabricio dos Santos da Silva   | [linkedin.com/in/fabriciossilva](https://www.linkedin.com/in/fabriciossilva/) | [github.com/FabriciodSantosSilva](https://github.com/FabriciodSantosSilva) |
