import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Placement', path: '/placement' },
    { name: 'Research', path: '/research' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'Committees', path: '/committee' },
    { name: 'Events', path: '/events' },
    { name: 'Admissions & Academics', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  const dropdownLinks = [
    { name: 'RTI', path: 'public/uploads/pdfs/RTI_2023.pdf', external: true },
    { name: 'LMS', path: '/lms' },
    { name: 'PCI', path: '/pci' },
    { name: 'NAAC', path: '/naac' },
    { name: 'Feedback', path: '/feedback' },
    { name: 'VLogin', path: 'https://sves.org.in/ecap_pharma/', external: true },
    { name: 'RouteMap', path: 'https://www.google.com/maps/dir/?api=1&destination=Sri+Vasavi+Engineering+College+and+Pharmacy+Tadepalligudem', external: true },
    { name: 'FeePayments', path: 'https://sves.org.in/Ecap_Pharma/olpaymentlogin.aspx', external: true },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <span className={`ml-2 text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                SVIPS
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-blue-600'
                      : scrolled
                      ? 'text-gray-900 hover:text-blue-600'
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div className="h-0.5 bg-blue-600 mt-0.5" layoutId="underline" />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Dropdown Menu */}
            <div className="relative z-50">
              <button
                onClick={toggleDropdown}
                className={`font-medium flex items-center transition-colors duration-300 ${
                  scrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                More Options
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md overflow-hidden z-50"
                >
                  {dropdownLinks.map((link) => (
                    link.external ? (
                      <a
                        key={link.name}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                </motion.div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${scrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 transition-colors`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="bg-white shadow-md rounded-md">
          <nav className="flex flex-col items-center p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-2 px-4 text-gray-700 hover:bg-gray-100 transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
            {/* Mobile Dropdown */}
            <div className="relative w-full z-50">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-4 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                More Options
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <div className="bg-white shadow-md rounded-md overflow-hidden mt-2">
                  {dropdownLinks.map((link) => (
                    link.external ? (
                      <a
                        key={link.name}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;