🚀 Como rodar o projeto

Clone o repositório:

git clone <url-do-repositorio>

Entre na pasta do projeto:

cd nome-do-projeto

Depois entre no backend:

cd backend

Entre na pasta do Node:

cd node

Instale as dependências:

npm install
⚙️ Configuração do ambiente

Crie um arquivo .env baseado no .env.example na raiz da pasta node.

Exemplo:

PORT=3000

DB_NAME=db_gt
DB_USER=root
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql
▶️ Rodar o servidor

Depois de instalar as dependências:

npm start

ou

node server.js

O servidor irá rodar em:

http://localhost:3000