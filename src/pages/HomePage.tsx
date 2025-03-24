import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight, 
  ChevronRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import CourseCard from '../components/CourseCard';
import FacultyCard from '../components/FacultyCard';
import EventCard from '../components/EventCard';
import TestimonialCard from '../components/TestimonialCard';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  // Sample data for courses
  const courses = [
    {
      id: "bba",
      title: "Bachelor of Business Administration",
      description: "A comprehensive program that prepares students for careers in business management, entrepreneurship, and corporate leadership.",
      image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "3 Years",
      level: "Undergraduate",
      students: 1200
    },
    {
      id: "bca",
      title: "Bachelor of Computer Applications",
      description: "A program focused on computer applications and software development, preparing students for the IT industry.",
      image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "3 Years",
      level: "Undergraduate",
      students: 950
    },
    {
      id: "mba",
      title: "Master of Business Administration",
      description: "An advanced program for developing leadership skills and business acumen for executive positions.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      duration: "2 Years",
      level: "Postgraduate",
      students: 780
    }
  ];

  // Sample data for faculty
  const faculty = [
    {
      name: "Dr. Priya Sharma",
      title: "Dean, School of Business",
      bio: "Ph.D. in Business Management with over 15 years of experience in academia and industry consulting.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      linkedin: "#",
      email: "priya.sharma@svips.edu.in"
    },
    {
      name: "Prof. Rajesh Kumar",
      title: "Head, Computer Science Department",
      bio: "M.Tech in Computer Science with expertise in AI and Machine Learning. Former tech lead at a leading IT company.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      linkedin: "#",
      email: "rajesh.kumar@svips.edu.in"
    },
    {
      name: "Dr. Anita Desai",
      title: "Professor, Economics",
      bio: "Ph.D. in Economics with research focus on developmental economics and policy making. Published author of multiple research papers.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      linkedin: "#",
      email: "anita.desai@svips.edu.in"
    }
  ];

  // Sample data for events
  const events = [
    {
      id: "tech-symposium",
      title: "Annual Tech Symposium",
      description: "A day-long event featuring tech talks, workshops, and networking opportunities with industry leaders.",
      date: "June 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium"
    },
    {
      id: "leadership-workshop",
      title: "Leadership Workshop",
      description: "An interactive workshop on developing leadership skills and effective team management.",
      date: "July 5, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Conference Hall B"
    },
    {
      id: "career-fair",
      title: "Career Fair 2025",
      description: "Connect with top employers, explore career opportunities, and attend interview preparation sessions.",
      date: "August 20, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Campus Grounds"
    }
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      name: "Aisha Patel",
      title: "BBA Graduate, 2024",
      quote: "My time at SVIPS has been transformative. The faculty's guidance and industry-focused curriculum prepared me well for my career. I secured a placement at a top company even before graduation.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Rahul Mehta",
      title: "BCA Student, 3rd Year",
      quote: "The practical approach to learning at SVIPS has helped me develop real-world skills. The coding competitions and tech workshops have been invaluable in building my portfolio.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Neha Singh",
      title: "MBA Graduate, 2023",
      quote: "The MBA program at SVIPS provided me with a comprehensive understanding of business management. The case studies, industry visits, and mentorship programs gave me a competitive edge in the job market.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
    },
    {
      name: "Vikram Reddy",
      title: "BCA Graduate, 2022",
      quote: "SVIPS gave me the perfect platform to develop my technical skills. The faculty members are extremely supportive and the infrastructure is world-class. I'm now working at a leading tech company.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero 
        title="Sri Vasavi Institute Of Pharmaceutical Sciences"
        subtitle="Approved by PCI-New Delhi , Afflicated to Andhra University"
        image="https://www.joonsquare.com/usermanage/image/business/sri-vasavi-institute-of-pharmaceutical-sciences-west-godavari-15455/sri-vasavi-institute-of-pharmaceutical-sciences-west-godavari-sri-vasavi-institute-of-pharmaceutical-sciences-1.jpg"
        primaryButtonText="Explore Courses"
        primaryButtonLink="/courses"
        secondaryButtonText="Get in Touch"
        secondaryButtonLink="/contact"
      />

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="About SVIPS"
            subtitle="Sri Vasavi Institute of Pharmaceutical Sciences is dedicated to providing quality education, fostering research, and developing skilled professionals in the pharmaceutical field."
          />
          <div className="flex flex-wrap justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuD7O9_iy4sJmYzRkL8eBW8Z0yavZdJvwmQ&s"
              alt="SVIPS Campus"
              className="rounded-lg shadow-lg w-1/12 h-auto relative z-10 m-2"
            />
            <img
              src="https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-11-1200x750.png"
              alt="SVIPS Campus"
              className="rounded-lg shadow-lg w-1/12 h-auto relative z-10 m-2"
            />
            <img
              src="https://mbits.ac.in/wp-content/uploads/2023/03/naac.png"
              alt="SVIPS Campus"
              className="rounded-lg shadow-lg w-1/12 h-auto relative z-10 m-2"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2AMTIWKIzMlQl3Vwm_tR-ynWIRnXsh2KeEg&s"
              alt="SVIPS Campus"
              className="rounded-lg shadow-lg w-1/12 h-auto relative z-10 m-2"
            />
          </div>
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
                src="https://www.joonsquare.com/usermanage/image/business/sri-vasavi-institute-of-pharmaceutical-sciences-west-godavari-15455/sri-vasavi-institute-of-pharmaceutical-sciences-west-godavari-sri-vasavi-institute-of-pharmaceutical-sciences-1.jpg" 
                alt="SVIPS Campus" 
                className="rounded-lg shadow-lg w-full h-auto relative z-10"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision & Mission</h3>
              <p className="text-gray-600 mb-6">      
Sri Vasavi Institue of Pharmaceutical Science College aims to provide world-class pharmaceutical education, fostering innovation and research excellence. We are committed to shaping future professionals with a strong foundation in ethics, teamwork, and industry-relevant skills.
              </p>
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Quality Education</h4>
                    <p className="text-gray-600">Provide quality Pharmaceutical Education by collaborating with Research Institutes and Industries.</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Student-Centered Approach</h4>
                    <p className="text-gray-600">Focusing on individual growth and development of each student and Nurture Team spirit, Professional skills and Ethics among the students.</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">R&D</h4>
                    <p className="text-gray-600">Establish state-of-the-art R&D facilities and Incubation centers.</p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/about" className="mt-8 inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
                  Learn more about our history <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section
      <section id="courses" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Courses"
            subtitle="Discover our comprehensive range of undergraduate and postgraduate programs designed to prepare you for success."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard 
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                duration={course.duration}
                level={course.level}
                students={course.students}
                delay={index * 0.1}
              />
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/courses" className="btn-primary">
              View All Courses <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Stats Section */}
      <StatsSection />

      {/* Faculty Section */}
      <section id="faculty" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Faculty"
            subtitle="Meet our team of experienced educators and industry professionals dedicated to student success."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, index) => (
              <FacultyCard 
                key={member.name}
                name={member.name}
                title={member.title}
                bio={member.bio}
                image={member.image}
                linkedin={member.linkedin}
                email={member.email}
                delay={index * 0.1}
              />
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/faculty" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
              View All Faculty Members <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Upcoming Events"
            subtitle="Stay updated with our latest events, workshops, and seminars."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard 
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
                date={event.date}
                time={event.time}
                location={event.location}
                delay={index * 0.1}
              />
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/events" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300">
              View All Events <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Student Testimonials"
            subtitle="Hear what our students have to say about their experience at SVIPS."
          />
          <div className="mt-12">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 5000 }}
              className="pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard 
                    name={testimonial.name}
                    title={testimonial.title}
                    quote={testimonial.quote}
                    image={testimonial.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Start Your Journey?"
        subtitle="Applications for the 2025-26 academic year are now open. Take the first step towards a successful career."
        primaryButtonText="Apply Now"
        primaryButtonLink="/admissions"
        secondaryButtonText="Download Brochure"
        secondaryButtonLink="#"
      />
    </PageTransition>
  );
};

export default HomePage;