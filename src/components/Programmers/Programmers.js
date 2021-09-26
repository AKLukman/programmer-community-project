import React, { useEffect, useState } from 'react';
import Programmer from '../Programmer/Programmer';
import './Programmers.css'

const Programmers = () => {

    const [programmers, setProgrammers] = useState([])

    useEffect(() => {
        fetch('./programers.json')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, [])

    return (
        <div className="programmers">
            <div className="programmer">
                {
                    programmers.map(programmer => <Programmer

                        key={programmer.id}
                        programmer={programmer}

                    ></Programmer>
                    )
                }
            </div>


            <div className="cost-cart">
                <p>Total Cost: </p>
            </div>

        </div>
    );
};

export default Programmers;