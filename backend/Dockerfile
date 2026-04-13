FROM python:3.12-slim

WORKDIR /app

# Dependências mínimas para rodar o serviço de moedas e Postgres
#RUN apt-get update && apt-get install -y libpq-dev gcc && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Expõe a porta do microsserviço
EXPOSE 5000

# Rodando em uma porta diferente (5002) para não conflitar
CMD ["flask", "run", "--host", "0.0.0.0", "--port", "5000"]