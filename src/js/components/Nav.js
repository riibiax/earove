import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../../css/menu.css";

const Nav = () => {
  const location = useLocation();
  const isIndexPage = location.pathname === '/';

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <nav id="menu-bar">
      <input type="checkbox" id="show-menu" value="button" />
      <label htmlFor="show-menu" className="show-menu" aria-label="Toggle Menu">
        Rove
      </label>
      <ul>
        <li id="rove">
          {isIndexPage ? (
            <Link to="/">Home</Link>
            ) : (
            <Link to="/index.html#projects">Home</Link>
          )}
        </li>
        <li>
          <ul id="menu">
            <li>
              {isIndexPage ? (
                <a href="#projects">Projects</a>
              ) : (
                <Link to="/index.html#projects">Projects</Link>
              )}
            </li>
            <li>
              {isIndexPage ? (
                <a href="#about">About</a>
              ) : (
                <Link to="/index.html#about">About</Link>
              )}
            </li>
            <li>
              {isIndexPage ? (
                <a href="#contact">Contact</a>
              ) : (
                <Link to="/index.html#contact">Contact</Link>
              )}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
