import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Programmer from '../Programmer/Programmer';
import './Programmers.css'

const Programmers = () => {
    // This useState for programmers
    const [programmers, setProgrammers] = useState([])

    // This useState for cart
    const [cart, setCart] = useState([]);

    // Load data using useEfect
    useEffect(() => {
        fetch('./programers.json')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, [])



    const addToCart = programmer => {

        const newCart = [...cart, programmer];

        setCart(newCart)
    }

    return (
        <div className="programmers">
            <div className="programmer">
                {
                    programmers.map(programmer => <Programmer

                        key={programmer.id}
                        programmer={programmer}
                        addToCart={addToCart}

                    ></Programmer>
                    )
                }
            </div>


            <div className="cost-cart">
                <Cart
                    key={cart.id}
                    cart={cart}

                ></Cart>
            </div>

        </div>
    );
};

export default Programmers;