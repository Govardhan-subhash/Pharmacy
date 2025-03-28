import React from 'react';
import { motion } from 'framer-motion';

import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

const ContactPage: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero 
        title="Get in Touch with Us"
        subtitle="We are here to help you with any questions or concerns you may have. Reach out to us today."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        primaryButtonText="Contact Us"
        primaryButtonLink="#contact-form"
        secondaryButtonText="Visit Us"
        secondaryButtonLink="#visit"
      />

      {/* Contact Information Section */}
      <section id="contact-info" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Contact Information"
            subtitle="Find our contact details and reach out to us through the form below."
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-lg opacity-20 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Contact Us" 
                className="rounded-lg shadow-lg w-full h-auto relative z-10"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Contact Details</h3>
              <p className="text-gray-600 mb-6">
                You can reach us via phone, email, or visit our campus. We are here to assist you with any queries you may have.
              </p>
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 9390649113</p>
                    <p className="text-gray-600">+91 9491084558</p>
                    <p className="text-gray-600">Fax No             :    +91-8818-284322
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600"> svipscollege@yahoo.co.in</p>
                    <p className="text-gray-600">   svipsseminar@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">Pedatadepalli,
Tadepalligudem - 534 101.
West Godavari Dist., Andhra Pradesh.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Contact Form"
            subtitle="Fill out the form below and we will get back to you as soon as possible."
          />
          <div className="mt-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 font-medium mb-2">Name</label>
                <input type="text" id="name" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="message" className="text-gray-700 font-medium mb-2">Message</label>
                <textarea id="message" rows={5} className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button type="submit" className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <CTASection 
        title="Visit Our Campus"
        subtitle="We would love to show you around our campus. Schedule a visit today."
        primaryButtonText="Schedule a Visit"
        primaryButtonLink="#visit"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="#contact-form"
      /> */}
    </PageTransition>
  );
};

export default ContactPage;