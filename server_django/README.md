# Django Server

## Introduction
This is the backend server for the project, created with Django Rest Framework and managed by pipenv

## To run the server
After creating a shell environment first within the folder directory thru pipenv shell

Thereafter makemigrations and migrate to create the databases thru the following commands:
<br> 
python manage.py makemigrations
<br> 
python manage.py migrate
<br><br>
Once the database tables are created via makemigrations/migrate, run the following command to start the server (It should listen on localhost:8000 by default).
<br>
python manage.py runserver

## Routes within the sever

### Accounts Routes
1. /api/accounts/create/
<br>
PUT request to create a normal user requiring a body, for instance,
<br>
> {
    "email": "JohnDoe@123.net",
    "given_name": "John Doe",
    "name": "Johnny",
    "password": "example"
}

2. /api/accounts/login/
<br>
POST request to login to an account with login detials in the body, for instance,
<br>
This returns the JWT access and refresh token
<br>
> {
    "email": "JohnDoe@123.net",
    "password": "example"
}
3. /api/accounts/refresh/
<br>
POST request to provide a new access token with a valid refresh token sent via the body, for instance,
<br>
This returns a JWT access token
<br>
> {
    "refresh": "{{refresh_token}}"
}

### Products Routes
4. /api/products/
<br>
GET request to ping the server
<br>
This should return a http200 status for a successful ping
<br>
<br>
5. /api/products/seedmany/
<br>
PUT request to seed server with webscrapped data. The request body should be an array of objects (stringified) of all the products scrapped.
<br>
<br>
6. /api/products/create/
<br>
PUT request to seed/create a single product. The request body should be the object (stringified) of a single product. A sample of the body is shown below:
<br>
>{
    "product_name": "Marigold UHT Packet Milk - Full Cream",
    "product_price": "$2.90",
    "product_description": "1L",
    "product_brand": "Marigold",
    "product_images": [
      "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/12529008_XL1_20221021.jpg",
      "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/12529008_LXL1_20210901.jpg",
      "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/12529008_BXL1_20210901.jpg"
    ],
    "product_information": [
      {
        "Key Information": [
          "• With calcium and protein",
          "• Boneplus formulation with vitamin D and calcium to help calcium absorption and improve bone strength"
        ]
      },
      {
        "Country/place of Origin": [
          "Malaysia"
        ]
      },
      {
        "Dietary": [
          "Halal"
        ]
      },
      {
        "Preparation": [
          "Ready to drink"
        ]
      },
      {
        "Storage": [
          "• Once opened, keep refrigerated below 4°C",
          "• Best consumed within 3 days"
        ]
      },
      {
        "Additional Information": []
      }
    ],
    "product_categories": [
      "Drinks",
      "UHT Milk"
    ],
    "product_origin_url": "https://www.fairprice.com.sg/product/marigold-uht-milk-full-cream-1lt-12529008"
  }
<br>
<br>
7. /api/products/getmany/
<br>
GET request to obtain all the products in database. The response is paginated.
<br>
<br>
8. /api/products/get/<product_id>/
<br>
GET request to obtain 1 the products in database via product_id. The id of the product is sent via the params.
<br>
<br>
9. /api/products/update/<product_id>
<br>
PATCH request to alter a product entry in the database. The body requires an object (stringified) of the product key that needs to be updated.
<br>
Partial update is enabled, meaning that only the required key value pair needs to be passed in via the request body (product id sent via params). Eg:
>{"product_price": "$2.00"}
<br>
<br>
10. /api/products/update/<product_id>
<br>
DELETE request to delete an product. It sets the is_active flag of an product to false when the route is called (with product id specified in the params).