import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { actions } from '../reducer';
import { useStatevalue } from '../stateProvider';
import "./Home.css"
import Slider from "../components/Slider"
import ProjectDetails from '../Constants/ProjectsDetails';
import Skills from '../Constants/Skills';
import Skill from '../components/Skill';
import SocialNetworks from '../components/SocialNetworks';
import AboutMe from '../components/AboutMe';


function Home() {
    const navigate = useNavigate();
    const [state, dispatch] = useStatevalue();
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    const seeWorks = () => {
        dispatch({
            type: actions.ACTIVE_NAV_LINK,
            item: "/works"
        })
        navigate("./works");
    }
    return (
        <main className='home left-to-right'>
            <div className='introduction diff_background'>
                <div className='margin-LR-90'>
                    <div className='intro-text'>
                        <p>Hello, my name is</p>
                        <h1>Ali Herawi</h1>
                        <h3>I'm fullstack developer. I make awesome web applications using react js and spring boot.</h3>
                        <SocialNetworks size='large' />
                        <button className='see-my-works' onClick={seeWorks}>
                            See My Works
                        </button>
                    </div>
                    <div className='profile-container'>
                        <img src='./image/person1.png' className='profile' />
                    </div>
                </div>
            </div>
            <AboutMe />
            <div className='skills_container diff_background section'>
                <div className='margin-LR-90'>
                    <h1 className='section_title'>Skills</h1>
                    <div className='skills'>
                        {Skills.map(item => {
                            return (
                                <Skill icon={item.icon} name={item.name} color={item.color} level={item.level} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='case-studies diff_background section'>
                <h2 className='section_title margin-LR-90'>Projects</h2>
                <Slider products={ProjectDetails} delay={5} />
            </div>

            <div className='hire-me-box section'>
                <div className='margin-LR-90'>
                    <div className='hire-me-text'>
                        <h2 className='section_title'>Make It Awesome</h2>
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