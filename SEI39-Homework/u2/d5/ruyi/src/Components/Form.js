import React, {useRef} from 'react';

const Form = (props) => {

    const nameRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const inputName = nameRef.current.value;
        const inputPrice = priceRef.current.value;
        const inputDescription = descriptionRef.current.value;

        let newItem = {};

        if (inputName !== "" && inputPrice !== "" && inputDescription !== "") {
            if (!isNaN(inputPrice)) {
                newItem = {
                    name: inputName,
                    price: inputPrice,
                    description: inputDescription,
                }
    
                props.newProduct(newItem);
    
                nameRef.current.value = "";
                priceRef.current.value = "";
                descriptionRef.current.value = "";
            } else {
                alert("Only numbers are accepted for price.")
            }

        } else {
            alert("Please answer all fields.")
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="product name" ref={nameRef} />
            <input type="text" placeholder="price" ref={priceRef} />
            <input type="text" placeholder="description" ref={descriptionRef} />

            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;