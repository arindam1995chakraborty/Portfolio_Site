import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/arindam.chakraborty.75248/'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/arindam95/'>
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            Hi, I'M <span className='highlighted-text'>Arindam</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            <h1>
                                
                                <Typical loop={Infinity}
                                    steps={[
                                        "Enthusiastic Developer ", 1000,
                                        "Full Stack Developer", 1000,
                                        ".NET Core Developer", 1000,
                                        "Angular Developer", 1000,
                                        "React Developer", 1000
                                    ]}>
                                </Typical>
                            </h1>
                            <span className='profile-role-tagline'>Knack of building applications with front and back end operations</span>
                        </span>
                        
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            Hire Me
                        </button>
                        <a href="Arindam Chakraborty-Resume.pdf" download="Arindam_Chakraborty_Resume.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}

