import requests
import re
import time
from threading import Thread
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from sample_data_product_links import product_url_set

# Global variables for storing threaded returns
all_product_url_list = []
all_product_details_list = []
counter = 0


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


def scrap_product_details(url='https://www.fairprice.com.sg/product/meatlovers-ohmi-yakiniku-chill-250-g-90073727'):
    page = requests.get(url)

    try:
        soup = BeautifulSoup(page.content, "html.parser")
        product_name = soup.find('span', attrs={'class': 'sc-1bsd7ul-1 djlKtC'}).text.strip()
        product_price = soup.find('span', attrs={'class': 'sc-1bsd7ul-1 sc-13n2dsm-5 kxEbZl deQJPo'}).text.strip()
        product_description = soup.find('span', attrs={'class': 'sc-1bsd7ul-1 LLmwF'}).text.strip()
        product_brand = soup.find('a', attrs={'class': 'sc-13n2dsm-1 jLtMNk'}).text.strip()
        product_images = soup.find_all('img', attrs={'class': 'sc-10zw1uf-11 gyQcYf'})
        product_information = soup.find_all('div', attrs={'class': 'sc-3zvnd-0 hOgsAE'})
        uncleaned_product_categories = soup.find_all('a', attrs={'class': 'sc-scqi9x-1 kWVUbN'})

        # Cleaning url for img found without query modifiers at the end of url
        the_regex = re.compile('^[^?]+')
        for i in range(len(product_images)):
            the_string = product_images[i]['src']
            found_string = re.search(the_regex, the_string).group(0)
            product_images[i] = found_string

        # Cleaning product information stuff here
        # the_regex = re.compile('(?<=>)[a-zA-Z0-9\ &;!,/]+(?=<)')
        the_regex = re.compile('>(.*?)<')
        for i in range(len(product_information)):
            the_string = str(product_information[i])
            found_list_with_null = re.findall(the_regex, the_string)
            found_list = [i for i in found_list_with_null if i != '']
            for j in range(len(found_list)):
                clean_string = re.sub('(&?am|nbs)p;', '', found_list[j])
                if j == 0:
                    product_information_key = clean_string
                else:
                    found_list[j] = clean_string
            found_list.pop(0)
            product_information[i] = {product_information_key: found_list}

        # Cleaning product categories here
        product_categories = []
        for item in uncleaned_product_categories:
            if item.text.strip() != 'Home':
                product_categories.append(item.text.strip())
        product_categories = set(product_categories)
        product_categories = list(product_categories)

        # print(soup.prettify())

        product = {
            'product_name': product_name,
            'product_price': product_price,
            'product_description': product_description,
            'product_brand': product_brand,
            'product_images': product_images,
            'product_information': product_information,
            'product_categories': product_categories,
            'product_origin_url': url,
        }
        # print(product)

        all_product_details_list.append(product)
        f = open("product_details.txt", "a")
        f.write(str(product) + ',\n')
        f.close()

    except:
        print('scrapper cannot scrap {}'.format(url))

    finally:
        global counter
        counter = counter + 1
        if counter % 250 == 0:
            print('scrapper had scrapped {} products'.format(counter))


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
    threads1 = []
    for url in all_category_brand_url_set:
        t1 = Thread(target=scrap_product_links, args=(url, create_selenium_driver()))
        t1.start()
        threads1.append(t1)
    for t1 in threads1:
        t1.join()
    all_product_url_set = set(all_product_url_list)
    f = open("product_url.txt", "a")
    f.write(str(all_product_url_set))
    f.close()
    print('scrapper returned {} unique product links'.format(len(all_product_url_set)))

    # Below gets all product details
    threads2 = []
    for url in product_url_set:
        t2 = Thread(target=scrap_product_details, args=(url,))
        t2.start()
        threads2.append(t2)
    for t2 in threads2:
        t2.join()
    f = open("product_details.txt", "a")
    f.write(str(all_product_details_list))
    f.close()
    print('scrapping completed')


if __name__ == '__main__':
    # start_scrap()

    # scrap_product_details('https://www.fairprice.com.sg/product/karihome-goat-milk-growing-up-formula-stage-3-900g-13210795')

    threads2 = []
    for url in product_url_set:
        t2 = Thread(target=scrap_product_details, args=(url,))
        t2.start()
        threads2.append(t2)
    for t2 in threads2:
        t2.join()
    # f = open("product_details.txt", "a")
    # f.write(str(all_product_details_list))
    # f.close()
    print('scrapping completed')
