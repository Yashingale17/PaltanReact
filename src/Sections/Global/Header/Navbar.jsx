import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classes from './NavbarSty.module.css';
import logo from './Logo.gif';

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const ActiveClassName = ({ isActive }) =>
    isActive ? `${classes.NavLinkColor} ${classes.Active}` : `${classes.NavLinkColor}`;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${classes.Container} ${isVisible ? '' : classes.Hidden}`}>
      <div className={classes.ContentContainer}>
        <nav className={classes.NavBar}>
          <div
            className={`${classes.Hamburger} ${isOpen ? classes.Open : ''}`}
            onClick={toggleMenu}
          >
            <div className={`${classes.Bar} ${classes.Bar1}`} />
            <div className={`${classes.Bar} ${classes.Bar2}`} />
            <div className={`${classes.Bar} ${classes.Bar3}`} />
          </div>
          <div className={classes.LogoContainer}>
            <NavLink to="/" className={classes.Logo}>
              <img src={logo} alt="Puneri Paltan Tiger" />
            </NavLink>
          </div>

          <div className={`${classes.NavLinks} ${isOpen ? classes.ShowMenu : ''}`}>
            <ul>
              <li>
                <NavLink to="/Players" className={ActiveClassName}>
                  Players
                </NavLink>
              </li>
              <li>
                <NavLink to="/">Standings</NavLink>
              </li>
              <li>
                <NavLink to="/">Fixtures</NavLink>
              </li>
              <li>
                <NavLink to="/PaltanWorld" className={ActiveClassName}>
                  Paltan World
                </NavLink>
              </li>
              <li>
                <a href="https://in.bookmyshow.com/" className={classes.NavLinkColor} target="_blank" rel="noopener noreferrer">
                  Tickets
                </a>
              </li>
              <li>
                <NavLink to="/">Yuva Paltan</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarComp;
