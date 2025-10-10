from sqlalchemy.orm import Session
from typing import List, Optional
from app import models


def create_news(db: Session, title: str, image: Optional[str], paragraphs: List[str]):
    news = models.News(title=title, image=image, paragraphs=paragraphs)
    db.add(news)
    db.commit()
    db.refresh(news)
    return news


def list_news(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.News).order_by(models.News.created_at.desc()).offset(skip).limit(limit).all()


def create_research(db: Session, title: str, image: Optional[str], paragraphs: List[str]):
    research = models.Research(title=title, image=image, paragraphs=paragraphs)
    db.add(research)
    db.commit()
    db.refresh(research)
    return research


def list_research(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Research).order_by(models.Research.created_at.desc()).offset(skip).limit(limit).all()


def create_project(db: Session, title: str, image: Optional[str], paragraphs: List[str], status: str = "pending"):
    project = models.Project(title=title, image=image, paragraphs=paragraphs, status=status)
    db.add(project)
    db.commit()
    db.refresh(project)
    return project


def list_projects(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Project).order_by(models.Project.created_at.desc()).offset(skip).limit(limit).all()
