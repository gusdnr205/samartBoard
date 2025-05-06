# 📄 app/api/v1/router.py

from fastapi import APIRouter
from app.endpoints import user

api_router = APIRouter()
api_router.include_router(user.router, prefix="/users", tags=["Users"])
