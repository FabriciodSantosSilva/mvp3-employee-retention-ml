# Define a imagem base
FROM nginx:latest

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos de requisitos para o diretório de trabalho
COPY ./src /usr/share/nginx/html

EXPOSE 80

# Define o comando de execução da API
CMD ["nginx", "-g", "daemon off;"]
