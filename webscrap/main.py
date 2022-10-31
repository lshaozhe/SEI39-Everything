import requests
import re
import asyncio
from bs4 import BeautifulSoup


def scrap_category_links(url='https://www.fairprice.com.sg/categories'):
    page = requests.get(url)

    soup = BeautifulSoup(page.content, "html.parser")
    response = soup.find_all('a', attrs={'data-testid': 'sub-category-item'})

    print('scrapper return {} category links'.format(len(response)))

    results = []
    for url in response:
        url = 'https://www.fairprice.com.sg'+url['href']
        results.append(url)
        # scrap_product_links(url)

    return results


def scrap_product_links(url):
    page = requests.get(url)

    soup = BeautifulSoup(page.content, "html.parser")
    response = soup.find_all('a', href=re.compile("/product/"))

    for url in response:
        print('https://www.fairprice.com.sg'+url['href'])


async def start_scrap():
    category_url_list = await scrap_category_links()
    # scrap_product_links(category_url_list)

start_scrap()
