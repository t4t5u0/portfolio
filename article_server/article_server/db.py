import time
import psycopg2

def connection():
    p = "/run/secrets/postgresql/POSTGRESQL_PASSWORD"
    with open(p) as f:
        password = f.read()

    try:
        conn = psycopg2.connect(
            host="localhost",
            database="pg",
            user="t4t5u0",
            password=password
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