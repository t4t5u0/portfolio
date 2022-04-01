import time
from article_server.types import Article
import psycopg2


def connection():
    p = "/run/secrets/POSTGRES_PASSWORD"
    with open(p) as f:
        password = f.read()

    try:
        conn = psycopg2.connect(
            host="postgres", database="pg", user="t4t5u0", password=password
        )
    except Exception as e:
        print("I am unable to connect to the database")
        print(e)
        time.sleep(5)
        return None
    return conn


def delay_connection():
    conn = connection()
    for _ in range(10):
        if conn != None:
            return conn
    return conn

def init_db():
    with delay_connection() as conn, conn.cursor() as cur:
        conn: psycopg2.connection
        cur: psycopg2.cursor

        if not conn:
            print("I am unable to connect to the database")
            exit()

        cur.execute("""
        CREATE TABLE IF NOT EXISTS article (
            id SERIAL PRIMARY KEY,
            title TEXT,
            tags TEXT[],
            url TEXT,
            likes_count INTEGER,
            created_at TIMESTAMP
        );
        """)

def upsert_article(articles: list[Article]):
    conn = connection()
    cur = conn.cursor()
    cur.executemany(
        """
        INSERT INTO article (title, tags, url, likes_count, created_at)
        VALUES (%(title)s, %(tags)s, %(url)s, %(likes_count)s, %(created_at)s)
        ON CONFLICT (url) DO UPDATE
        SET title = %(title)s, tags = %(tags)s, likes_count = %(likes_count)s, created_at = %(created_at)s
        """,
        [article.to_tuple() for article in articles],
    )
