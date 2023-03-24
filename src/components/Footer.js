import React from 'react'
import "./Footer.css"
import SocialNetworks from './SocialNetworks'


function Footer() {
    return (
        <footer >
            <div className='footer-container margin-LR-90'>
                <p>© {new Date().getUTCFullYear()} - Ali Herawi</p>
                <SocialNetworks />
            </div>

        </footer>
    )
}

export default Footer