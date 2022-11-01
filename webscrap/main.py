import requests
import re
import asyncio
import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

options = Options()
options.headless = True
service = Service(executable_path="./chromedriver")
driver = webdriver.Chrome(service=service, options=options)


def scrap_category_links(url='https://www.fairprice.com.sg/categories'):
    page = requests.get(url)

    soup = BeautifulSoup(page.content, "html.parser")
    response = soup.find_all('a', attrs={'data-testid': 'sub-category-item'})

    print('scrapper returned {} category links'.format(len(response)))

    results = []
    for url in response:
        url = 'https://www.fairprice.com.sg'+url['href']
        results.append(url)

    return results


def scrap_brand_links(url='https://www.fairprice.com.sg/brands'):
    page = requests.get(url)

    soup = BeautifulSoup(page.content, "html.parser")
    response = soup.find_all('div', href=re.compile("/brand/"))

    print('scrapper returned {} brand links'.format(len(response)))

    results = []
    for url in response:
        url = 'https://www.fairprice.com.sg'+url['href']
        results.append(url)

    return results


def scrap_product_links(url):
    raw_html_response = selenium_scroll_and_return_html(url)

    soup = BeautifulSoup(raw_html_response, 'html.parser')
    response = soup.find_all('a', href=re.compile("/product/"))

    # for url in response:
    #     print('https://www.fairprice.com.sg'+url['href'])

    print('scrapper returned {} products from {}'.format(len(response), url))


def selenium_scroll_and_return_html(url):
    # SET SCROLL PAUSE TIME FIRST
    selenium_scroll_pause_time = 0.5
    driver.get(url)

    # Get scroll height
    last_height = driver.execute_script("return document.body.scrollHeight")

    while True:
        # Scroll down to bottom
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

        # Wait to load page
        time.sleep(selenium_scroll_pause_time)

        # Calculate new scroll height and compare with last scroll height
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            break
        last_height = new_height

    html_source_code = driver.execute_script("return document.body.innerHTML;")

    return html_source_code


def start_scrap():
    category_url_list = scrap_category_links()
    brand_url_list = scrap_brand_links()

    for url in (category_url_list + brand_url_list):
        scrap_product_links(url)


if __name__ == '__main__':
    start_scrap()
