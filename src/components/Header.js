import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { actions } from '../reducer';
import { useStatevalue } from '../stateProvider'
import "./Header.css"


function Header() {
    //this state is for activing the header link
    const [{ navActive }, dispatch] = useStatevalue();
    const navigate = useNavigate();
    const [state, setState] = useState(navActive + "");
    const [showMenu, setShowMenu] = useState(false);
    //const [darkMode, setDarkMode] = useState(false);

    // get sctived nav link from data layer
    useEffect(() => {
        setState(navActive + "")
    }, [navActive])

    //onclick function for nav links
    const setActive = (path) => {
        dispatch({
            type: actions.ACTIVE_NAV_LINK,
            item: path
        })
        setState(path)
    }
    //onclick function for nav-brand
    const goHome = () => {
        dispatch({
            type: actions.ACTIVE_NAV_LINK,
            item: + "/"
        })
        navigate(+ "/");
    }
    return (
        <header className='header padding-LR-90'>
            <Link to={"/"} onClick={goHome}>
                <img src={"/image/AH1.png"} className='nav-brand' alt='' />
            </Link>
            <nav style={{ right: showMenu ? "0" : "-250px" }}>
                <Link to={"/"} onClick={() => setActive("/")}>
                    <span className={"/" ? "active" : ""}>Home</span>
                </Link>
                <Link to={"/projects"} onClick={() => setActive("/projects")}>
                    <span className={state.includes("/projects") ? "active" : ""}>Projects</span>
                </Link>
                <Link to={"/blog"} onClick={() => setActive("/blog")}>
                    <span className={state.includes("/blog") ? "active" : ""}>Blog</span>
                </Link>
                <a href='https://linkedin.com/in/ali-herawi' className='btn_custom hire_me'>
                    Hire Me!
                </a>
                {/* <button className='dark_mode' onClick={() => setDarkMode(!darkMode)}>
                    <i className={darkMode ? "bi bi-moon-fill" : "bi bi-sun-fill"}></i>
                </button> */}
            </nav>
            <div className='toggle-menu'>
                <input type="checkbox" onChange={() => setShowMenu(!showMenu)} className="toggle" />
                <div className="burger">
                    <div></div>
                </div>
            </div>

        </header>
    )
}

export default Header