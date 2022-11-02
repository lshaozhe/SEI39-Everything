import requests
import re
import time
from threading import Thread
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

# Global variables for storing threaded returns
all_product_url_list = []


def create_selenium_driver():
    options = Options()
    options.headless = True
    service = Service(executable_path="./chromedriver")
    driver = webdriver.Chrome(service=service, options=options)
    return driver


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


def scrap_product_links(url, selenium_driver):

    raw_html_response = selenium_scroll_and_return_html(url, selenium_driver)

    soup = BeautifulSoup(raw_html_response, 'html.parser')
    response = soup.find_all('a', href=re.compile("/product/"))

    print('scrapper returned {} products from {}'.format(len(response), url))

    results = []
    for url in response:
        url = 'https://www.fairprice.com.sg'+url['href']
        results.append(url)

    global all_product_url_list
    all_product_url_list = all_product_url_list + results


def scrap_product_details(url='https://www.fairprice.com.sg/product/fairprice-gold-3-ply-bathtroom-tissues-10-rolls-13095920'):
    page = requests.get(url)

    soup = BeautifulSoup(page.content, "html.parser")
    product_name = soup.find('span', attrs={'class': 'sc-1bsd7ul-1 djlKtC'}).text.strip()
    product_price = soup.find('span', attrs={'class': 'sc-1bsd7ul-1 sc-13n2dsm-5 kxEbZl deQJPo'}).text.strip()
    product_short_description = soup.find('span', attrs={'class': 'sc-1bsd7ul-1 LLmwF'}).text.strip()
    product_brand = soup.find('a', attrs={'class': 'sc-13n2dsm-1 jLtMNk'}).text.strip()
    product_main_image = re.search('\((.*?)\)', str(soup.find('div', attrs={'class': 'sc-vhxzaf-0 cTfRiy'}))).group(1)
    product_more_images = soup.find_all('img', attrs={'class': 'sc-10zw1uf-11 gyQcYf'})
    uncleaned_product_long_description = soup.find_all('div', attrs={'class': 'sc-3zvnd-0 hOgsAE'})

    # print(soup.prettify())
    print(product_name)
    print(product_price)
    print(product_short_description)
    print(product_brand)
    print(product_main_image)
    for item in product_more_images:
        print(item['src'])

    product_long_description = []
    for item in uncleaned_product_long_description:
        product_long_description.append(re.findall('(?<=>)[a-zA-Z0-9\ &;!,/]+(?=<)', str(item)))

    print(product_long_description)


def selenium_scroll_and_return_html(url, driver):
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
    all_category_brand_url_set = set()

    # Below gets all category and brand url
    category_url_list = scrap_category_links()
    brand_url_list = scrap_brand_links()
    all_category_brand_url_set = set(category_url_list + brand_url_list)
    print('scrapper returned {} unique category/ brand links'.format(len(all_category_brand_url_set)))

    # Below gets all products url
    threads = []
    for url in all_category_brand_url_set:
        t = Thread(target=scrap_product_links, args=(url, create_selenium_driver()))
        t.start()
        threads.append(t)
    for t in threads:
        t.join()
    all_product_url_set = set(all_product_url_list)
    print('scrapper returned {} unique product links'.format(len(all_product_url_set)))


if __name__ == '__main__':
    start_scrap()
    # scrap_product_details('https://www.fairprice.com.sg/product/magiclean-bathroom-stain-mold-remover-400ml-12329292')
