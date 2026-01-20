import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Array of menu links
  const menuLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Packages', to: 'packages' },
    { name: 'Why Us', to: 'whyus' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 lg:px-[100px] px-7 transition-all duration-300
  ${menuOpen
        ? 'bg-black'
        : scrolled
          ? 'bg-black/70 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-orange-600 font-bold text-left text-4xl">
          GLOBESPRINT<span className="text-white">.</span>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10 text-lg font-poppins text-white">
            {menuLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className={`cursor-pointer ${link.name === 'Home' ? 'text-red-500' : 'hover:text-red-500 transition-colors'
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (Full-Screen Centered) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black text-white transform
  ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
  transition-transform duration-300 ease-in-out z-50
  flex items-center justify-center`}
      >
        <IoCloseSharp
          className="fixed top-3 right-6 text-3xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        />
        <ul className="flex flex-col space-y-6 text-2xl text-center">
          {menuLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className={`cursor-pointer ${link.name === 'Home' ? 'text-red-500' : 'hover:text-red-500 transition-colors font-poppins'
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </header>
  );
};

export default Header;
