import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../../css/menu.css";
import projects from "../projectData";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [projectScrollHints, setProjectScrollHints] = useState({ up: false, down: false });
  const showMenuRef = useRef(null);
  const projectsDropdownRef = useRef(null);
  const projectsMenuRef = useRef(null);
  const currentHashPath = window.location.hash.replace(/^#/, '').split('#')[0].toLowerCase();
  const currentPath = location.pathname.toLowerCase();
  const currentProject = projects.find(({ path }) => {
    const projectPath = path.toLowerCase();
    return currentPath === projectPath || currentHashPath === projectPath;
  });
  const isProjectPage = Boolean(currentProject);
  const isIndexPage = !isProjectPage;
  const dropdownProjects = projects.filter(({ path }) => path !== currentProject?.path);

  const updateProjectScrollHints = () => {
    const dropdown = projectsDropdownRef.current;
    if (!dropdown) {
      return;
    }

    const maxScroll = dropdown.scrollHeight - dropdown.clientHeight;
    setProjectScrollHints({
      up: dropdown.scrollTop > 1,
      down: dropdown.scrollTop < maxScroll - 1,
    });
  };

  const scrollProjectsDropdown = (direction) => {
    const dropdown = projectsDropdownRef.current;
    if (!dropdown) {
      return;
    }

    dropdown.scrollBy({
      top: direction * dropdown.clientHeight * 0.8,
      behavior: "smooth",
    });
  };

  const closeMobileMenu = () => {
    if (showMenuRef.current) {
      showMenuRef.current.checked = false;
    }

    setIsProjectsOpen(false);
  };

  useEffect(() => {
    setIsProjectsOpen(false);
    setProjectScrollHints({ up: false, down: false });

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

  useEffect(() => {
    if (!isProjectsOpen) {
      setProjectScrollHints({ up: false, down: false });
      return undefined;
    }

    updateProjectScrollHints();
    window.addEventListener("resize", updateProjectScrollHints);

    return () => {
      window.removeEventListener("resize", updateProjectScrollHints);
    };
  }, [isProjectsOpen, dropdownProjects.length]);

  const handleProjectsClick = (event) => {
    if (window.matchMedia("(max-width: 47.5em)").matches) {
      closeMobileMenu();
      navigate("/index.html#projects");
      event.currentTarget.blur();
      return;
    }

    setIsProjectsOpen((isOpen) => !isOpen);
    event.currentTarget.blur();
  };

  return (
    <nav id="menu-bar">
      <input type="checkbox" id="show-menu" ref={showMenuRef} value="button" />
      <label htmlFor="show-menu" className="show-menu" aria-label="Toggle Menu">
        Rove
      </label>
      <ul>
        <li id="rove">
          {isIndexPage ? (
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
            ) : (
            <Link to="/index.html#projects" onClick={closeMobileMenu}>Home</Link>
          )}
        </li>
        <li>
          <ul id="menu">
            <li className="projectsMenuItem" ref={projectsMenuRef}>
              {isProjectPage ? (
                <>
                  <button
                    aria-expanded={isProjectsOpen}
                    aria-haspopup="true"
                    className={`projectsMenuButton${isProjectsOpen ? ' projectsMenuButtonOpen' : ''}`}
                    onClick={handleProjectsClick}
                    type="button"
                  >
                    Projects
                  </button>
                  {isProjectsOpen && (
                    <div className="projectsDropdownFrame">
                      {projectScrollHints.up && (
                        <button
                          aria-label="Scroll projects up"
                          className="projectsDropdownScrollHint projectsDropdownScrollHintTop"
                          onClick={() => scrollProjectsDropdown(-1)}
                          type="button"
                        >
                          <span className="projectsDropdownScrollArrow" />
                        </button>
                      )}
                      <ul className="projectsDropdown" onScroll={updateProjectScrollHints} ref={projectsDropdownRef}>
                        {dropdownProjects.map(({ path, title, thumbnail }) => (
                          <li key={path}>
                            <Link aria-label={title} className="projectsDropdownLink" onClick={closeMobileMenu} to={path}>
                              <span
                                aria-hidden="true"
                                className="projectsDropdownImage"
                                style={{ backgroundImage: `url('${thumbnail}')` }}
                              />
                              <span className="projectsDropdownTitle">{title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {projectScrollHints.down && (
                        <button
                          aria-label="Scroll projects down"
                          className="projectsDropdownScrollHint projectsDropdownScrollHintBottom"
                          onClick={() => scrollProjectsDropdown(1)}
                          type="button"
                        >
                          <span className="projectsDropdownScrollArrow" />
                        </button>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <Link to="/index.html#projects" onClick={closeMobileMenu}>Projects</Link>
              )}
            </li>
            <li>
              <Link to="/index.html#about" onClick={closeMobileMenu}>About</Link>
            </li>
            <li>
              <Link to="/index.html#contact" onClick={closeMobileMenu}>Contact</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
