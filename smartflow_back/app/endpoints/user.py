# api/v1/endpoints/user.py

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.db.crud.user import get_user_by_user_id

router = APIRouter()

@router.get("/{user}")
def get_user(user: str, db: Session = Depends(get_db)):
    db_user = get_user_by_user_id(db, user)
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    return {
        "user": db_user.user_id,
        "name": db_user.user_nm,
        "email": db_user.email
    }

@router.get("/")
def ping():
    return {"message": "pong"}