import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Update screen size state on window resize
  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Check if screen width is less than 768px
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-orange-600 w-full top-0 fixed left-0 z-50 flex justify-center items-center shadow-md rounded-b-2xl px-4">
      {/* Main Navigation Links */}
      <ul
        style={{ display: 'flex', alignItems: 'center', listStyleType: 'none', padding: 0, margin: 0, gap: '1rem' }}
        className={`hidden md:flex`}
      >
        <li>
          <Link to="/" className="text-black font-bold px-6 py-3 hover:text-white flex items-center">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-black font-bold px-6 py-3 hover:text-white flex items-center">
            About Me
          </Link>
        </li>
        {!isSmallScreen && (
          <>
            <li>
              <Link to="/tech" className="text-black font-bold px-6 py-3 hover:text-white flex items-center">
                Technology Portfolio
              </Link>
            </li>
            <li>
              <Link to="/dance" className="text-black font-bold px-6 py-3 hover:text-white flex items-center">
                Dance Journey
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-black font-bold px-6 py-3 hover:text-white flex items-center">
                My Blog
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Explore More Button for Small Screens */}
      {isSmallScreen && (
        <div className="md:hidden relative">
          <button
            className="text-white bg-orange-500 font-bold px-4 py-2 rounded hover:bg-orange-400"
            onClick={toggleDropdown}
          >
            Explore More
          </button>
          {isDropdownOpen && (
            <ul className="absolute left-0 bg-orange-400 mt-2 w-48 rounded-lg shadow-lg z-50">
              <li>
                <Link
                  to="/tech"
                  className="block px-4 py-2 text-center text-black hover:bg-orange-500"
                  onClick={closeDropdown}
                >
                  Technology Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/dance"
                  className="block px-4 py-2 text-center text-black hover:bg-orange-500"
                  onClick={closeDropdown}
                >
                  Dance Journey
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block px-4 py-2 text-center text-black hover:bg-orange-500"
                  onClick={closeDropdown}
                >
                  My Blog
                </Link>
              </li>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
