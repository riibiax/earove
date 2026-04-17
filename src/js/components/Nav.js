import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../../css/menu.css";
import projects from "../projectData";

const Nav = () => {
  const location = useLocation();
  const isIndexPage = location.pathname === '/' || location.pathname === '/index.html';
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const projectsMenuRef = useRef(null);

  useEffect(() => {
    setIsProjectsOpen(false);

    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    const closeProjectsMenu = (event) => {
      if (projectsMenuRef.current && !projectsMenuRef.current.contains(event.target)) {
        setIsProjectsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeProjectsMenu);

    return () => {
      document.removeEventListener("mousedown", closeProjectsMenu);
    };
  }, []);

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
            <li className="projectsMenuItem" ref={projectsMenuRef}>
              {isIndexPage ? (
                <Link to="/index.html#projects">Projects</Link>
              ) : (
                <>
                  <button
                    aria-expanded={isProjectsOpen}
                    aria-haspopup="true"
                    className="projectsMenuButton"
                    onClick={() => setIsProjectsOpen((isOpen) => !isOpen)}
                    type="button"
                  >
                    Projects
                  </button>
                  {isProjectsOpen && (
                    <ul className="projectsDropdown">
                      {projects.map(({ path, title, thumbnail }) => (
                        <li key={path}>
                          <Link className="projectsDropdownLink" to={path}>
                            <span
                              aria-hidden="true"
                              className="projectsDropdownThumb"
                              style={{ backgroundImage: `url('${thumbnail}')` }}
                            />
                            <span>{title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
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
