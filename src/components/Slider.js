import React from 'react'
import "./Slider.css"

function Slider1({ appInfo, image }) {
    return (
        <div className='slider'>
            <img src={image.address} className="slider-image" alt={image.alt}/>
            <div className='slider-text'>
                <h3 className='slider-header-2'>{appInfo.header}</h3>
                <h2 className='slider-header-1'>{appInfo.title}</h2>
                <p className='slider-text-body'>
                    {appInfo.body}
                </p>
            </div>
        </div>
    )
}
function Slider2({ appInfo, image }) {
    return (
        <div className='slider'>
            <img src={image.address} className="slider-image" alt={image.alt}/>
            <div className='slider-text'>
                <h3 className='slider-header-2'>{appInfo.header}</h3>
                <h2 className='slider-header-1'>{appInfo.title}</h2>
                <p className='slider-text-body'>
                    {appInfo.body}
                </p>
            </div>
        </div>
    )
}
const Slider = [Slider1, Slider2];

export default Slider