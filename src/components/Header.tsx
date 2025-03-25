import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown
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
    // Close mobile menu and dropdown when route changes
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
    { name: 'RTI', path: '/pdfs/RTI_2023.pdf', external: true }, // Link to the RTI PDF
    { name: 'LMS', path: '/lms' },
    { name: 'PCI', path: '/pci' },
    { name: 'NAAC', path: '/naac' },
    {
      name: 'VLogin',
      path: 'https://sves.org.in/ecap_pharma/',
      external: true,
    },
    {
      name: 'RouteMap',
      path: 'https://www.google.com/maps/dir/?api=1&destination=Sri+Vasavi+Engineering+College+and+Pharmacy+Tadepalligudem',
      external: true,
    },
    {
      name: 'FeePayments',
      path: 'https://sves.org.in/Ecap_Pharma/olpaymentlogin.aspx',
      external: true,
    },
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
              <GraduationCap className={`h-10 w-10 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`ml-2 text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>SVIPS</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
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
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className={`font-medium flex items-center transition-colors duration-300 ${
                  scrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                <img
                  src="https://thumbs.dreamstime.com/z/pharmacy-caduceus-vector-icon-medical-corporate-logo-use-rehabilitation-pharmacology-business-pharmacy-caduceus-vector-106764918.jpg"
                  alt="Pharmacy Icon"
                  className="h-6 w-6 mr-1"
                />
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
                >
                  {dropdownLinks.map((link) => (
                    link.external ? (
                      <a
                        key={link.name}
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
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
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block py-2 ${
                      isActive(link.path)
                        ? 'text-blue-600 font-medium'
                        : 'text-gray-900 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Dropdown Menu for Mobile */}
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-gray-900 hover:text-blue-600 transition-colors"
                >
                  <img
                    src="https://thumbs.dreamstime.com/z/pharmacy-caduceus-vector-icon-medical-corporate-logo-use-rehabilitation-pharmacology-business-pharmacy-caduceus-vector-106764918.jpg"
                    alt="Pharmacy Icon"
                    className="h-6 w-6 mr-2"
                  />
                  <span className="font-medium">Pharmacy</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg py-2 z-50"
                  >
                    {dropdownLinks.map((link) => (
                      link.external ? (
                        <a
                          key={link.name}
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          key={link.name}
                          to={link.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {link.name}
                        </Link>
                      )
                    ))}
                  </motion.div>
                )}
              </div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
              >
                <Link to="/admissions" className="btn-primary mt-2 justify-center">
                  Apply Now
                </Link>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;