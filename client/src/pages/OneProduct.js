import React from "react";

import AddtoCartButton from "../common/AddtoCartButton";
import SingleProductInfo from "../components/SingleProductInfo";

let product = {
  product_name: "BRABANTIA Protective Ironing Cloth",
  product_price: "$15.00",
  product_description: "1 pc",
  product_brand: "Brabantia",
  product_images: [
    "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/90083495_XL1_20220915.jpg",
    "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/90083495_LXL1_20220915.jpg",
    "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/90083495_RXL1_20220915.jpg",
    "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/90083495_BXL1_20220915.jpg",
  ],
  product_information: [
    {
      "Key Information": [
        "Brabantia takes the pressure off ironing, starting by stopping shiny ironing marks. The mesh Protective Ironing Cloth, size 40 x 60 cm, provides maximum safety for even the most sensitive fabrics. Its see-through, so you know where youre ironing for better results. So you can shine, and your clothes will not.",
      ],
    },
    { "Country/place of Origin": ["Belgium"] },
    {
      Preparation: [
        "Brabantia takes the pressure off ironing, starting by stopping shiny ironing marks. The mesh Protective Ironing Cloth, size 40 x 60 cm, provides maximum safety for even the most sensitive fabrics. Its see-through, so you know where youre ironing for better results. So you can shine, and your clothes will not.",
      ],
    },
    { Storage: ["Store in a cool and dry place"] },
  ],
  product_categories: ["Laundry Accessories", "Household", "Home Needs"],
  product_origin_url:
    "https://www.fairprice.com.sg/product/brabantia-protective-ironing-cloth-1-pc-90083495",
};

const OneProduct = () => {
  const iterateProductInfo = () => {
    product.product_information.map((element) => (
      <SingleProductInfo prodInfo={element} />
    ));
  };

  return (
    <div className="container">
      <br />
      <div className="row">
        <h1>{product.product_name}</h1>
      </div>
      <br />
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-6">
          <img
            class="img-fluid"
            src={product.product_images[0]}
            alt={product.product_name}
          />
        </div>
        <div className="col-4 flex">
          <h5>Price: {product.product_price}</h5>
          <h5>Brand: {product.product_brand}</h5>
          <h5>Description: {product.product_description}</h5>
          <br />
          <AddtoCartButton />
        </div>

        <div className="row">
          <h2>More Information</h2>
        </div>
        {iterateProductInfo}
      </div>
    </div>
  );
};

export default OneProduct;
