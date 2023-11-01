import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar z-10 w-full fixed top-0 bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 h-16 text-white border-2 border-black flex items-center justify-between">
      <div className="madisonKramerDev justify-start pl-4">
        <p className="name text-lg font-sans" style={{ top: "8px" }}>
          Alexandre De Roeck
        </p>
        <p className="dev text-carousel-pink text-sm" style={{ bottom: "16px" }}>
          Développeur web
        </p>
      </div>
      <div className={`anchorLinks ${isMenuOpen ? '' : 'hidden'} font-semibold text-lg mr-8 relative`} style={{ height: "auto" }}>
        <ul className={`anchorLinks__list flex h-full flex flex-row top-16`} style={{ width: "375px", justifyContent: "space-around" }}>
          <li onClick={() => setIsMenuOpen(true)}>
            <a href="https://alex-der-coder.github.io/Portfolio/#whoIAmSection" className="anchorLink text-white hover:text-carousel-pink">Qui suis-je?</a>
          </li>
          <li onClick={() => setIsMenuOpen(true)}>
            <a href="https://alex-der-coder.github.io/Portfolio/#projects" className="anchorLink text-white hover:text-carousel-pink">Projets</a>
          </li>
          <li onClick={() => setIsMenuOpen(true)}>
            <a href="https://image-gallery-starter-git-main-alex-der-coders-projects.vercel.app/" className="anchorLink text-white hover:text-carousel-pink">Gallery Photo</a>
          </li>
          <li onClick={() => setIsMenuOpen(true)}>
            <a href="https://alex-der-coder.github.io/Portfolio/#contactSection" className="anchorLink text-white hover:text-carousel-pink">Contact</a>
          </li>
        </ul>
      </div>
      <div className="responsiveIcon hidden md:inline absolute right-10">
        <FontAwesomeIcon icon={faBars} className={`iconNavBar text-3xl cursor-pointer ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu} aria-label="menu de navigation" />
      </div>
    </nav>
  );
};

export default Navbar;
