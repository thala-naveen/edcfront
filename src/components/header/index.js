import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.scss'
import logo from '../../public/logo.png'

export default function Header(){
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleScroll = (section) => {
    const isHomePage = window.location.pathname === '/';
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        handleScroll(section);
      }, 4000);
    } else {
      setTimeout(() => {
        const Section = document.getElementById(section);
        if (Section) {
          Section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      }, 10);
    }
  };
  
  

  return (
    <>
      <nav>
      <Link to="/"><img src={logo} alt="" className="logo" /></Link>
        <div className="nav-icon" onClick={handleMenuToggle}>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`}></div>
        </div>
        <ul className="nav-links">
          <li><Link onClick={()=>handleScroll('aboutUs')}>About Us</Link></li>
          <li><Link onClick={()=>handleScroll('ourStartups')}>Our Startups</Link></li>
          <li><Link to="/ourTeam">Our Team</Link></li>
          <li><Link to="/event">Events</Link></li>
          <li><Link onClick={()=>handleScroll('contactUs')} to="/#contactUs">Contact Us</Link></li>
        </ul>
      </nav>
      {menuOpen && (
        <div className="fullscreen-menu">
          <ul>
            <li className="menu-item"><Link onClick={()=>{
              handleScroll('aboutUs')
              handleCloseMenu()
            }}>About Us</Link></li>
            <li className="menu-item"><Link onClick={()=>{
              handleScroll('ourStartups')
              handleCloseMenu()
            }}>Our Startups</Link></li>
            <li className="menu-item"><Link to="/ourTeam" onClick={()=>{
              handleCloseMenu()
            }}>Our Team</Link></li>
            <li className="menu-item">
              <Link to="/event" className='dropdown' onClick={()=>{
              handleCloseMenu()
            }}>Events</Link>
            </li>
            <li className="menu-item"><Link to="/#contactUs" onClick={handleCloseMenu}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </>
  );  
};
