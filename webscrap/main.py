import requests
import re
import asyncio
from bs4 import BeautifulSoup
from selenium import webdriver


def scrap_category_links(url='https://www.fairprice.com.sg/categories'):
    page = requests.get(url)

    soup = BeautifulSoup(page.content, "html.parser")
    response = soup.find_all('a', attrs={'data-testid': 'sub-category-item'})

    print('scrapper return {} category links'.format(len(response)))

    results = []
    for url in response:
        url = 'https://www.fairprice.com.sg'+url['href']
        results.append(url)

    return results


def scrap_product_links(url):
    page = requests.get(url)

    soup = BeautifulSoup(page.content, "html.parser")
    response = soup.find_all('a', href=re.compile("/product/"))

    for url in response:
        print('https://www.fairprice.com.sg'+url['href'])


def start_scrap():
    category_url_list = scrap_category_links()
    for url in category_url_list:
        scrap_product_links(url)


if __name__ == '__main__':
    start_scrap()
