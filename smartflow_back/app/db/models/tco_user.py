from sqlalchemy import Column, String, Integer
from app.db.base_class import Base

class TcoUser(Base):
    __tablename__ = "tco_user"
    # __table_args__ = {"schema": "ciscom"}

    user_id = Column(String, primary_key=True)
    user_nm = Column(String(100))
    email = Column(String(255))