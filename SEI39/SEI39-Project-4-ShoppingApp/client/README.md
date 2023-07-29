# Introduction
This is the frontend client, which made use of REACT in JS.

## To start
Install all required node modules
>npm i
<br />
To start the server (default on localhost:3000)

>npm start

## Code structure
1. App / (Contains the navbar and routes (react-router-dom) with a JWT verifier that sets the JWT payload into a state stored in useContext)
	- Homepage / (renders both the products and cart)
		- MultiProductView /
			- SingleProductView /
				- AddtoCartButton /
			- Pagination / (creates a pagination button group)
		- Cart /
			- CartCard /
		
	- Login / (form to login and receive JWT into localstorage)
	
	- Signup / (form to create a normal user)
	
	- OneProduct / (renders a single product)
		- AddtoCartButton /
		- Cart /
			- CartCard /

	- ShoppingCart / (renders the shopping cart view which only login user can see)
	
	- AdminPage / (renders the admin option page which only admin can see)
	
	- AdminUpdate / (renders the update product option page which only admin can see)
	
