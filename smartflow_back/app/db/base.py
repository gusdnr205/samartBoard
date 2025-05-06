# 📄 app/db/base.py

from sqlalchemy.orm import declarative_base

Base = declarative_base()

from app.models.user import User   # 자동 테이블 생성 대상
from app.models.tco_user import TcoUser