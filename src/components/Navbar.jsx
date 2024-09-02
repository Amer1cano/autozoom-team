import '../styles/Navbar.css'

const Navbar = () => {

  return (
<nav className="navbar">
      <div className="navbar-left">
        <div className="language-switch">
          <img src="path_to_english_flag" alt="English" />
          <img src="path_to_russian_flag" alt="Russian" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="navbar-center">
        <img src="path_to_logo" alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <a href="#cars">CARS</a>
        <a href="#brand">BRAND</a>
        <a href="#about">ABOUT US</a>
        <a href="#services">SERVICES</a>
        <a href="#contacts">CONTACTS</a>
        <a href="#blog">BLOG</a>
        <div className="contact-info">
          +971 (55) 846 21 24
        </div>
      </div>
    </nav>

  )
}

export default Navbar
