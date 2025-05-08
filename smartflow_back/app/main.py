# 📄 app/main.py

from fastapi import FastAPI
from app.api.v1.router import api_router
from app.db.session import engine
from app.db.base import Base  # <- 여기서 모든 모델 import된 상태
# from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

import os
app = FastAPI(
    title="My FastAPI App",
    version="1.0.0"
)
origins = os.getenv("ALLOWORIGIN", "").split(",")
print("🚀 CORS 허용 origin 목록:", origins)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.on_event("startup")
def on_startup():
    print("Creating tables if not exist...")
    Base.metadata.create_all(bind=engine)

app.include_router(api_router, prefix="/api/v1")


print("📌 Loaded DATABASE_URL:", os.getenv("DATABASE_URL"))
