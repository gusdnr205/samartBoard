from fastapi import FastAPI
from app.api.v1.router import api_router

from app.db.session import engine
from app.db.base_class import Base  # 👈 Base만 import (순환 방지용)
from app.db import base  # 👈 모델들을 등록만 함 (실제 사용 X, import만 하면 됨)

# ✅ 테이블 생성
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="My FastAPI App",
    version="1.0.0"
)

app.include_router(api_router, prefix="/api/v1")
