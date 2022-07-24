import React, { useState} from 'react'
import {Link} from 'react-router-dom'
import "./Slider.css"
import CaseStudies from "../CaseStudies"

let counter = 0
let animate = { ANIMATE_LEFT_RIGHT: "left-to-right", ANIMATE_RIGHT_LEFT: "right-to-left" }
function Slider() {
    const [sliderComponent, setSliderComponent] = useState({ comp: Slides[0], animate: animate.ANIMATE_LEFT_RIGHT })

    const nextSlide = () => {
        counter++;
        if (counter > CaseStudies.length - 1) {
            counter = 0;
        }
        setSliderComponent({ comp: Slides[counter % 2], animate: animate.ANIMATE_LEFT_RIGHT })
    }
    const prevSlide = () => {
        counter--;
        if (counter < 0) {
            counter = CaseStudies.length - 1;
        }
        setSliderComponent({ comp: Slides[counter % 2], animate: animate.ANIMATE_RIGHT_LEFT })
    }
    return (

        <div className='case-studies-container'>
            <i className='bi bi-chevron-left' onClick={nextSlide}></i>
            <div className='slider-container'>
                <Link to={"/works/"+counter}>
                    {<sliderComponent.comp
                        image={CaseStudies[counter].image}
                        appInfo={CaseStudies[counter].appInfo}
                        animate={sliderComponent.animate}
                    />}
                </Link>
            </div>
            <i className='bi bi-chevron-right' onClick={prevSlide}></i>
        </div>
    )
}





function Container1({ appInfo, image, animate }) {
    return (
        <div className={'slider ' + animate}>
            <img src={image.address} className="slider-image" alt={image.alt} />
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
function Container2({ appInfo, image, animate }) {
    return (
        <div className={'slider ' + animate}>
            <img src={image.address} className="slider-image" alt={image.alt} />
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
const Slides = [Container1, Container2];

export default Slider