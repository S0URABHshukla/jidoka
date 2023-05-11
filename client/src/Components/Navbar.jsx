import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './jakoda2.png';
import TemporaryDrawer from './TemporaryDrawer';


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="navbar"
        style={{
          position: 'sticky',
          top: '0',
          width: '100%',
          backgroundColor: isScrolled ? 'black' : 'transparent'
        }}
      >
        <Link to="/" className="navbar-logo">
          <img
            src={logo}
            alt=""
            style={{
              width: '100%',
              height: '70px',
              marginTop: '0px',
              position: 'relative',
            }}
          />
        </Link>
        <ul className={'nav-menu'}>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item"></li>
          <li className="nav-item">
            <a
              className="nav-links"
              style={{ color: 'white' }}
              href="#footerhover"
            >
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-links">
              Blogs
            </Link>
          </li>
        </ul>
        <Button />
      <TemporaryDrawer/>
      </nav>
    </>
  );
}

export default Navbar;
