from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Database connection URL format:
# postgresql://username:password@host:port/database_name

SQLALCHEMY_DATABASE_URL = "postgresql://postgres:dagi1430@localhost:5432/3AC"

# Create the engine
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Create a session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for ORM models
Base = declarative_base()
