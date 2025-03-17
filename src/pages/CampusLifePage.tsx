import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';

import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import EventCard from '../components/EventCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import { ArrowRight } from 'lucide-react';
import FacilityModal from '../components/FacilityModal';
import GrievanceFormModal from '../components/GrievanceFormModal';

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

  // Sample data for facilities
  const facilities = [
    {
      id: "library",
      title: "Library",
      description: [
        "A vast collection of books, journals, and digital resources",
        "Multiple reading halls with modern furniture",
        "Digital library section with online access",
        "Quiet study areas for focused learning"
      ],
      image: "https://www.svips.ac.in/image/library.jpg",
      additionalImages: [
        "https://images.unsplash.com/photo-1568667256549-094345857637",
        "https://images.unsplash.com/photo-1553279768-865429fa0078",
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
      ]
    },
    {
      id: "gymnasium",
      title: "Gymnasium & Sports",
      description: [
        "A gymnasium is an indoor facility for gymnastics, athletics, and fitness activities, originating from ancient Greek. They are commonly found in athletic and fitness centres, educational institutions, and fitness centres. Gyms feature apparatus for various exercises and sports.",
        "The College offers a modern gymnasium with state-of-the-art equipment and a dedicated instructor or trainer for students and staff's health and fitness.",
        "Students and faculty can access the gymnasium's 'Fun-N-Fit Zone', which can be used in the morning or evening, at their convenience."
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEDJIBa9cOKUUV31h-vF2UOx0DxP4H9Dfs4g&s",
      additionalImages: [
        "https://www.svips.ac.in/image/gym1.JPG",
        "https://www.svips.ac.in/image/gym2.JPG",
        "https://www.svips.ac.in/image/gym3.JPG"
      ]
    },
    {
      id: "cafeteria",
      title: "Campus Canteen",
      description: [
        "Our college canteen is a crucial campus space providing students, faculty, and staff with a place to eat, relax, and socialize.",
        "College canteens provide diverse food options, including vegetarian, vegan, and non-vegetarian options, to cater to diverse tastes and dietary needs.",
        "College canteens are increasingly promoting healthier food options, such as fresh fruits, salads, and whole-grain products.",
        "Canteens offer students ample seating, free Wi-Fi access, and social space, serving as a hub for group dining and individual study, promoting social interaction outside of classes."
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRre30vAkbwFIIiNllg-tVSOVrVlE--J_OoVA&s",
      additionalImages: [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3c9bJgY3UzXl2JVG9Ehm1UiRwWBXeyXN5A&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVJoUPUuYLGaGXw2Hs1ZZDFUM4wewMtIwPw&s"
      ]
    },
    {
      id: "transport",
      title: "Transport Facility",
      description: [
        "Our fleet of buses provides safe and comfortable transportation for students from various points in the city.",
        "The transport facility is provided to students on an annual basis for the duration of the academic session. Allocation of this facility is done on a first-come, first-served basis.",
        "A fleet of 70 buses are available for faculty and students for commuting between campus and their place of residency.",
        "College buses cross in various routes to accommodate the needs of the students and faculty from different corners of west Godavari.",
        "Free transportation is provided for the faculty who comes from Tadepalligudem and also 50% concession for faculty coming from places other than Tadepalligudem.",
        "The provided routes and pick-up points are indicative and are subject to change periodically.",
        "The College Bus schedules for arrival at the College Campus are 9:10 a.m. and departure at 5:00 p.m., unless otherwise specified by the College.",
        "Students are advised to arrive at their bus stops five minutes early for the college bus, which will depart from the college at 4:45 PM."
      ],
      image: "https://www.svips.ac.in/image/transport.jpg",
      additionalImages: [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRCpVDuK_aC97l0vMzXu58bzzGTAdE8CQuA&s",
"https://www.svips.ac.in/image/transport.jpg"

      ]
    },
    {
      id: "auditorium",
      title: "Modern Auditorium",
      description:[ 
        "The college offers various events, including conferences, seminars, and cultural programs.",
        "The SVIPS Auditorium is a soundproof, air-conditioned venue ideal for large events.",
        "Smaller digital oration centers are available to host a variety of events.",
        "Performance spaces are provided to facilitate smooth student conduct during performances.",
        "The college organizes workshops and interactive sessions for skill development.",
        "State-of-the-art technology is used for audio-visual needs during events.",
        "The campus also hosts annual festivals and exhibitions to promote student creativity."
      ],
      image: "https://www.svips.ac.in/image/auditorium.jpg",
      additionalImages: [
" https://media.istockphoto.com/id/157334256/photo/empty-auditorium-with-grey-seats-and-downlights.jpg?s=612x612&w=0&k=20&c=TU4bgRGuDDPQ7asMeAau2vR1xTrjVm6AJm-KDrs8-_0=",
"https://media.istockphoto.com/id/178572410/photo/auditorium-theatre.jpg?s=612x612&w=0&k=20&c=T6aKq5ArtQPaNjKwAZi4WK0ACQCXTIJi09o9qUcl3uc="
      ]
    },
    {
      id: "medical",
      title: "Medical Facility",
      description: [
        "A gymnasium is an indoor facility for gymnastics, athletics, and fitness activities, originating from ancient Greek. They are commonly found in athletic and fitness centres, educational institutions, and fitness centres. Gyms feature apparatus for various exercises and sports.",
        "The College offers a modern gymnasium with state-of-the-art equipment and a dedicated instructor or trainer for students and staff's health and fitness.",
        "Students and faculty can access the gymnasium's 'Fun-N-Fit Zone', which can be used in the morning or evening, at their convenience.",
        "The college offers acute health care services, first aid facilities, and excellent medical support, collaborating with leading hospitals in Tadepalligudem and surrounding regions.",
        "Hostel wardens provide homely care and timely treatment, ensuring the well-being of students staying on campus."
      ],
      image: "https://rmsmps.org/wp-content/uploads/2019/05/medical.png",
      additionalImages: [
"https://www.svips.ac.in/image/medical1.jpg",
"https://www.svips.ac.in/image/medical2.jpg"
      ]
    },
    {
      id: "temple",
      title: "Campus Temple",
      description: "A peaceful temple within the campus for spiritual well-being of students and staff.",
      image: "https://www.svips.ac.in/image/temple.jpg",
      additionalImages: [
        "https://images.unsplash.com/photo-1542397284385-6010376c5337",
        "https://images.unsplash.com/photo-1523544261025-3159599b1fc3",
        "https://images.unsplash.com/photo-1577393165327-167ff5302cdf"
      ]
    },
    {
      id: "anti-ragging",
      title: "Anti-Ragging Cell",
      description: "Active anti-ragging committee ensuring a safe and friendly environment for all students.",
      image: "https://gecpatan.ac.in/images/Anti-Ragging.png",
      additionalImages: [
"https://gactvm.org/wp-content/uploads/2024/06/antiragging.jpg"
,
"https://gecpatan.ac.in/images/Anti-Ragging.png"
      ]
    },
    {
      id: "grievance",
      title: "Grievance Cell",
      description: [
        "Submit your grievances or concerns through our online form",
        "All submissions are treated with strict confidentiality",
        "Our dedicated team ensures timely resolution of all issues",
        "Track the status of your submitted grievances"
      ],
      image: "https://media.licdn.com/dms/image/v2/C4E12AQEtZDtuBRmHLw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1574160808837?e=2147483647&v=beta&t=KdelOCnsVDwfhdHPGzMy4FXMyE3M6aZcDZpE0fdHX3o",
      additionalImages: [
        "https://images.unsplash.com/photo-1565843248736-8c41e6db117b",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        "https://images.unsplash.com/photo-1573497491765-dccce02b29df"
      ],
      isForm: true // Add this flag to identify grievance facility
    }
  ];

  const [selectedFacility, setSelectedFacility] = React.useState<typeof facilities[0] | null>(null);
  const [isGrievanceFormOpen, setIsGrievanceFormOpen] = React.useState(false);

  const handleFacilityClick = (facility: typeof facilities[0]) => {
    if (facility.isForm) {
      setIsGrievanceFormOpen(true);
    } else {
      setSelectedFacility(facility);
    }
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <Hero 
        title="Experience the Vibrant Campus Life"
        subtitle="Discover the diverse range of activities, clubs, and events that make SVIPS a lively and engaging place to study."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3"
        primaryButtonText="Join a Club"
        primaryButtonLink="/clubs"
        secondaryButtonText="Upcoming Events"
        secondaryButtonLink="#events"
      />

      {/* Campus Facilities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Campus Facilities"
            subtitle="Explore the world-class facilities available at SVIPS for our students"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
                onClick={() => handleFacilityClick(facility)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{Array.isArray(facility.description) ? facility.description[0] : facility.description}</p>
                  <span className="text-blue-600 text-sm mt-2 inline-block">Click to learn more</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add the modals */}
      <FacilityModal 
        facility={selectedFacility}
        onClose={() => setSelectedFacility(null)}
      />
      <GrievanceFormModal 
        isOpen={isGrievanceFormOpen}
        onClose={() => setIsGrievanceFormOpen(false)}
      />

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
        subtitle="Explore the various clubs and activities available on campus."
        primaryButtonText="Explore Clubs"
        primaryButtonLink="/clubs"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </PageTransition>
  );
};

export default CampusLifePage;