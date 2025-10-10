from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy import JSON
from sqlalchemy import Identity
from datetime import datetime
from app.database import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, Identity(start=1, cycle=False), primary_key=True, index=True)
    title = Column(String, nullable=False)
    image = Column(String, nullable=True)
    paragraphs = Column(JSON, nullable=True)
    status = Column(String, nullable=False, default="pending")
    created_at = Column(DateTime, default=datetime.utcnow)
