import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect to prevent focus for the hamburger menu on mouse click.
  useEffect(() => {
    const hamburgerMenu = document.querySelector('.hamburger');

    hamburgerMenu.addEventListener('mousedown', e => {
      e.preventDefault();
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleChange = (e) => {
    setMenuOpen(e.target.checked);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // prevent scrolling with Space
      toggleMenu();
    }
  };

  return (
    <header>
      <input 
        type="checkbox" 
        id="menu-toggle" 
        checked={menuOpen} 
        onChange={handleChange} 
      />
      <label 
        htmlFor="menu-toggle" 
        className="hamburger" 
        tabIndex={0} 
        role="button" 
        onClick={handleChange}
        onKeyDown={handleKeyDown} 
        aria-expanded={menuOpen} 
        aria-controls="navbar"
      >
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav id="navbar">
        <a href="#header" className="nav-link">Home</a>
        <a href="#project-grid-container" className="nav-link">Projects</a>
        <a href="#footer" className="nav-link">Contact</a>
      </nav>

      <section id="header">
        <div id="intro">
          <h1 id="intro-title">Hi, I'm <u>Josh Willis</u>.</h1>
          <p id="intro-text">A passionate <b>Web Developer</b> crafting clean, responsive, and user-friendly websites and applications.</p>
          <a href="#project-grid-container" id="intro-link">Check out my work below!</a>
        </div>

        <hr className="rounded" />

        <div id="skills">
          <h2 id="skills-title">My Skills:</h2>
          <p id="skills-text">These are the technologies and tools I frequently work with:</p>

          <div className="skills-list">
            <div className="skill-item">
              <img src="/assets/Logo_Images/html_logo.png" alt="HTML5 Logo" />
              <p>HTML5</p>
            </div>

            <div className="skill-item">
              <img src="/assets/Logo_Images/css_logo.png" alt="CSS3 Logo" />
              <p>CSS3</p>
            </div>

            <div className="skill-item">
              <img src="/assets/Logo_Images/JavaScript_logo.png" alt="JavaScript Logo" />
              <p>JavaScript</p>
            </div>

            <div className="skill-item">
              <img src="/assets/Logo_Images/react.svg" alt="React Logo" />
              <p>React</p>
            </div>
          </div>
        </div>
        <hr className="rounded" />
      </section>
    </header>
  );
}