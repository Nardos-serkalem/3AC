from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app import models
from app.database import engine
from app.routes import auth
from app.routes import content

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS settings - add your frontend origin(s) here
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # for development, list the exact origins you use
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(content.router)


@app.get("/")
def read_root():
    return {"message": "PostgreSQL connected successfully!"}
