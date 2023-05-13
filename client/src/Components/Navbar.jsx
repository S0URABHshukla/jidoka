import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './jakoda2.png';
import TemporaryDrawer from './TemporaryDrawer';
import { scroller } from 'react-scroll';

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
  function scrollToAbout() {
    scroller.scrollTo('homeabout', {
      smooth: true,
      duration: 1400,
    });
  }
  function scrollToContact() {
    scroller.scrollTo('footerhover', {
      smooth: true,
      duration: 1400,
    });
  }

  return (
    <>
      <nav
        className="navbar"
        style={{
          position: 'sticky',
          top: '0',
          width: '100%',
          backgroundColor: isScrolled ? 'white' : 'transparent',
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
            <a
              className="nav-links"
              style={{
                color: isScrolled ? 'black' : 'white',
              }}
              onClick={scrollToAbout}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-links"
              style={{
                color: isScrolled ? 'black' : 'white',
              }}
              onClick={scrollToContact}
            >
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="/blogs"
              className="nav-links"
              style={{
                color: isScrolled ? 'black' : 'white',
              }}
            >
              Blogs
            </Link>
          </li>
        </ul>
        <Button />
        <TemporaryDrawer />
      </nav>
    </>
  );
}

export default Navbar;
