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
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gray-900 text-white shadow-lg">
      {/* Main Footer */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section with Connect With Us */}
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">SVIPS</span>
            </div>
            <p className="text-gray-400 mb-4">
              Sri Vasavi Institute Of Pharmaceutical Sciences - Empowering students with knowledge, skills, and values since 1998.
            </p>
            <h4 className="text-lg font-bold mb-4 text-white">Connect With Us</h4>
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
              <a
                href="https://www.linkedin.com/company/sri-vasavi-pharmacy-college/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://sves.org.in/Ecap_Pharma/olpaymentlogin.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Fee Payments
                </a>
              </li>
              <li>
                <a
                  href="https://sves.org.in/ecap_pharma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  VLogin
                </a>
              </li>
              <li>
                <a
                  href="/campus-life"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Campus Life
                </a>
              </li>
              <li>
                <a
                  href="/admissions"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <p className="text-gray-400">
              Pedatadepalli, Tadepalligudem - 534 101.<br />
              West Godavari Dist., Andhra Pradesh.
            </p>
            <p className="text-gray-400 mt-2">
              <span className="font-medium text-white">Phone:</span> +91-8818-284558
            </p>
            <p className="text-gray-400 mt-1">
              <span className="font-medium text-white">Mobile:</span> 9390649113
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-6 pt-4 flex justify-between items-center">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Sri Vasavi Institute Of Pharmaceutical Sciences. All rights reserved.
          </p>
          <div className="text-right">
            <p className="text-gray-400 text-[10px] mb-1">Developed By</p> {/* Decreased font size */}
            <img
              src="https://aikyam.ppsijc.org/wp-content/uploads/2024/08/FooterLogo.png"
              alt="Developed By Logo"
              className="h-6" 
            />
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