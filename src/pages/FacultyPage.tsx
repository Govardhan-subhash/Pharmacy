import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import Hero from '../components/Hero';
import FacultyCard from '../components/FacultyCard';

const FacultyPage: React.FC = () => {
  // Sample data for faculty
  const allFaculty = [
    {
      name: "Dr. Priya Sharma",
      title: "Dean, School of Business",
      bio: "Ph.D. in Business Management with over 15 years of experience in academia and industry consulting.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      linkedin: "#",
      email: "priya.sharma@svips.edu.in",
      department: "business"
    },
    {
      name: "Prof. Rajesh Kumar",
      title: "Head, Computer Science Department",
      bio: "M.Tech in Computer Science with expertise in AI and Machine Learning. Former tech lead at a leading IT company.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      linkedin: "#",
      email: "rajesh.kumar@svips.edu.in",
      department: "technology"
    },
    {
      name: "Dr. Anita Desai",
      title: "Professor, Economics",
      bio: "Ph.D. in Economics with research focus on developmental economics and policy making. Published author of multiple research papers.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      linkedin: "#",
      email: "anita.desai@svips.edu.in",
      department: "business"
    },
    {
      name: "Dr. Vikram Singh",
      title: "Associate Professor, Computer Science",
      bio: "Ph.D. in Computer Science with specialization in cybersecurity. Has published numerous papers in international journals.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      linkedin: "#",
      email: "vikram.singh@svips.edu.in",
      department: "technology"
    },
    {
      name: "Prof. Meera Patel",
      title: "Assistant Professor, Marketing",
      bio: "MBA with specialization in Marketing. Has 8 years of industry experience in brand management and digital marketing.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      linkedin: "#",
      email: "meera.patel@svips.edu.in",
      department: "business"
    },
    {
      name: "Dr. Sanjay Gupta",
      title: "Professor, Finance",
      bio: "Ph.D. in Finance with expertise in financial markets and investment analysis. Former financial analyst at a leading bank.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      linkedin: "#",
      email: "sanjay.gupta@svips.edu.in",
      department: "business"
    },
    {
      name: "Dr. Neha Reddy",
      title: "Associate Professor, Data Science",
      bio: "Ph.D. in Data Science with focus on machine learning algorithms. Has worked on several industry projects in data analytics.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      linkedin: "#",
      email: "neha.reddy@svips.edu.in",
      department: "technology"
    },
    {
      name: "Prof. Arjun Mehta",
      title: "Assistant Professor, Software Engineering",
      bio: "M.Tech in Software Engineering with 10 years of industry experience in software development and project management.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      linkedin: "#",
      email: "arjun.mehta@svips.edu.in",
      department: "technology"
    },
    {
      name: "Dr. Kavita Sharma",
      title: "Professor, Human Resources",
      bio: "Ph.D. in Human Resource Management with expertise in organizational behavior and talent management.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      linkedin: "#",
      email: "kavita.sharma@svips.edu.in",
      department: "business"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Filter faculty based on search term and department
  const filteredFaculty = allFaculty.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faculty.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faculty.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || faculty.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero 
        title="Our Faculty"
        subtitle="Meet our team of experienced educators and industry professionals dedicated to student success."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        primaryButtonText="Join Our Team"
        primaryButtonLink="/careers"
        secondaryButtonText="Research Publications"
        secondaryButtonLink="#"
      />

      {/* Faculty Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Meet Our Faculty"
            subtitle="Our faculty members bring a wealth of academic knowledge and industry experience to the classroom."
          />

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search faculty..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="relative">
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="appearance-none w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="all">All Departments</option>
                    <option value="business">Business</option>
                    <option value="technology">Technology</option>
                  </select>
                  <Filter className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Faculty Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((faculty, index) => (
              <FacultyCard 
                key={faculty.name}
                name={faculty.name}
                title={faculty.title}
                bio={faculty.bio}
                image={faculty.image}
                linkedin={faculty.linkedin}
                email={faculty.email}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Research & Publications"
            subtitle="Our faculty members are actively engaged in research across various disciplines."
          />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Areas</h3>
              <p className="text-gray-600 mb-6">
                Our faculty members conduct research in various fields, contributing to the advancement of knowledge and addressing real-world challenges. Some of our key research areas include:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Artificial Intelligence and Machine Learning</h4>
                    <p className="text-gray-600">Research on advanced algorithms, neural networks, and applications in various domains.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Business Analytics and Decision Sciences</h4>
                    <p className="text-gray-600">Research on data-driven decision making, predictive analytics, and business intelligence.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Sustainable Development and Green Business</h4>
                    <p className="text-gray-600">Research on sustainable business practices, environmental economics, and corporate social responsibility.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Financial Markets and Investment Analysis</h4>
                    <p className="text-gray-600">Research on market behavior, investment strategies, and financial risk management.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600 rounded-lg opacity-20 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Research" 
                className="rounded-lg shadow-lg w-full h-auto relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Join Our Academic Community
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
            >
              We are always looking for talented educators and researchers to join our team. Explore current openings and opportunities.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="/careers" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md font-medium transition-colors duration-300">
                View Current Openings
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default FacultyPage;