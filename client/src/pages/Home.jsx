import React from 'react'
import IMAGES from '../images/Images'
import 'animate.css';

export default function Home() {

  return (
    <div className='home'>
      <section id="hero">
          <div className="container">
            <div className="hero_image animate__animated animate__bounceInLeft">
                <img src={IMAGES.image} alt="hero image"/>
            </div>
            <div className="hero_content">
            <h1>
                <span className="hi_text">Hi</span>, I am 
                <span className="name_text"> Nasir Shaikh</span>
            </h1>    
            <h2>MERN Stack Developer</h2>
          </div>
          </div>
        </section>
    </div>
  )
}
