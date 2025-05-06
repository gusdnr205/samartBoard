# 📄 app/main.py

from fastapi import FastAPI
from app.api.v1.router import api_router
from app.db.session import engine
from app.db.base import Base  # <- 여기서 모든 모델 import된 상태

app = FastAPI(
    title="My FastAPI App",
    version="1.0.0"
)

@app.on_event("startup")
def on_startup():
    print("Creating tables if not exist...")
    Base.metadata.create_all(bind=engine)

app.include_router(api_router, prefix="/api/v1")
