import os
from fastapi import APIRouter, Depends, File, UploadFile, Form, HTTPException
from fastapi.responses import FileResponse
from typing import Optional
from app.schemas.content import ContentOut, ContentCreate, ProjectOut
from sqlalchemy.orm import Session
from typing import List
from app.database import SessionLocal
from app.crud.content_crud import create_news, list_news, create_research, list_research, create_project, list_projects
import json

router = APIRouter(prefix="/api", tags=["content"])


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


UPLOAD_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "static", "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)


def save_upload(file: UploadFile) -> str:
    filename = f"{int(__import__('time').time())}_{file.filename}"
    path = os.path.join(UPLOAD_DIR, filename)
    with open(path, "wb") as f:
        f.write(file.file.read())
    return filename


@router.post("/news", response_model=ContentOut)
async def post_news(
    title: str = Form(...),
    image: Optional[UploadFile] = File(None),
    paragraphs: str = Form("[]"),
    db: Session = Depends(get_db),
):
    try:
        paragraphs_list = json.loads(paragraphs)
    except Exception:
        paragraphs_list = []

    saved_url = None
    if image is not None:
        saved = save_upload(image)
        saved_url = f"/api/static/uploads/{saved}"
    news = create_news(db, title=title, image=saved_url, paragraphs=paragraphs_list)
    return news


@router.get("/news", response_model=List[ContentOut])
def get_news(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return list_news(db, skip=skip, limit=limit)


@router.post("/research", response_model=ContentOut)
async def post_research(
    title: str = Form(...),
    image: Optional[UploadFile] = File(None),
    paragraphs: str = Form("[]"),
    db: Session = Depends(get_db),
):
    try:
        paragraphs_list = json.loads(paragraphs)
    except Exception:
        paragraphs_list = []

    saved_url = None
    if image is not None:
        saved = save_upload(image)
        saved_url = f"/api/static/uploads/{saved}"
    research = create_research(db, title=title, image=saved_url, paragraphs=paragraphs_list)
    return research


@router.get("/research", response_model=List[ContentOut])
def get_research(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return list_research(db, skip=skip, limit=limit)


@router.post("/projects", response_model=ProjectOut)
async def post_project(
    title: str = Form(...),
    status: str = Form("pending"),
    image: Optional[UploadFile] = File(None),
    paragraphs: str = Form("[]"),
    db: Session = Depends(get_db),
):
    try:
        paragraphs_list = json.loads(paragraphs)
    except Exception:
        paragraphs_list = []

    saved_url = None
    if image is not None:
        saved = save_upload(image)
        saved_url = f"/api/static/uploads/{saved}"
    project = create_project(db, title=title, image=saved_url, paragraphs=paragraphs_list, status=status)
    return project


@router.get("/projects", response_model=List[ProjectOut])
def get_projects(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return list_projects(db, skip=skip, limit=limit)


@router.get("/static/uploads/{filename}")
def uploaded_file(filename: str):
    path = os.path.join(UPLOAD_DIR, filename)
    if not os.path.exists(path):
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(path)
