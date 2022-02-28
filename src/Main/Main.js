import React from 'react'
import './Main.css'
import Carousel from './Carousel/Carousel';
import { useState } from 'react';

export default function Main() {
    const [itemNumber, setItemNumber] = useState(0);


    return (
        <main>
            <div className="grid-col">
                <Carousel />
                <div className="right">
                    <div className="vert-center">
                        <p>SNEAKER COMPANY</p>
                        <h2>FALL LIMETED SNEAKERS</h2>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est tempore facere deserunt exercitationem
                            esse.
                            Expedita explicabo atque delectus ab modi?</span>
                        <h3>$125.00</h3>
                        <span className="discount">$250.00</span>
                        <div className="bttns">
                            <div className="counter">
                                <button onClick={() => setItemNumber(itemNumber > 0 ? itemNumber - 1 : 0)} ><img src="/images/icon-minus.svg" alt="" /></button>
                                <h4>{itemNumber}</h4>
                                <button onClick={() => setItemNumber(itemNumber + 1)} ><img src="/images/icon-plus.svg" alt="" /></button>
                            </div>
                            <div className="cart">
                                <button onClick={() => {
                                    if (itemNumber) console.log(itemNumber); setItemNumber(0)
                                }}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
