from pathlib import Path
from os import path
import urllib.request
from bs4 import BeautifulSoup
from urllib.parse import urljoin

base_path = Path(__file__).parent
base_url = "http://apod.nasa.gov/apod/archivepix.html"
download_directory = path.join(base_path, "apod_pictures")

to_visit = set((base_url,))
visited = set()

while to_visit:
    current_page = to_visit.pop()
    print(f"Visiting {current_page}")
    visited.add(current_page)
    content = urllib.request.urlopen(current_page).read()
    for link in BeautifulSoup(content, "lxml").findAll("a"):
        absolute_url = urljoin(current_page, link["href"])
        if absolute_url not in visited:
            to_visit.add(absolute_url)
        else:
            print(f"Already visited: {absolute_url}")

    for img in BeautifulSoup(content, "lxml").findAll("img"):
        img_href = urljoin(current_page, img["src"])
        print(f"Downloading image: {img_href}")
        img_name = img_href.split("/")[-1]
        urllib.request.urlretrieve(img_href, path.join(download_directory, img_name))
