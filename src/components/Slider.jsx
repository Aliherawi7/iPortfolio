import React, { useEffect, useRef, useState } from 'react'
import "./Slider.css"
import { Link } from "react-router-dom"

function Slider({ products = [], delay = 8, }) {
    let [product, setProduct] = useState(products);
    let counter = 0
    const slides = useRef();
    useEffect(() => {
        const interval = window.setInterval(() => {
            next();
        }, (delay * 1000));
        return () => {
            clearInterval(interval);
        }

    }, [])

    const next = () => {
        counter -= 100;
        if (counter <= (-(products.length) * 100)) {
            counter = 0
            slides.current.style.transition = "transform 0s ease";
        } else {
            slides.current.style.transition = "transform 2s cubic-bezier(0.71, 0.15, 0.3, 0.81)";
        }
        slides.current.style.transform = `translateX(${counter}vw)`;
    }
    const prev = () => {
        counter += 100;
        if (counter >= 100) {
            counter = -(products.length) * 100
            slides.current.style.transition = "transform 0s ease";
        } else {
            slides.current.style.transition = "transform 2s cubic-bezier(0.71, 0.15, 0.3, 0.81)";
        }
        slides.current.style.transform = `translateX(${counter}vw)`;
    }
    return (
        <div className='slider'>
            <div className='slider-container'>
                <i className='slide-to-left bi bi-chevron-left' onClick={prev}></i>
                <div className='slides'>
                    <div className='slides-container' ref={slides} >
                        {product.map(item => {
                            return (
                                <div className={`slider-item `} key={item?.id}>
                                    <img className='slider-image' src={item.image.address} alt='' />
                                    <div className='image-info'>
                                        <h1 className='slider-header-2'>{item?.appInfo.title}</h1>
                                        <h2 className='slider-header-1'>{item?.appInfo.header}</h2>
                                        <Link to={'/projects/' + item?.id} className="btn_custom">more details</Link>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
                <i className='slide-to-right bi bi-chevron-right' onClick={next}></i>
            </div>
        </div>
    )
}

export default Slider