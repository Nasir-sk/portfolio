import React from 'react'
export default function Contact() {
  return (
    <div>
        <section id="contact">
            <div className="container">
                <h2>Let's work together...</h2>
                <div className="top_contact">
                    <div className="contact_way">
                        <i className='fab fa-linkedin'></i>
                        <h3>LinkedIn</h3>
                    </div>
                    <div className="contact_way">
                        <i className='fab fa-twitter'></i>
                        <h3>Twitter</h3>
                    </div>
                    <div className="contact_way">
                        <i className='fab fa-gmail'></i>
                        <h3>@ Send Mail</h3>
                    </div>
                </div>
                <div className="bottom_contact">
                    <div className="contact_way">
                        <i className='fab fa-github'></i>
                        <h3><a href="https://github.com/Nasir-sk">Nasir-sk</a></h3>
                    </div>
                    <div className="contact_way">
                        <i className='fab fa-mobile'></i>
                        <h3>Mobile</h3>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
