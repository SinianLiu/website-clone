import '../style.css';
import '../styles/Navbar.css';
import Logo from '../assets/Logo';
import RightArrowBlack from '../assets/RightArrowBlack.svg';
import Menu from '../assets/Menu.svg';
import Cross from '../assets/Cross.svg';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 810px)');

    const handleResize = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleResize);
    handleResize();

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <div className={menuOpen ? 'navbar navbar-expanded' : 'navbar'}>
      <div className="logo">
        <Logo />
      </div>
      <div>
        <button className="navButton1">Staking</button>
        <button className="navButton2">
          <a
            href="https://drive.google.com/file/d/1Lp6-tzNPIgMZloA2vhfPM8h5b7VNz56p/view"
            target="_blank"
            rel="noopener noreferrer">
            DragonLayer Litepaper
          </a>
          <img
            className="nav-arrow-style"
            src={RightArrowBlack}
            alt="RightArrow"
          />
        </button>
        <div className="menu-button" onClick={toggleMenu}>
          {menuOpen ? (
            <img className="cross-style" src={Cross} alt="Close" />
          ) : (
            <img className="menu-style" src={Menu} alt="Menu" />
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Customers</li>
            <li>Updates</li>
            <li>Help</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
