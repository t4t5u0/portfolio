import json
from pathlib import Path

import requests
from bs4 import BeautifulSoup
from fastapi import HTTPException
from pydantic import BaseModel


class Article(BaseModel):
    title: str
    tags: list[dict[str, str]]
    url: str
    likes_count: int
    created_at: str


def get_qiita_articles(user_id: str) -> list[Article]:
    # p = Path(__file__).resolve().parents[1] / "secrets.json"
    p = "/run/secrets/qiita_api_key"
    with open(p) as f:
        json_load = json.load(f)
        TOKEN = json_load["token"]
        # TOKEN = f.read()

    headers = {"Authorization": "Bearer " + TOKEN}

    URL = f"https://qiita.com/api/v2/users/{user_id}/items"

    r_get = requests.get(URL, headers=headers)

    if r_get.status_code == 404:
        raise HTTPException(status_code=404, detail="user not found")

    # other status code hundle

    result = [
        {
            "title": item["title"],
            "tags": [{"name": i["name"]} for i in item["tags"]],
            "url": item["url"],
            "likes_count": item["likes_count"],
            "created_at": item["created_at"],
        }
        for item in r_get.json()
    ]

    return result


def get_zenn_articles(user_id: str) -> list:

    ARTICLES = f"https://zenn.dev/{user_id}"

    # TODO: ページネーションに対応する
    # TODO: Bookに対応する
    # BOOKS = ARTICLES + "?tab=books"

    r_article = requests.get(ARTICLES)

    if r_article.status_code != 200:
        raise HTTPException(r_article.status_code, "Failed to get articles")

    soup = BeautifulSoup(r_article.text, "lxml")

    article_card = soup.select("article.ArticleCard_container__3qUYt")

    return [
        {
            "title": article.select_one("h3.ArticleCard_title__UnBHE").get_text(),
            "url": ARTICLES
            + article.select_one("a.ArticleCard_mainLink__X2TOE").get("href"),
            "tags": [
                {"name": tag.get_text()}
                for tag in article.select("a.ArticleCard_topicLink__NfdwJ")
            ],
            "likes_count": int(
                article.select_one("span.ArticleCard_like__lvRrs").get_text()
            ),
            "created_at": article.select_one("time").get("datetime"),
        }
        for article in article_card
    ]
