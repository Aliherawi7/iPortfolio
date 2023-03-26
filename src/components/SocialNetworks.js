import React from 'react'
import "./SocialNetwork.css"

function SocialNetworks({ size = "small" }) {
    const style = {
        fontSize: size == "small" ? "16px" : "24px"
    }
    return (
        <div className='social_network' style={style}>
            <a href='https://linkedin.com/in/ali-herawi' style={{ "--i": "#0563bb" }}><i className='bi bi-linkedin'></i></a>
            <a href='https://twitter.com/aliherawi7' style={{ "--i": "#158aed" }}><i className='bi bi-twitter'></i></a>
            <a href='https://github.com/aliherawi7' style={{ "--i": "#000" }}><i className='bi bi-github'></i></a>
            <a href='https://instagram.com/ali.herawi7' style={{ "--i": "#f72368" }}><i className='bi bi-instagram' ></i></a>
        </div>
    )
}

export default SocialNetworks
