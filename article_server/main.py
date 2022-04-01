import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from article_server.db import init_db, upsert_article
from article_server.getArticle import (Article, get_qiita_articles,
                                       get_zenn_articles)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,  
    allow_methods=["*"],    
    allow_headers=["*"]
)

@app.get("/v1/qiita/{user_id}")
async def qiita_articles(user_id: str) -> list[Article]:
    # return get_qiita_articles(user_id)
    upsert_article(get_qiita_articles(user_id))


@app.get("/v1/zenn/{user_id}")
async def zenn_articles(user_id: str) -> list[Article]:
    # return get_zenn_articles(user_id)
    upsert_article(get_zenn_articles(user_id))


def main():
    init_db()
    uvicorn.run("main:app", host="127.0.0.1", port=8000)


if __name__ == "__main__":
    main()
