import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
    return (
        <header className='header padding-LR-90'>
            <Link to="/">
                <img src="./image/AH1.png" className='nav-brand' />
            </Link>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/works"}>Works</Link>
                <Link to={"/blog"}>Blog</Link>
                <button className='hire-me'>
                    Hire Me!
                </button>
            </nav>

        </header>
    )
}

export default Header