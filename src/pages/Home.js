import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { actions } from '../reducer';
import { useStatevalue } from '../stateProvider';
import "./Home.css"
import Slider from '../components/Slider'

function Home() {
    const navigate = useNavigate();
    const [state, dispatch] = useStatevalue();
    const seeWorks = ()=>{
        dispatch({
            type: actions.ACTIVE_NAV_LINK,
            item:"/works"
        })
        navigate("./works");
    }
    return (
        <main className='home left-to-right'>
            <div className='introduction'>
                <div className='margin-LR-90'>
                    <div className='intro-text'>
                        <p>Hello, my name is</p>
                        <h1>Ali Herawi</h1>
                        <h3>I'm fullstack developer. I make awesome web application with react js and spring boot.</h3>
                        <button className='see-my-works' onClick={seeWorks}>
                            See My Works
                        </button>
                    </div>
                    <div className='profile-container'>
                        <img src='./image/person1.png' className='profile' />
                    </div>
                </div>
            </div>
            <div className='expert-in-container'>
                <div className='margin-LR-90'>
                    <h1>Expert in</h1>
                    <div className='experts'>
                        <div className='expert'>
                            <i className='bi bi-server'></i>
                            <h2>Web application</h2>
                            <p>Lorem opwuiero iueroweiur oepiur poiu</p>
                            <Link to="">view more</Link>
                        </div>
                        <div className='expert'>
                            <i className='bi bi-laptop'></i>
                            <h2>Web design</h2>
                            <p>Lorem opwuiero iueroweiur oepiur poiu</p>
                            <Link to="">view more</Link>
                        </div>
                        <div className='expert'>
                            <i className='bi bi-tablet-landscape'></i>
                            <h2>Web application</h2>
                            <p>Lorem opwuiero iueroweiur oepiur poiu</p>
                            <Link to="">view more</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='case-studies '>
                <h2 className=' margin-LR-90'>Case Studies</h2>
                <Slider />
            </div>
            <div className='hire-me-box'>
                <div className='margin-LR-90'>
                    <div className='hire-me-text'>
                        <h2>Make It Awesome</h2>
                        <p>
                            Let's meke something more meaningful and make things more vitual conceptual and packed with a very user friendly
                        </p>
                    </div>
                    <button className='hire-me'>Hire Me!</button>
                </div>
            </div>
        </main>
    )
}

export default Home