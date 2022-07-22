import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
    //this state is for activing the header link
    const [path, setPath] = useState(window.location.pathname)
    const setActive = (path)=>{
        setPath(path)
    }
    return (
        <header className='header padding-LR-90'>
            <Link to="/">
                <img src="./image/AH1.png" className='nav-brand' />
            </Link>
            <nav>
                <Link to={"/"} onClick={()=>setActive("/")}>
                    <span className={path=="/" ? "active":""}>Home</span>
                </Link>
                <Link to={"/works"} onClick={()=>setActive("/works")}>
                    <span className={path=="/works" ? "active":""}>Works</span>
                </Link>
                <Link to={"/blog"} onClick={()=>setActive("/blog")}>
                    <span className={path=="/blog" ? "active":""}>Blog</span>
                </Link>
                <button className='hire-me'>
                    Hire Me!
                </button>
            </nav>

        </header>
    )
}

export default Header