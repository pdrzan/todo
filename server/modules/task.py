# encoding: utf-8

from server.models.task import Task
from server.database import database
from flask import Blueprint, jsonify, request
from sqlalchemy.orm import Session
from sqlalchemy import select, update, insert, delete

blueprint = Blueprint('task', __name__, url_prefix='/task')

@blueprint.route("/", methods=["GET"])
def get_all():
    """
    Returns all the tasks in the database
    ---
    parameters:
    definitions:
        Task:
            type: object
            properties:
            id:
                type: int
            message:
                type: string
            completed:
                type: boolean
    responses:
        200:
            description: A list of all tasks
            schema:
                $ref: '#/definitions/Task'
    """
    with Session(database.engine) as session:
        tasks = session.scalars(select(Task).order_by(Task.id)).all()
        return jsonify([task.to_dict() for task in tasks]) 

@blueprint.route("/", methods=["POST"])
def add_task():
    """
    Creates a task in the database
    ---
    parameters:
        - name: message
          in: body
          type: string
          required: true
        - name: completed
          in: body
          type: boolean
          required: true
    definitions:
        Task:
            type: object
            properties:
            id:
                type: int
            message:
                type: string
            completed:
                type: boolean
    responses:
        200:
            description: The task created
            schema:
                $ref: '#/definitions/Task'
        400:
            description: The error message: "The body has to contain a 'message' and 'completed' to create a task!"
    """
    if 'message' not in request.json or 'completed' not in request.json:
        return {"message": "The body has to contain a 'message' and 'completed' to create a task!"}, 400

    message = request.json['message']
    completed = request.json['completed']

    with Session(database.engine) as session:
        task = Task(message=message, completed=completed)

        session.add(task)

        session.commit()
        return jsonify(task.to_dict())

@blueprint.route('/<int:task_id>', methods=["GET"])
def get_task(task_id):
    """
    Creates a task in the database
    ---
    parameters:
        - name: task_id
          in: path
          type: int
          required: true
    definitions:
        Task:
            type: object
            properties:
            id:
                type: int
            message:
                type: string
            completed:
                type: boolean
    responses:
        200:
            description: The task
            schema:
                $ref: '#/definitions/Task'
        404:
            description: The error message: "The task with id {task_id} was not found!"
    """
    with Session(database.engine) as session:
        task = session.get(Task, task_id)

        if not task:
            return {"message": f"The task with id {task_id} was not found!"}, 404

        return jsonify(task.to_dict()) 

@blueprint.route('/<int:task_id>', methods=["PUT"])
def update_task(task_id):
    """
    Creates a task in the database
    ---
    parameters:
        - name: task_id
          in: path
          type: int
          required: true
        - name: message
          in: body
          type: string
          required: true
        - name: completed
          in: body
          type: boolean
          required: true
    definitions:
        Task:
            type: object
            properties:
            id:
                type: int
            message:
                type: string
            completed:
                type: boolean
    responses:
        200:
            description: The updated task
            schema:
                $ref: '#/definitions/Task'
        400:
            description: The error message: "The body has to contain a 'message' and 'completed' to create a task!"
        404:
            description: The error message: "The task with id {task_id} was not found!"
    """
    if 'message' not in request.json or 'completed' not in request.json:
        return {"message": "The body has to contain a 'message' and 'completed' to update a task!"}, 400

    message = request.json['message']
    completed = request.json['completed']

    with Session(database.engine) as session:
        task = session.get(Task, task_id)

        if not task:
            return {"message": f"The task with id {task_id} was not found!"}, 404

        task.message = message
        task.completed = completed

        session.commit()
        return jsonify(task.to_dict())

@blueprint.route('/<int:task_id>', methods=["DELETE"])
def delete_task(task_id):
    """
    Creates a task in the database
    ---
    parameters:
        - name: task_id
          in: path
          type: int
          required: true
    definitions:
        Task:
            type: object
            properties:
            id:
                type: int
            message:
                type: string
            completed:
                type: boolean
    responses:
        200:
            description: The deleted task
            schema:
                $ref: '#/definitions/Task'
        404:
            description: The error message: "The task with id {task_id} was not found!"
    """
    with Session(database.engine) as session:
        task = session.get(Task, task_id)

        if not task:
            return {"message": f"The task with id {task_id} was not found!"}, 400

        session.delete(task)

        session.commit()
        return jsonify(task.to_dict())
