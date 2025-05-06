# 📄 app/db/base.py

from sqlalchemy.orm import declarative_base

Base = declarative_base()

from app.db.models.user import User
from app.db.models.tco_user import TcoUser