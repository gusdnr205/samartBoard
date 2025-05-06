from fastapi import APIRouter
from app.endpoints import user
from app.db.session import engine
from app.db.base import Base  # 모든 모델 import되어야 함
from app.api.v1.router import api_router
api_router = APIRouter()

# ✅ 여기에!
Base.metadata.create_all(bind=engine)

api_router.include_router(user.router, prefix="/users", tags=["Users"])