import React,{useState} from 'react'
import "./Slider.css"
import CaseStudies from "../CaseStudies"


let counter = 0
let animate = "left-to-right"
function Slider() {
    const [sliderComponent, setSliderComponent] = useState({ comp: Slides[0] })
    const nextSlide = () => {
        counter++;
        if (counter > CaseStudies.length - 1) {
            counter = 0;
        }
        animate = "left-to-right"
        setSliderComponent({ comp: Slides[counter % 2] })
        
    }
    const prevSlide = () => {
        counter--;
        if (counter < 0) {
            counter = CaseStudies.length - 1;
        } 
        animate = "right-to-left"
        setSliderComponent({ comp: Slides[counter % 2] })
    }
    return (
        <div className='case-studies-container'>
            <i className='bi bi-chevron-left' onClick={nextSlide}></i>
            <div className='slider-container'>
                {<sliderComponent.comp
                    image={CaseStudies[counter].image}
                    appInfo={CaseStudies[counter].appInfo}
                    animate = {animate}
                />}
            </div>
            <i className='bi bi-chevron-right' onClick={prevSlide}></i>
        </div>
    )
}
function Container1({ appInfo, image ,animate}) {
    return (
        <div className={'slider '+animate}>
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
function Container2({ appInfo, image ,animate}) {
    return (
        <div className={'slider '+animate}>
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