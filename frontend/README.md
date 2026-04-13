# 🖥️ Employee Retention Frontend

Interface web para interação com a API de predição de retenção de funcionários.

Este frontend permite que o usuário insira dados de um funcionário e visualize, de forma simples e intuitiva, a probabilidade de saída da empresa.

---

## 📚 Visão Geral

A aplicação frontend consome a API de Machine Learning responsável por prever a retenção de funcionários.

Funcionalidades principais:

- Inserção de dados via formulário
- Envio de requisição para API
- Exibição do resultado da predição
- Visualização da probabilidade de saída

---

## ✨ Funcionalidades

### 📥 Entrada de Dados

O usuário pode informar:

- Educação (Education)
- Ano de ingresso (JoiningYear)
- Cidade (City)
- Nível salarial (PaymentTier)
- Idade (Age)
- Gênero (Gender)
- Já ficou em bench (EverBenched)
- Experiência na área (ExperienceInCurrentDomain)

---

### 🔮 Predição

Ao enviar os dados, o frontend:

1. Realiza uma requisição para o endpoint `/predict`
2. Recebe o resultado da API
3. Exibe:

- Resultado (FICARÁ ou SAIRÁ)
- Diagnóstico
- Probabilidade de saída

---

## 🔌 Integração com API

### Endpoint utilizado

POST `/predict`

---

### Exemplo de requisição

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

### Exemplo de resposta

```json
{
  "status": "sucesso",
  "resultado": 1,
  "diagnostico": "Alta chance de saída",
  "probabilidade": 0.82
}
```

---

## 🧠 Interpretação do Resultado

- **Resultado = 0** → Funcionário provavelmente ficará
- **Resultado = 1** → Funcionário provavelmente sairá

- **Probabilidade** → Chance estimada de saída (classe 1)

---

## 🗂️ Estrutura do Projeto

```text
frontend/
├── index.html
├── style.css
├── script.js
└── assets/
```

---

## 🚀 Como Executar

### 🔹 1. Clonar o repositório

```bash
git clone https://github.com/FabriciodSantosSilva/mvp3-employee-retention-ml.git
```

---

### 🔹 2. Acessar pasta do frontend

```bash
cd frontend
```

---

### 🔹 3. Abrir no navegador

Basta abrir o arquivo:

```text
index.html
```

Ou utilizar uma extensão como:

- Live Server (VSCode)

---

## ⚙️ Configuração da API

Certifique-se de que a URL da API está correta no arquivo JavaScript:

```javascript
const API_URL = "http://localhost:5000/predict";
```

---

## 🎨 Interface

A interface foi desenvolvida com foco em:

- Simplicidade
- Clareza dos resultados
- Facilidade de uso

---

## ⚠️ Tratamento de Erros

O frontend trata:

- Falha de conexão com a API
- Dados inválidos
- Respostas inesperadas

---

## 🧠 Arquitetura

A aplicação segue um modelo simples:

- **HTML** → estrutura
- **CSS** → estilização
- **JavaScript** → lógica e integração com API

---

## ⚠️ Considerações de Segurança

Os dados enviados pelo usuário não são armazenados no frontend.

Recomenda-se, em ambiente real:

- Uso de HTTPS
- Validação de dados no backend
- Proteção contra requisições maliciosas

---

## 👤 Autor

| Nome                          | LinkedIn                                                                 | GitHub                                      |
|-------------------------------|--------------------------------------------------------------------------|---------------------------------------------|
| Fabricio dos Santos da Silva   | [linkedin.com/in/fabriciossilva](https://www.linkedin.com/in/fabriciossilva/) | [github.com/FabriciodSantosSilva](https://github.com/FabriciodSantosSilva) |
