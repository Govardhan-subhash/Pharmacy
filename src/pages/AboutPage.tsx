import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Award, 
  Users, 
  Target, 
  Lightbulb, 
  Heart, 
  Clock, 
  MapPin 
} from 'lucide-react';

import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';

const AboutPage: React.FC = () => {
  const timeline = [
    {
      year: "1998",
      title: "Foundation",
      description: "SVIPS was established with a vision to provide quality education to students."
    },
    {
      year: "2003",
      title: "Campus Expansion",
      description: "Expanded the campus with new buildings and modern facilities."
    },
    {
      year: "2008",
      title: "Accreditation",
      description: "Received accreditation from the National Assessment and Accreditation Council (NAAC)."
    },
    {
      year: "2012",
      title: "Research Center",
      description: "Established a dedicated research center to promote innovation and research."
    },
    {
      year: "2018",
      title: "International Partnerships",
      description: "Formed partnerships with international universities for student exchange programs."
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Implemented digital learning platforms and smart classrooms across the campus."
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero 
        title="About SVIPS"
        subtitle="Learn about our history, mission, and values that drive us towards excellence."
        image="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80"
        primaryButtonText="Our Programs"
        primaryButtonLink="/courses"
        secondaryButtonText="Meet Our Team"
        secondaryButtonLink="/faculty"
      />

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <p className="text-gray-600 mb-6">
                At Sri Venkateshwara Institute of Professional Studies, we are committed to providing a transformative educational experience that prepares students for successful careers and meaningful lives. Our institution stands on the pillars of academic excellence, innovation, and ethical values.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-gray-900">Our Mission</h4>
                    <p className="text-gray-600">To empower students with knowledge, skills, and values that enable them to excel in their chosen fields and contribute positively to society.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Lightbulb className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-gray-900">Our Vision</h4>
                    <p className="text-gray-600">To be a globally recognized institution known for academic excellence, innovation, and producing leaders who make a difference in the world.</p>
                  </div>
                </div>
              </div>
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
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="SVIPS Mission" 
                className="rounded-lg shadow-lg w-full h-auto relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Core Values"
            subtitle="The principles that guide our institution and shape our approach to education."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                <BookOpen className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in all aspects of education, research, and administration, setting high standards and continuously improving.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards, fostering honesty, transparency, and accountability in all our actions and decisions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We embrace diversity and create an inclusive environment where every individual is respected, valued, and given equal opportunities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Lightbulb className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We encourage creative thinking, innovation, and entrepreneurship, adapting to changing times while maintaining our core values.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Social Responsibility</h3>
              <p className="text-gray-600">
                We are committed to making a positive impact on society through education, research, and community service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Student-Centered</h3>
              <p className="text-gray-600">
                We place students at the center of everything we do, focusing on their holistic development and success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Journey"
            subtitle="Tracing the evolution and growth of SVIPS over the years."
          />
          <div className="relative mt-12">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}>
                    <div className="text-3xl font-bold text-blue-600">{item.year}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Campus"
            subtitle="Explore our state-of-the-art facilities designed to provide an optimal learning environment."
          />
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-gray-600">
                Our campus spans over 25 acres of lush greenery, providing a serene environment conducive to learning and growth. The campus features modern infrastructure, state-of-the-art facilities, and a vibrant community atmosphere.
              </p>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 rounded-full p-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Modern Classrooms</h4>
                  <p className="text-gray-600">Smart classrooms equipped with the latest technology for an enhanced learning experience.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 rounded-full p-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Well-Stocked Library</h4>
                  <p className="text-gray-600">A vast collection of books, journals, and digital resources to support research and learning.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 rounded-full p-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Computer Labs</h4>
                  <p className="text-gray-600">Advanced computer labs with the latest software and hardware for practical learning.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-blue-100 rounded-full p-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">Conveniently located in the heart of the city, easily accessible by public transportation.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80" 
                  alt="Campus Building" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Campus Grounds" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <img 
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" 
                  alt="Library" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Computer Lab" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
    </PageTransition>
  );
};

export default AboutPage;