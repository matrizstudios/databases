# Use a imagem oficial do MySQL 5.7 como imagem base
FROM mysql:5.7

# Copie o script de inicialização personalizado para o diretório /docker-entrypoint-initdb.d/
# COPY ./script.sql /docker-entrypoint-initdb.d/

# Add a new user
ENV MYSQL_USER=
ENV MYSQL_USER_ROOT=
ENV MYSQL_PASSWORD=
ENV MYSQL_ROOT_PASSWORD=
ENV MYSQL_HOST=

# RUN chmod +x /docker-entrypoint-initdb.d/script.sql

# Exponha a porta 3306 para acesso externo
EXPOSE 3306
