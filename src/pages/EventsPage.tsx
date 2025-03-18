import React, { useState } from 'react';
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
import CTASection from '../components/CTASection';
import { ArrowRight } from 'lucide-react';

const EventsPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  // Sample data for events
  const events = [
    {
      id: "cultural-fest",
      title: "Cultural Fest 2025",
      description: "Join us for a celebration of culture, music, and dance. Participate in various competitions and enjoy performances by talented artists.",
      date: "September 10, 2025",
      time: "10:00 AM - 8:00 PM",
      location: "Main Auditorium",
      learnMoreLink: "/events/cultural-fest" // Add this property
    },
    {
      id: "sports-day",
      title: "Annual Sports Day",
      description: "Showcase your athletic skills and compete in various sports events. Cheer for your friends and enjoy a day full of excitement.",
      date: "October 5, 2025",
      time: "8:00 AM - 5:00 PM",
      location: "Sports Ground",
      learnMoreLink: "/events/sports-day" // Add this property
    },
    {
      id: "tech-meetup",
      title: "Tech Meetup",
      description: "Network with tech enthusiasts, attend workshops, and learn about the latest trends in technology.",
      date: "November 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Conference Hall A",
      learnMoreLink: "/events/tech-meetup" // Add this property
    }
  ];

  const handleLearnMoreClick = (event: any) => {
    setSelectedEvent(event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero 
        title="Discover Our Events"
        subtitle="Stay updated with the latest events, workshops, and seminars happening at SVIPS."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        primaryButtonText="Upcoming Events"
        primaryButtonLink="#events"
        secondaryButtonText="Past Events"
        secondaryButtonLink="/past-events"
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
                learnMoreLink={event.learnMoreLink} // Pass this prop
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

      {/* Popup for Event Details */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button 
              onClick={handleClosePopup} 
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedEvent.title}</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Point 1 about the event</li>
              <li>Point 2 about the event</li>
              <li>Point 3 about the event</li>
              <li>Point 4 about the event</li>
              <li>Point 5 about the event</li>
            </ul>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <CTASection 
        title="Join Our Events"
        subtitle="Participate in our events and make the most of your time at SVIPS."
        primaryButtonText="Explore Events"
        primaryButtonLink="/events"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </PageTransition>
  );
};

export default EventsPage;