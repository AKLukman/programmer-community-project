import React from 'react';
import './Programmer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Programmer = (props) => {
    const { name, age, img, salary, specialist, country } = props.programmer;
    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (

        <div className="card">
            <img src={img} alt="" width="100px" height="100px" />
            <h5>Name:{name}</h5>
            <p>age: {age}</p>
            <p>{country}</p>
            <p>{specialist}</p>
            <p><small>Salary: ${salary}</small></p>
            <button className="btn-regular" onClick={() => props.addToCart(props.programmer)}>{shoppingCart} Add to Cart</button>
        </div>


    );
};

export default Programmer;