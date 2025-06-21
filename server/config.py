import os

class Config(object):
    SQLALCHEMY_DATABASE_URI = f"postgresql://postgres:{os.environ.get('POSTGRES_PASSWORD')}@database:5432/postgres"
