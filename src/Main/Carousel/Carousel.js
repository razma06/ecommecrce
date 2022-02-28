import React from 'react'
import './Carousel.css'
import { useState } from 'react';

export default function Carousel() {
    const [prevId, setPrevId] = useState('1');
    const [isClicked, setIsClicked] = useState(false);

    return (<>
        <div className="left">
            <div className="img-container">
                <img className="pr-img" src={`/images/image-product-${prevId}.jpg`} alt=""
                    onClick={() => { if (window.innerWidth > 880) setIsClicked(!isClicked) }} />
            </div>
            <div className="flex-spcbtw">
                <div className="prev" >
                    <img src="/images/image-product-1-thumbnail.jpg" alt="" className={prevId === '1' ? "lighten" : undefined} id="1" onClick={(e) => setPrevId(e.target.id)} />
                </div>
                <div className="prev">
                    <img src="/images/image-product-2-thumbnail.jpg" alt="" className={prevId === '2' ? "lighten" : undefined} id="2" onClick={(e) => setPrevId(e.target.id)} />
                </div>
                <div className="prev" >
                    <img src="/images/image-product-3-thumbnail.jpg" alt="" className={prevId === '3' ? "lighten" : undefined} id="3" onClick={(e) => setPrevId(e.target.id)} />
                </div>
                <div className="prev" >
                    <img src="/images/image-product-4-thumbnail.jpg" alt="" className={prevId === '4' ? "lighten" : undefined} id="4" onClick={(e) => setPrevId(e.target.id)} />
                </div>
            </div>

        </div>
        <div className={isClicked ? "ctabs active" : "ctabs disable"}>
            <button onClick={() => setIsClicked(false)}><img src="./images/icon-close.svg" alt="" /></button>
            <img className="pr-img" src={`/images/image-product-${prevId}.jpg`} alt="" />
        </div>
    </>
    )
}
