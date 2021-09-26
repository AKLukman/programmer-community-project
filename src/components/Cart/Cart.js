import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    const total = cart.reduce((previous, currentSalary) => previous + currentSalary.salary, 0);

    return (
        <div>
            <p>Added Programmer: {cart.length}</p>
            <p>Total cost: ${total}</p>
            <div className="names">
                {
                    cart.map(programmer => <h5>{programmer.name}</h5>)
                }
            </div>
        </div>
    );
};

export default Cart;