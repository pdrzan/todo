<p align="center">
    <img src="./client/todo/public/icons/logo.svg" alt="YourToDo logo" style="width: 300px;">
</p>

# YourToDo

[![Static Badge](https://img.shields.io/badge/Docker-white?logo=docker&link=https://docs.docker.com/)](https://docs.docker.com/)
[![Static Badge](https://img.shields.io/badge/Postgres-CCCCCC?logo=postgresql&link=https://docs.docker.com/)](https://www.postgresql.org/)
[![Static Badge](https://img.shields.io/badge/Flask-000000?logo=Flask&logoColor=white)](https://flask.palletsprojects.com/en/stable/)
[![Static Badge](https://img.shields.io/badge/-SQLAlchemy-EE0000?logo=sqlalchemy&logoColor=white)](https://www.sqlalchemy.org/)
[![Static Badge](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev/)


In this repository there is a todo project called YourToDo. With YourToDo you can add, complete and remove your customized tasks.

## 🏃 How to run YourToDo

To run YourToDo you have to have docker compose installed in your computer. If you don't have docker compose, take a look at this [page](https://docs.docker.com/compose/install/). At the root of this project just run this command in a bash:

```bash
docker compose up
```

Done! You can access YourToDo at [http:localhost:4200](http:localhost:4200).

## 🏗️ Project structure

This project is structured in two folders:
- client: This folder contains all the front-end part of the application. Here you gonna find a Angular project.
- server: This folder contains all the back-end part of the application. Here you gonna find a Flask + SQLAlchemy project.