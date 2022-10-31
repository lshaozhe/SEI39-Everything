import requests
import re
from bs4 import BeautifulSoup

# URL = "https://realpython.github.io/fake-jobs/"
# page = requests.get(URL)
#
# soup = BeautifulSoup(page.content, "html.parser")
# results = soup.find(id="ResultsContainer")
# job_elements = results.find_all("div", class_="card-content")
#
# for job_element in job_elements:
#     title_element = job_element.find("h2", class_="title")
#     company_element = job_element.find("h3", class_="company")
#     location_element = job_element.find("p", class_="location")
#     print(title_element.text.strip())
#     print(company_element.text.strip())
#     print(location_element.text.strip())
#     print('\n')

URL = "https://www.lazada.sg/products/cafe21-low-fat-2-in1-instant-coffeemix-i303298200-s536616284.html?clickTrackInfo=undefined&search=1&spm=a2o42.searchlistcategory.list.i41.2da8338dbqeevV"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
results_main_container = soup.find(id="container")

results_product_name = results_main_container.find('h1')
# results_all_images = results_main_container.findall(attrs={"alt": results_product_name.text.strip()})
results_main_image = results_main_container.find('div', 'gallery-preview-panel__content')
results_all_image = results_main_container.find_all('div', 'item-gallery__image-wrapper')
results_price = results_main_container.find('div', 'redmart-product-price-container')
# job_elements = results.find_all("div", class_="card-content")

print(results_main_container.prettify())

for item in results_product_name:
    print(item.text.strip())

for item in results_all_image:
    print(item)

print(results_price.text)