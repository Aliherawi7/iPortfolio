import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { actions } from '../reducer';
import { useStatevalue } from '../stateProvider';
import "./Home.css"
import Slider from "../components/Slider"
import ProjectsDetail from '../Constants/ProjectsDetail';
import Skills from '../Constants/Skills';
import Skill from '../components/Skill';
import SocialNetworks from '../components/SocialNetworks';
import AboutMe from '../components/AboutMe';
import { baseURL } from '../Constants/BaseUrl';


function Home() {
    const navigate = useNavigate();
    const [state, dispatch] = useStatevalue();
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    const seeProjects = () => {
        dispatch({
            type: actions.ACTIVE_NAV_LINK,
            item: "/projects"
        })
        navigate("/projects");
    }
    const downloadResume = () => {
        fetch("Ali-herawi-v2.pdf").then(res => {
            res.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let fileLink = document.createElement('a');
                fileLink.href = fileURL;
                fileLink.download = "Ali-herawi-resume-v2.pdf"
                fileLink.click();
            })
        })
    }
    return (
        <main className='home left-to-right'>
            <div className='introduction diff_background'>
                <div className='margin-LR-90'>
                    <div className='intro-text'>
                        <p>Hello, my name is</p>
                        <h1>Ali Herawi</h1>
                        <h3>
                            Software Engineer with over 4 years of full stack web development experience specializing in Spring,
                            React and Angular. Expertise in front-end development, demonstrated through successful projects
                            and strong coding skills. Strong problem-solving abilities and a collaborative team player.
                            Ready to contribute technical expertise and drive successful outcomes in a dynamic work environment.

                        </h3>
                        <SocialNetworks size='large' />
                        <button className='btn_custom see-my-works' onClick={downloadResume}>
                            Download CV
                        </button>
                        <button className='btn_custom see-my-projects' onClick={seeProjects}>
                            See My Projects
                        </button>
                    </div>
                    <div className='profile-container'>
                        <img src={baseURL + '/image/person1.png'} className='profile' />
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
                                <Skill key={item.name} icon={item.icon} name={item.name} color={item.color} level={item.level} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='resume padding-LR-90 section'>
                <div className="resume-section">
                    <h3 className='section_title'>Professional Experience</h3>
                    <div className="resume-item">
                        <h4>Afghan Web, Herat - Software Developer</h4>
                        <h5>July 2021 - May 2023</h5>
                        <p><em>Key responsibilities:</em></p>
                        <ul>
                            <li>Designed, developed, and maintained software applications
                                using various technologies.</li>
                            <li>Collaborated with clients to understand their requirements and
                                deliver tailored solutions.
                            </li>
                            <li>Conducted thorough testing and debugging to ensure
                                high-quality and bug-free software.</li>
                            <li>Provided technical support and troubleshooting for deployed
                                applications.
                            </li>
                        </ul>
                        <p><em>Notable accomplishments:</em></p>
                        <ul>
                            <li>ntegrated continuous integration and deployment (CI/CD)
                                pipelines, resulting in faster and more reliable software
                                releases
                            </li>
                            <li>Developed an automated testing framework, reducing manual
                                testing efforts by 60% and improving software quality.
                            </li>
                            <li>Collaborated with the team to identify and resolve software
                                defects, ensuring high-quality deliverables.
                            </li>
                        </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Netlinks, Herat - Backend Developer</h4>
                        <h5>March 2019 - June 2021</h5>
                        <p><em>Key responsibilities:</em></p>
                        <ul>
                            <li>Developed and maintained backend systems, ensuring
                                scalability and performance.</li>
                            <li>Collaborated with cross-functional teams to gather
                                requirements and implement solutions.
                            </li>
                            <li>Integrated third-party APIs for seamless data exchange.</li>
                            <li>Conducted code reviews and implemented best practices for
                                code quality and security.
                            </li>
                        </ul>

                        <p><em>Notable accomplishments:</em></p>
                        <ul>
                            <li>Optimized database queries, reducing response time by 30%
                                and improving overall system efficiency.</li>
                            <li>Implemented a caching mechanism, resulting in a 40%
                                decrease in server load and improved application
                                responsiveness.
                            </li>
                            <li>Designed and implemented a RESTful API, enabling
                                seamless integration with external systems and increasing
                                data accessibility.
                            </li>
                            <li>Developed a robust error handling system, reducing system
                                downtime by 20% and enhancing user experience.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="resume-section">
                    <h3 className='section_title'>Education</h3>
                    <div className="resume-item">
                        <h4>Herat University, Herat — Bachelor of science in Computer science</h4>
                        <h5>2015 - 2016</h5>
                        <p>Studied a comprehensive curriculum in computer science, gaining a strong foundation in programming, algorithms, data structures, and software development. Developed problem-solving and analytical skills through coursework and projects.</p>
                    </div>
                </div>


            </div>



            <div className='case-studies diff_background section'>
                <h2 className='section_title margin-LR-90'>Projects</h2>
                <Slider products={ProjectsDetail} delay={5} />
            </div>

            <div className='hire-me-box section'>
                <div className='margin-LR-90'>
                    <div className='hire-me-text'>
                        <h2 className='section_title'>Make It Awesome</h2>
                        <p>
                            Let's meke something more meaningful and make things more vitual conceptual and packed with a very user friendly
                        </p>
                    </div>
                    <a href='https://linkedin.com/in/ali-herawi' className='btn_custom'>Hire Me!</a>
                </div>
            </div>
        </main >
    )
}

export default Home