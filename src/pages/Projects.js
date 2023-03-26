import React, { useEffect } from 'react'
import "./Projects.css"
import ProjectsDetail from '../Constants/ProjectsDetail'
import { Link } from "react-router-dom"

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className='works margin-LR-90 fade-in'>
            <h2 className='works-title'>My Works</h2>
            <div className='works-container '>
                {ProjectsDetail.map(work => {
                    return (
                        <div className='work' key={work.id}>
                            <Link to={"/projects/" + work.id}>
                                <div className='image-container'>
                                    <img src={work.image.address} alt={work.image.alt} />
                                </div>
                            </Link>
                            <div className='work-tool'>
                                <h2>{work.appInfo.title}</h2>
                                <Link to={"/projects/" + work.id}>Know More</Link>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    )
}

export default Projects
