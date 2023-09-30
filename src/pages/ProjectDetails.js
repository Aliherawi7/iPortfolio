import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../components/NotFound';
import ProjectsDetail from '../Constants/ProjectsDetail';
import "./ProjectDetails.css"
import Modal from "../components/Modal"

function ProjectDetails() {
    const { id } = useParams();
    const project = ProjectsDetail[id];
    const [showModal, setShowModal] = useState(false)
    const [projectImage, setProjectImage] = useState("")
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    function modalSlide(previosImage, direction) {
        const index = project?.appInfo?.preview.findIndex(item => {
            return item == previosImage
        })
        switch (direction) {
            case 'left':
                setProjectImage(project?.appInfo?.preview[index - 1 < 0 ? project?.appInfo?.preview.length - 1 : index - 1]);
                break;
            case 'right':
                setProjectImage(project?.appInfo?.preview[index + 1 == project?.appInfo?.preview.length ? 0 : index + 1]);
                break
        }

    }
    function fullScreen(img) {
        setProjectImage(img)
        setShowModal(!showModal)

    }

    return (project ?
        <div className='project-details padding-LR-90 top-to-bottom'>
            <h1 className='project-title'>{project?.appInfo?.title}</h1>
            <div className='image-container'>
                <img src={project.image.address} alt={project.image.alt} />
            </div>
            <Modal show={showModal} ModalClose={() => setShowModal(!showModal)}>
                <span className='slide' onClick={() => modalSlide(projectImage, 'left')}> <i className='bi bi-chevron-left'></i></span>
                <img src={projectImage} alt={project?.appInfo?.title} />
                <span className='slide right' onClick={() => modalSlide(projectImage, 'right')}><i className='bi bi-chevron-right'></i></span>
            </Modal>
            <div className='details-text'>
                <div className='detail-body'>
                    <h2>Overview</h2>
                    <p>
                        {project?.appInfo?.overview}
                    </p>
                </div>
                <div className='detail-body'>
                    <h2>Structure</h2>
                    <p>
                        {project?.appInfo?.body}
                    </p>
                </div>
                <div className='detail-body'>
                    <h2>Features</h2>
                    <ul className='details_list'>
                        {project?.appInfo?.features?.map(feature => {
                            return (
                                <li key={feature}>{feature}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className='detail-body'>
                    <h2>Pages</h2>
                    <ul className='details_list'>
                        {project?.appInfo?.pages?.map(page => {
                            return (
                                <li key={page}>{page}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className='detail-body'>
                    <h2>Preview</h2>
                    <ul className='details_list'>
                        {project?.appInfo?.preview?.map(img => {
                            return (
                                <li key={img}>
                                    <img
                                        src={img}
                                        key={img}
                                        className="project-preview"
                                        onClick={() => fullScreen(img)} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='project-links detail-body'>
                    <h2>links</h2>
                    <div className='link_container'>
                        Github: <a href={project.appInfo?.links?.github}><i className='bi bi-github'></i></a>
                        Demo: <a href={project.appInfo?.links?.demo}><i className='bi bi-globe'></i></a>
                        API Repo: <a href={project.appInfo?.links?.apiRepo}><i className='bi bi-cloud-fill'></i></a>
                    </div>
                </div>
            </div>
        </div>
        : <NotFound />
    )
}

export default ProjectDetails