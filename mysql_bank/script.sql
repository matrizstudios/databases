CREATE DATABASE meu_banco_primeiro;

USE meu_banco_primeiro;

CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nome VARCHAR(50),
  email VARCHAR(50),
  senha VARCHAR(50)
);

INSERT INTO usuarios (id, nome, email, senha) VALUES
(1, 'João Silva', 'joao@gmail.com', 'senha123'),
(2, 'Maria Santos', 'maria@gmail.com', 'senha456'),
(3, 'Pedro Souza', 'pedro@gmail.com', 'senha789');

CREATE DATABASE meu_banco_segundo;

USE meu_banco_segundo;

CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nome VARCHAR(50),
  email VARCHAR(50),
  senha VARCHAR(50)
);

INSERT INTO usuarios (id, nome, email, senha) VALUES
(1, 'João Silva', 'joao@gmail.com', 'senha123'),
(2, 'Maria Santos', 'maria@gmail.com', 'senha456'),
(3, 'Pedro Souza', 'pedro@gmail.com', 'senha789');

CREATE DATABASE meu_banco_terceiro;

USE meu_banco_terceiro;

CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nome VARCHAR(50),
  email VARCHAR(50),
  senha VARCHAR(50)
);

INSERT INTO usuarios (id, nome, email, senha) VALUES
(1, 'João Silva', 'joao@gmail.com', 'senha123'),
(2, 'Maria Santos', 'maria@gmail.com', 'senha456'),
(3, 'Pedro Souza', 'pedro@gmail.com', 'senha789');