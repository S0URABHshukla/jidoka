import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Dropdown from './Dropdown';
import YouTube from 'react-youtube';
import logo from './jakoda2.jpg';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownt, setDropdownt] = useState(false);
  const [dropdownth, setDropdownth] = useState(false);
  const [dropdowntf, setDropdownf] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseEntert = () => {
    if (window.innerWidth < 960) {
      setDropdownt(false);
    } else {
      setDropdownt(true);
    }
  };
  const onMouseEnterth = () => {
    if (window.innerWidth < 960) {
      setDropdownth(false);
    } else {
      setDropdownth(true);
    }
  };
  const onMouseEnterf = () => {
    if (window.innerWidth < 960) {
      setDropdownf(false);
    } else {
      setDropdownf(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseLeavet = () => {
    if (window.innerWidth < 960) {
      setDropdownt(false);
    } else {
      setDropdownt(false);
    }
  };
  const onMouseLeaveth = () => {
    if (window.innerWidth < 960) {
      setDropdownth(false);
    } else {
      setDropdownth(false);
    }
  };
  const onMouseLeavef = () => {
    if (window.innerWidth < 960) {
      setDropdownf(false);
    } else {
      setDropdownf(false);
    }
  };

  return (
    <>
      <nav className="navbar" style={{ position: 'sticky', top: '0px' }}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src={logo}
            alt=""
            style={{ width: '150px', height: '70px', marginTop: '50px' }}
          />
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterf}
            onMouseLeave={onMouseLeavef}
          >
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
              {/* {dropdowntf && <Dropdown props={"about"}/>} */}
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            {/* <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown props={"products"}/>} */}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEntert}
            onMouseLeave={onMouseLeavet}
          >
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
              {/* {dropdownt && <Dropdown props={"visit"}/>} */}
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterth}
            onMouseLeave={onMouseLeaveth}
          >
            <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>
              Blogs
              {/* {dropdownth && <Dropdown props={"news"}/>} */}
            </Link>
          </li>
          <li>
            {/* <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
             Contact us
            </Link> */}
          </li>
        </ul>
        <Button />
      </nav>

      <div>
        <YouTube
          videoId="hTQTuwbrVVg"
          opts={{
            width: window.innerWidth.toString(),
            height: '500',
            autoplay: 1,
          }}
        />
      </div>
    </>
  );
}

export default Navbar;
