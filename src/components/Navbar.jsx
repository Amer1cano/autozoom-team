import { useState } from 'react';
import '../styles/Navbar.css'

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <div className="navbar-box">      
<nav className="navbar">
      <div className="navbar-left">
        <div className="language-switch">
          <img src="../../public/img/great.png" alt="English" />
          <img src="../../public/img/russia.png" alt="Russian" />
        </div>
        <div className="search-bar">
          <button className='navbar-search-btn'>
            <svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>
          </button>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="navbar-center">
        <a href="">
          <img src="../../public/img/red1.png" alt="Logo" className="logo" />
        </a>
      </div>
      <div className={`navbar-right ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="to-left" onClick={toggleMobileMenu} >
          <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
          </svg>
        </div>
        <div className="search-bar-mobile">
          <button className='navbar-search-btn'>
            <svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>
          </button>
          <input type="text" placeholder="Search..." />
        </div>
        <a href="#cars">CARS</a>
        <a href="#brand">BRAND</a>
        <a href="#about">ABOUT US</a>
        <a href="#services">SERVICES</a>
        <a href="#contacts">CONTACTS</a>
        <a href="#blog">BLOG</a>
        <div className="contact-info">
          +998-98-765-43-21
        </div>
        
      </div>  
      <div className="menu-box" onClick={toggleMobileMenu}>
      <div className="menu-toggle">
        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
      </div>
    </nav>  
    </div>
  )
}

export default Navbar
