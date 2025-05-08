from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    lostark_api_key: str
    ALLOWORIGIN: str


    class Config:
        env_file = ".env"

settings = Settings()
