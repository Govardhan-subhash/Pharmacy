import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import EventCard from '../components/EventCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import { ArrowRight } from 'lucide-react';

const CampusLifePage: React.FC = () => {
  // Sample data for events
  const events = [
    {
      id: "cultural-fest",
      title: "Cultural Fest 2025",
      description: "Join us for a celebration of culture, music, and dance. Participate in various competitions and enjoy performances by talented artists.",
      date: "September 10, 2025",
      time: "10:00 AM - 8:00 PM",
      location: "Main Auditorium"
    },
    {
      id: "sports-day",
      title: "Annual Sports Day",
      description: "Showcase your athletic skills and compete in various sports events. Cheer for your friends and enjoy a day full of excitement.",
      date: "October 5, 2025",
      time: "8:00 AM - 5:00 PM",
      location: "Sports Ground"
    },
    {
      id: "tech-meetup",
      title: "Tech Meetup",
      description: "Network with tech enthusiasts, attend workshops, and learn about the latest trends in technology.",
      date: "November 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Conference Hall A"
    }
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      name: "Aisha Patel",
      title: "BBA Graduate, 2024",
      quote: "The campus life at SVIPS is vibrant and full of opportunities. I enjoyed participating in various clubs and events, which helped me grow both personally and professionally.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Rahul Mehta",
      title: "BCA Student, 3rd Year",
      quote: "SVIPS offers a perfect balance of academics and extracurricular activities. The events and workshops organized on campus have been instrumental in shaping my career.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Neha Singh",
      title: "MBA Graduate, 2023",
      quote: "The vibrant campus life at SVIPS provided me with numerous opportunities to develop my leadership skills. The cultural fests and sports events were the highlights of my time here.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
    }
  ];

  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto p-4"
      >
        <h1 className="text-4xl font-bold mb-4">Campus Life</h1>
        <p className="mb-4">
          Welcome to the Campus Life page. Here you will find information about student activities, clubs, and events happening on campus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Student Activities</h2>
            <p>Explore the various student activities available on campus.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Clubs and Organizations</h2>
            <p>Join one of the many clubs and organizations to meet new people and develop new skills.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Events</h2>
            <p>Stay updated with the latest events happening on campus.</p>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <Hero 
        title="Experience the Vibrant Campus Life"
        subtitle="Discover the diverse range of activities, clubs, and events that make SVIPS a lively and engaging place to study."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        primaryButtonText="Join a Club"
        primaryButtonLink="/clubs"
        secondaryButtonText="Upcoming Events"
        secondaryButtonLink="#events"
      />

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
        title="Ready to Join the Fun?"
        subtitle="Explore the various clubs and activities available on campus. Get involved and make the most of your time at SVIPS."
        primaryButtonText="Explore Clubs"
        primaryButtonLink="/clubs"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </PageTransition>
  );
};

export default CampusLifePage;