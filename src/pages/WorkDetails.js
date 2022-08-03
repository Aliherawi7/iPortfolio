import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CaseStudies from '../CaseStudies';
import "./WorkDetails.css"

function WorkDetails() {
    const { id } = useParams();
    const work = CaseStudies[id];
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    return (work?
        <div className='work-details padding-LR-90 top-to-bottom'>
            <h1 className='work-title'>{work.appInfo.title}</h1>
            <div className='image-container'>
                <img src={work.image.address} alt={work.image.alt} />
            </div>
            <div className='details-text'>
                <div className='detail-body'>
                    <h2>Overview</h2>
                    <p>
                        {work.appInfo.body}
                    </p>
                </div>
                <div className='detail-body'>
                    <h2>Problem</h2>
                    <p>
                        {work.appInfo.body}
                    </p>
                </div>
                <div className='detail-body'>
                    <h2>Solution</h2>
                    <p>
                        {work.appInfo.body}
                    </p>
                </div>
                <div className='work-links detail-body'>
                    <h2>repository links</h2>
                    <a href=''><i className='bi bi-github'></i></a>
                    <a href=''><i className='bi bi-globe'></i></a>
                    <a href=''><i className='bi bi-linkedin'></i></a>
                </div>
            </div>
        </div>
        : <h1>Not found!</h1>
    )
}

export default WorkDetails