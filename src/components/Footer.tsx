import React from 'react';
import { 
  GraduationCap, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  ArrowUp 
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gray-900 text-white shadow-lg rounded-t-3xl rounded-b-3xl">
      {/* Main Footer */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">SVIPS</span>
            </div>
            <p className="text-gray-400 mb-6">
            Sri Vasavi Institute Of Pharmaceutical Sciences
            - Empowering students with knowledge, skills, and values since 1998.
            </p>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="font-medium text-white">Address:</span> 123 Main Street, West Godavari, Andhra Pradesh
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">Phone:</span> +91 98765 43210
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">Email:</span> info@svips.edu.in
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">Working Hours:</span> Mon - Fri, 9:00 AM - 5:00 PM
              </li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Developed By Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">Developed By</p>
          <img
            src="https://aikyam.ppsijc.org/wp-content/uploads/2024/08/FooterLogo.png"
            alt="Developed By Logo"
            className="mx-auto h-12"
          />
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Sri Vasavi Institute Of Pharmaceutical Sciences
            . All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;