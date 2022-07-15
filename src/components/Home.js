import React from 'react'
import "./Home.css"

function Home() {
  return (
    <main className='home'>
        <div className='introduction margin-LR-90'>
            <div className='intro-text'>
                <p>Hello, Im</p>
                <h1>Ali Herawi</h1>
                <h2>Im fullstack developer. I make web application with react js and spring boot.</h2> 
            </div>
             <img src='./image/person1.png' className='profile'/>
        </div>
    </main>
  )
}

export default Home