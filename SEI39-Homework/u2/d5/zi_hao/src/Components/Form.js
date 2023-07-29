import React, { useState, useEffect } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [inputName, setInputName] = useState("");
  const [validName, setValidName] = useState(false);

  const [price, setPrice] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [validPrice, setValidPrice] = useState(false);

  const [description, setDescription] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [validDesc, setValidDesc] = useState(false);

  useEffect(() => {
    setValidName(inputName.length !== 0);
  }, [inputName]);

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  useEffect(() => {
    setValidPrice(inputPrice.length !== 0);
  }, [inputPrice]);

  const handlePriceChange = (e) => {
    setInputPrice(e.target.value);
  };

  useEffect(() => {
    setValidDesc(inputDesc.length !== 0);
  }, [inputDesc]);

  const handleDescChange = (e) => {
    setInputDesc(e.target.value);
  };

  const createItem = (event) => {
    event.preventDefault();

    if (validName) {
      setName(inputName);
    }

    if (validPrice) {
      setPrice(inputPrice);
    }

    if (validDesc) {
      setDescription(inputDesc);
    }
    props.onSave({
      name: inputName,
      price: inputPrice,
      description: inputDesc,
    });
    setInputName("");
    setInputPrice("");
    setInputDesc("");
  };
  return (
    <>
      <form className="form" onSubmit={createItem}>
        <div className="row">
          <div>
            <label htmlFor="product-name">
              Product Name <span>{validName ? "(valid)" : "(required)"}</span>
            </label>
          </div>
          <div>
            <input
              id="name"
              type="text"
              value={inputName}
              onChange={handleNameChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="price">
              Price <span>{validPrice ? "(valid)" : "(required)"}</span>
            </label>
          </div>
          <div>
            <input
              id="price"
              type="text"
              value={inputPrice}
              onChange={handlePriceChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div>
            <label htmlFor="description">
              Description <span>{validDesc ? "(valid)" : "(required)"}</span>
            </label>
          </div>
          <div>
            <input
              id="description"
              type="text"
              value={inputDesc}
              onChange={handleDescChange}
              required
            />
          </div>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
        <br />
      </form>
    </>
  );
};

export default Form;
