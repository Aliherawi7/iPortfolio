import React from 'react'
import "./AboutMe.css"

function AboutMe() {
    return (
        <div className='about_me padding-LR-90 section'>
            <h2 className='section_title'>About</h2>
            <div className="list_container">
                <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Full name:</strong> <span>Ali Ahmad Herawi</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>10 Mar 2000</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+93 797-608-705</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Location:</strong> <span>Herat, Afghanistan</span></li>
                </ul>
                <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{new Date().getFullYear() - 2000}</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Science</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>Aliherawi7@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe
