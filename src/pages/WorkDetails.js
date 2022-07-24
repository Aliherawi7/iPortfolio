import React from 'react'
import { useParams } from 'react-router-dom'
import CaseStudies from '../CaseStudies';
import "./WorkDetails.css"

function WorkDetails() {
    const { id } = useParams();
    const work = CaseStudies[id];
    console.log(work)
    return (
        <div className='work-details'>
            <h2 className='work-title'>{work.appInfo.title}</h2>
            <div className='image-container'>
                <img src={work.image.address} alt={work.image.alt} />
            </div>
            <div className='details-text'>
                <div className='detail-body'>
                    <h3>Overview</h3>
                    <p>
                        {work.appInfo.body}
                    </p>
                </div>
                <div className='detail-body'>
                    <h3>Problem</h3>
                    <p>
                        {work.appInfo.body}
                    </p>
                </div>
                <div className='detail-body'>
                    <h3>Solution</h3>
                    <p>
                        {work.appInfo.body}
                    </p>
                </div>
                <div className='work-links detail-body'>
                    <h3>Work links</h3>
                    <a href=''><i className='bi bi-github'></i></a>
                    <a href=''><i className='bi bi-globe'></i></a>
                    <a href=''><i className='bi bi-linkedin'></i></a>
                </div>
            </div>
        </div>
    )
}

export default WorkDetails