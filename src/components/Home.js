import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
import Slider from './Slider'

function Home() {
    
    return (
        <main className='home'>
            <div className='introduction padding-LR-90'>
                <div className='intro-text'>
                    <p>Hello, my name is</p>
                    <h1>Ali Herawi</h1>
                    <h2>I'm fullstack developer. I make web application with react js and spring boot.</h2>
                    <button className='see-my-works'>
                        See My Works
                    </button>
                </div>
                <img src='./image/person1.png' className='profile' />
            </div>
            <div className='expert-in-container padding-LR-90'>
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
            <div className='case-studies '>
                <h2 className=' padding-LR-90'>Case Studies</h2>
                <Slider />
            </div>
        </main>
    )
}

export default Home