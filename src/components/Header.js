import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
    return (
        <header className='header padding-LR-90'>
            <h2 className='nav-brand'>Ali Herawi</h2>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/works"}>Works</Link>
                <Link to={"/blog"}>Blog</Link>
                <span className='hire-me'>
                    <Link to="">Hire Me!</Link>
                </span>
            </nav>

        </header>
    )
}

export default Header