# encoding: utf-8

from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from server.config import Config
from server.database import database
from server.modules import task


def create_app():
    app = Flask(__name__)
    CORS(app, origins=["http://localhost:4200"])

    app.config.from_object(Config)

    database.init_app(app)
    from server.models.task import Task

    migrate = Migrate(app, database)

    app.register_blueprint(task.blueprint)

    return app
