import React from 'react'
import "./Works.css"
import CaseStudies from '../CaseStudies'
import { Link } from "react-router-dom"
import { useStatevalue } from '../stateProvider'

function Works() {
    const [state, dispatch]= useStatevalue()
    console.log(state)
    return (
        <div className='works margin-LR-90 zoom-in'>
            <h2 className='works-title'>My Works</h2>
            <div className='works-container '>
                {CaseStudies.map(work => {
                    return (
                        <div className='work' key={work.id}>
                            <Link to={"/works/" + work.id}>
                                <div className='image-container'>
                                    <img src={work.image.address} alt={work.image.alt} />
                                </div>
                            </Link>
                            <div className='work-tool'>
                                <h2>{work.appInfo.title}</h2>
                                <Link to={"/works/" + work.id}>Know More</Link>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Works
