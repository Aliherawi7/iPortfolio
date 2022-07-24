import React from 'react'
import "./Footer.css"


function Footer() {
    return (
        <footer >
            <div className='footer-container margin-LR-90'>
                <p>© 2022 - Ali Herawi</p>
                <div className='contact-me'>
                    <a href=''><i className='bi bi-linkedin'></i></a>
                    <a href=''><i className='bi bi-twitter'></i></a>
                    <a href=''><i className='bi bi-github'></i></a>
                    <a href=''><i className='bi bi-instagram'></i></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer