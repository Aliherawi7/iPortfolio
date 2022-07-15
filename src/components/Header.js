import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
    return (
        <header className='header'>
            <h2 className='nav-brand'>Ali Herawi</h2>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/works"}>Works</Link>
                <Link to={"/blog"}>Blog</Link>
            </nav>
        </header>
    )
}

export default Header