from pathlib import Path
from os import path
import urllib.request
from bs4 import BeautifulSoup
from urllib.parse import urljoin

base_path = Path(__file__).parent

base_url = "http://apod.nasa.gov/apod/archivepix.html"
content = urllib.request.urlopen(base_url).read()

for link in BeautifulSoup(content, "lxml").findAll("a"):
    print(f"Following link: {link}")
    href = urljoin(base_url, link["href"])

    content = urllib.request.urlopen(href).read()
    for img in BeautifulSoup(content, "lxml").findAll("img"):
        img_href = urljoin(href, img["src"])
        print(f"Downloading image: {img_href}")
        img_name = img_href.split("/")[-1]
        urllib.request.urlretrieve(
            img_href, path.join(base_path, "apod_pictures", img_name)
        )
