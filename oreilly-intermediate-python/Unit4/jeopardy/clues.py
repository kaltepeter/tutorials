import sqlite3
from pathlib import Path
from os import path

base_path = Path(__file__).parent

connection = sqlite3.connect(path.join(base_path, "jeopardy.db"))
cursor = connection.cursor()

cursor.execute("SELECT text, answer, value FROM clue LIMIT 10")
results = cursor.fetchall()

for clue in results:
    text, answer, value = clue
    print(f"[${value}]")
    print(f"Question: {text}")
    print(f"Answer: What is '{answer}'?")
    print("")

connection.close()
