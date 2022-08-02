import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { actions } from '../reducer';
import { useStatevalue } from '../stateProvider'
import "./Header.css"


function Header() {
    //this state is for activing the header link
    const [{navActive}, dispatch] = useStatevalue();
    const navigate = useNavigate();
    const [state, setState] = useState(navActive);
    useEffect(()=>{
        setState(navActive)
        console.log(navActive)
    },[navActive])

    const setActive = (path)=>{
        dispatch({
            type:actions.ACTIVE_NAV_LINK,
            item:path
        })
        setState(path)
    }
    const goHome = ()=>{
        dispatch({
            type: actions.ACTIVE_NAV_LINK,
            item:"/"
        })
        navigate("/");
    }
    return (
        <header className='header padding-LR-90'>
            <Link to="/" onClick={goHome}>
                <img src="/image/AH1.png" className='nav-brand' />
            </Link>
            <nav>
                <Link to={"/"} onClick={()=>setActive("/")}>
                    <span className={state=="/" ? "active":""}>Home</span>
                </Link>
                <Link to={"/works"} onClick={()=>setActive("/works")}>
                    <span className={state=="/works" ? "active":""}>Works</span>
                </Link>
                <Link to={"/blog"} onClick={()=>setActive("/blog")}>
                    <span className={state=="/blog" ? "active":""}>Blog</span>
                </Link>
                <button className='hire-me'>
                    Hire Me!
                </button>
            </nav>

        </header>
    )
}

export default Header