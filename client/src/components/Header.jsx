import React from 'react'

export default function Header() {
  return (
    <div className='nav-header'>
        <nav className='container'>
            <div className="logo">Porfolio</div>
                <ul>
                <a href="#hero">
                    <li>Home</li>
                </a>
                <a href="#project">
                    <li>Projects</li>
                </a>
                <a href="#contact">
                    <li>Contact</li>
                </a>
            </ul>
        </nav>
    </div>
  )
}
