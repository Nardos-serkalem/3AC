from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy import JSON
from sqlalchemy import Identity
from datetime import datetime
from app.database import Base


class Research(Base):
    __tablename__ = "researches"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=False)
    image = Column(String, nullable=True)
    paragraphs = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
