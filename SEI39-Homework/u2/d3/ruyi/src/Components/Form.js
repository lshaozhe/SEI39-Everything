import React, {useState} from 'react';

const Form = (props) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name,
            price,
            description,
        }

        props.newProduct(newItem);

        setName("");
        setPrice("");
        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleNameChange} placeholder="product name" />
            <input type="text" value={price} onChange={handlePriceChange} placeholder="price" />
            <input type="text" value={description} onChange={handleDescriptionChange} placeholder="description" />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;