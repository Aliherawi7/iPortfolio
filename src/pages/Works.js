import React from 'react'
import "./Works.css"
import CaseStudies from '../CaseStudies'
import {Link} from "react-router-dom"

function Works() {

  return (
    <div className='works margin-LR-90'>
        <h2>My Works</h2>
        <div className='works-container '>
            {CaseStudies.map(work => {
                return(
                <div className='work'>
                    <div className='image-container'>
                        <img src={work.image.address} alt={work.image.alt}/>
                    </div>
                    <div className='work-tool'>
                        <h2>{work.appInfo.title}</h2>
                        <Link to="">Know More</Link>
                    </div>
                </div>)
            })}
        </div>
    </div>
  )
}

export default Works