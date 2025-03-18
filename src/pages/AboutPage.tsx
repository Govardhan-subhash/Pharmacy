import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Award, 
  Users, 
  Target, 
  Lightbulb, 
  Heart, 
  Clock, 
  MapPin,
  X
} from 'lucide-react';

import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import Hero from '../components/Hero';
import StatsSection from '../components/StatsSection';

interface LeadershipMessage {
  title: string;
  name: string;
  role: string;
  message: string[];
  image: string;
}

interface Department {
  name: string;
  hodName: string;
  description: string;
  image: string;
}

const leadershipMessages: LeadershipMessage[] = [
  {
    title: "President's Message",
    name: "Sri Grandhi Satyanarayana",
    role: "President",
    message: [
      "With immense pleasure, I welcome you all to Sri Venkateshwara Institute of Professional Studies (SVIPS).",
      "Our President has extensive experience in the education field, successfully managing GMR Educational Institutions for over 16 years.",
      "Under his leadership, SVIPS has grown to become a premier institution for pharmaceutical education.",
      "We are committed to providing quality education and producing skilled professionals who contribute to the healthcare sector."
    ],
    image: "https://www.svips.ac.in/image/president.jpeg"
  },
  {
    title: "Secretary's Message",
    name: "Sri Ch.V.V Subba Rao",
    role: "Secretary",
    message:["Our Secretary & Correspondent, Sri Chalamcharla V.V.Subba Rao is a personality with an enhanced caliber of leadership and assertive skills.", 
      "These qualities contribute to the elevation of the institution in a big way.", 
      "He revels in shaping the career of the students with his unparalleled vision and mission.", 
      "He also has plans to extend his vision and goals across the man-made barriers and wish to earn global reputation."],
     
    image: "https://www.svips.ac.in/image/secretary.JPG"
  },
  {
    title: "Principal's Message",
    name: "Dr. K. Padmalatha",
    role: "Principal",
    message: [
      "As the Principal of SVIPS, I'm proud to lead an institution dedicated to pharmaceutical excellence.",
      "We provide comprehensive pharmaceutical education with a perfect blend of theory and practical training.",
      "Our focus is on developing skilled professionals ready to meet industry demands.",
      "We encourage research, innovation, and continuous learning among our students and faculty."
    ],
    image: "https://www.svips.ac.in/image/principal.jpg"
  }
];

const departments: Department[] = [
  {
    name: "Department of Pharmaceutics",
    hodName: "Dr. Sarah Johnson",
    description: "The Department of Pharmaceutics focuses on drug formulation and delivery systems...",
    image: "https://example.com/pharmaceutics.jpg"
  },
  // Add other departments...
];

const InfoModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  image?: string;
}> = ({ isOpen, onClose, title, content, image }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-lg max-w-4xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          {image && (
            <div className="h-96 overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-md"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">{title}</h3>
          <div className="prose max-w-none text-lg">{content}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AboutPage: React.FC = () => {
  const [selectedModal, setSelectedModal] = useState<{
    title: string;
    content: React.ReactNode;
    image?: string;
  } | null>(null);

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

      {/* Leadership & Governance Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Leadership & Governance"
            subtitle="Meet the visionaries leading our institution"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Quality Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedModal({
                title: "Quality Policy",
                content: "Our institution is committed to maintaining high standards...",
                image: "https://example.com/quality.jpg"
              })}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Policy</h3>
              <p className="text-gray-600 line-clamp-3">Click to view our quality policy and commitment to excellence.</p>
            </motion.div>

            {/* Leadership Messages */}
            {leadershipMessages.map((message, index) => (
              <motion.div
                key={message.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
                onClick={() => setSelectedModal({
                  title: message.title,
                  content: (
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <img 
                          src={message.image} 
                          alt={message.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div className="ml-6">
                          <h4 className="text-2xl font-bold text-gray-900">{message.name}</h4>
                          <p className="text-lg text-gray-600">{message.role}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {message.message.map((line, i) => (
                          <div key={i} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <p className="text-gray-600 text-lg">{line}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                  image: message.image
                })}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={message.image} 
                    alt={message.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{message.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{message.name} - {message.role}</p>
                  <p className="text-gray-600 line-clamp-3">{message.message[0]}</p>
                  <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
                    Read full message →
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Governing Body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedModal({
                title: "Govering Body",
                content: "The governing body of our institution comprises...",
                image: "https://example.com/governing-body.jpg"
              })}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Governing Body</h3>
              <p className="text-gray-600 line-clamp-3">Learn about our governing body and leadership structure.</p>
            </motion.div>

            {/* Organogram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedModal({
                title: "Organogram",
                content: "View our organizational structure and hierarchy.",
                image: "https://example.com/organogram.jpg"
              })}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Organogram</h3>
              <p className="text-gray-600 line-clamp-3">View our organizational structure</p>
            </motion.div>

            {/* Departments */}
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedModal({
                  title: dept.name,
                  content: (
                    <div>
                      <p className="font-medium text-gray-900 mb-2">HOD: {dept.hodName}</p>
                      <p className="text-gray-600">{dept.description}</p>
                    </div>
                  ),
                  image: dept.image
                })}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                <p className="text-gray-600 line-clamp-3">Click to learn more about the department</p>
              </motion.div>
            ))}

            {/* Affiliations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedModal({
                title: "Affiliations",
                content: "Our institution is proudly affiliated with...",
                image: "https://example.com/affiliations.jpg"
              })}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">Affiliations</h3>
              <p className="text-gray-600 line-clamp-3">View our institutional affiliations and partnerships</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedModal && (
          <InfoModal
            isOpen={!!selectedModal}
            onClose={() => setSelectedModal(null)}
            title={selectedModal.title}
            content={selectedModal.content}
            image={selectedModal.image}
          />
        )}
      </AnimatePresence>

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