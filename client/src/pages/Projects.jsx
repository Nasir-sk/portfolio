import React from 'react'
import IMAGES from '../images/Images'
export default function Projects() {
  return (
    <div>
      <section id='project'>
        <h2>PROJECTS</h2>
        <div className="container">
          <div className="project_container">
            <div className="grid_item">
              <div className="card">
                <img src={IMAGES.image1} alt="project1" />
                <div className="card_content">
                  <h3>Tribute Website</h3>
                </div>
              </div>
            </div>
            <div className="grid_item">
              <div className="card">
                <img src={IMAGES.image2} alt="project2" />
                <div className="card_content">
                  <h3>Job Application</h3>
                </div>
              </div>
            </div> <div className="grid_item">
              <div className="card">
                <img src={IMAGES.image3} alt="project3" />
                <div className="card_content">
                  <h3>Parallax Website</h3>
                </div>
              </div>
            </div> <div className="grid_item">
              <div className="card">
                <img src={IMAGES.image4} alt="project4" />
                <div className="card_content">
                  <h3>Developer Landing Page</h3>
                </div>
              </div>
            </div> <div className="grid_item">
              <div className="card">
                <img src={IMAGES.image5} alt="project5" />
                <div className="card_content">
                  <h3>Restaurant Website</h3>
                </div>
              </div>
            </div> <div className="grid_item">
              <div className="card">
                <img src={IMAGES.image6} alt="project6" />
                <div className="card_content">
                  <h3>Music Website</h3>
                </div>
              </div>
            </div> <div className="grid_item">
              <div className="card">
                <img src={IMAGES.image7} alt="project7" />
                <div className="card_content">
                  <h3>Youtube Clone</h3>
                </div>
              </div>
            </div> <div className="grid_item">
              <div className="card">
                <img src={IMAGES.image8} alt="project8" />
                <div className="card_content">
                  <h3>Documentation Website</h3>
                </div>
              </div>
            </div> <div className="grid_item">
              <div className="card">
                <img src={IMAGES.image9} alt="project9" />
                <div className="card_content">
                  <h3>Blog Website</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
