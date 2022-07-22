import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
import Slider from './Slider'

function Home() {

    return (
        <main className='home left-to-right'>
            <div className='introduction'>
                <div className='margin-LR-90'>
                    <div className='intro-text'>
                        <p>Hello, my name is</p>
                        <h1>Ali Herawi</h1>
                        <h2>I'm fullstack developer. I make web application with react js and spring boot.</h2>
                        <button className='see-my-works'>
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
                            Let's meke somthing more meaningfuland make thing more vitual conceptual and packed with a very user friendly
                        </p>
                    </div>
                    <button className='hire-me'>Hire Me!</button>
                </div>
            </div>
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
        </main>
    )
}

export default Home