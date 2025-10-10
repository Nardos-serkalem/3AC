from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


class ContentBase(BaseModel):
    title: str


class ContentCreate(ContentBase):
    # avoid mutable default; allow None to indicate no paragraphs
    paragraphs: Optional[List[str]] = None


class ContentOut(ContentBase):
    id: int
    image: Optional[str] = None
    paragraphs: Optional[List[str]] = None
    created_at: Optional[datetime] = None

    class Config:
        orm_mode = True


class ProjectCreate(ContentCreate):
    status: str = "pending"


class ProjectOut(ContentOut):
    status: str
