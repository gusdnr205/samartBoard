# db/crud/user.py

from sqlalchemy.orm import Session
from app.db.models.tco_user import TcoUser

def get_user_by_user_id(db: Session, user_id: str):
    return db.query(TcoUser).filter(TcoUser.user_id == user_id).first()