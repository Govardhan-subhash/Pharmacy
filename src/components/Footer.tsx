import React from 'react';
import { Link } from 'react-router-dom';
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
    <footer className="bg-gray-900 text-white">
      {/* Top Footer with Newsletter */}
      <div className="bg-blue-600 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-blue-100">Subscribe to our newsletter for the latest news and events</p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button 
                  type="submit" 
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">SVIPS</span>
            </div>
            <p className="text-gray-400 mb-6">
              Sri Venkateshwara Institute of Professional Studies - Empowering students with knowledge, skills, and values since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300">Courses</Link></li>
              <li><Link to="/faculty" className="text-gray-400 hover:text-white transition-colors duration-300">Faculty</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors duration-300">Events</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Programs</h4>
            <ul className="space-y-3">
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300">BBA</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300">BCA</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300">MBA</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300">MCA</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300">B.Com</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors duration-300">M.Com</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Student Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Library</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Alumni</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Media</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sri Venkateshwara Institute of Professional Studies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Sitemap</a>
          </div>
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