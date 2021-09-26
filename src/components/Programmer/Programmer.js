import React from 'react';
import './Programmer.css'

const Programmer = (props) => {
    const { name, age, img, salary, specialist, country } = props.programmer;
    return (

        <div className="card">
            <img src={img} alt="" width="200px" height="250px" />
            <h5>Name:{name}</h5>
            <p>age: {age}</p>
            <p>{country}</p>
            <p>{specialist}</p>
            <p><small>Salary: {salary}</small></p>
            <button>Add to Cart</button>
        </div>


    );
};

export default Programmer;