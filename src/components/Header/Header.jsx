import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const hamburger = document.querySelector('.hamburger');
      const mobileMenu = document.querySelector('.mobile-menu');
      
      if (isMenuOpen && hamburger && mobileMenu && 
          !hamburger.contains(event.target) && 
          !mobileMenu.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);


  return (
    <>
      <header className={`fixed top-3 left-1/2 transform -translate-x-1/2 z-50 frosted-glass rounded-full px-6 w-[95%] max-w-7xl transition-all duration-300 ${
        isMenuOpen ? 'py-3' : 'py-3'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-12 h-12 bg-wood-dark rounded-full flex items-center justify-center mr-3 shadow-lg overflow-hidden hover:bg-wood-dark transition-colors duration-300">
              <img 
                src="/images/logo.png" 
                alt="HB Music Studio Logo" 
                className="w-9 h-9 object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}

                className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-wood-dark bg-wood-light/75 font-extrabold border-wood-dark border'
                    : 'text-gray-700 hover:text-wood-dark hover:bg-white/30 font-medium'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`hamburger flex flex-col gap-1 p-2 rounded-lg transition-colors duration-200 ${isMenuOpen ? 'active' : ''}`}
            >
              <div className="hamburger-line w-6 h-0.5 bg-wood-dark transition-all duration-300"></div>
              <div className="hamburger-line w-6 h-0.5 bg-wood-dark transition-all duration-300"></div>
              <div className="hamburger-line w-6 h-0.5 bg-wood-dark transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Absolute positioned dropdown */}
      {isMenuOpen && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 w-[80%] max-w-sm frosted-glass rounded-b-3xl flex flex-col p-5 shadow-xl z-40 border-t border-white/18">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-full text-base transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-wood-dark bg-white/40 font-extrabold'
                    : 'text-gray-700 hover:text-wood-dark hover:bg-white/30 font-medium'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
