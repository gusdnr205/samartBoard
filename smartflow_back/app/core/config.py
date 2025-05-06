# from pydantic_settings import BaseSettings
# class Settings(BaseSettings):
#     db_host: str
#     db_port: int
#     db_user: str
#     db_password: str
#     db_name: str

#     @property
#     def database_url(self):
#         return f"mysql+pymysql://{self.db_user}:{self.db_password}@{self.db_host}:{self.db_port}/{self.db_name}"

#     class Config:
#         env_file = ".env"

# settings = Settings()
# settings.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str  # Render에서는 이 값만 env로 주입받으면 됨

    class Config:
        env_file = ".env"  # 로컬 개발용 (.env는 Git에 올리지 말 것)

settings = Settings()
