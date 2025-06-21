# encoding: utf-8

from server.database import database

class Task(database.Model):
    __tablename__ = 'task'

    id = database.Column(database.Integer, primary_key=True, autoincrement=True)
    message = database.Column(database.String(), nullable=False)
    completed = database.Column(database.Boolean, default=False, nullable=False)

    def __init__(self, message, completed):
        self.message = message
        self.completed = completed

    def to_dict(self):
        return {
            'id': self.id,
            'message': self.message,
            'completed': self.completed
        }

    def __repr__(self):
        return f"<Task {self.message}>"
