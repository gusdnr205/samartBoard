import os
import httpx
from fastapi import HTTPException
from urllib.parse import quote


LOSTARK_API_KEY = os.getenv("LOSTARK_API_KEY")
LOSTARK_API_URL = "https://developer-lostark.game.onstove.com"

async def fetch_lostark_data(endpoint: str, character_name: str):
    if not LOSTARK_API_KEY:
        raise HTTPException(status_code=500, detail="LOSTARK_API_KEY is missing")

    print(LOSTARK_API_KEY)

    headers = {
        "Accept": "application/json",
        "authorization": f"bearer {LOSTARK_API_KEY}",  # ✅ B 대문자
    }
    print(headers)
    # character_name_encoded = quote(character_name)
    url = f"{LOSTARK_API_URL}/armories/characters/{character_name}/{endpoint}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=response.text)

    return response.json()


async def fetch_lostark_News(searchText:str):
    if not LOSTARK_API_KEY:
        raise HTTPException(status_code=500, detail="LOSTARK_API_KEY is missing")

    headers = {
        "Accept": "application/json",
        "Authorization": f"Bearer {LOSTARK_API_KEY}",  # ✅ B 대문자
    }

    # 'https://developer-lostark.game.onstove.com/news/notices?searchText=
    url = f"{LOSTARK_API_URL}/news/notices?searchText={searchText}"

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=response.text)

    return response.json()
