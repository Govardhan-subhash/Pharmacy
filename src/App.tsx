import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import FacultyPage from './components/faculty/FacultyPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ApplyPage from './pages/ApplyPage';
import PastEventsPage from './pages/PastEventsPage';
import CampusLifePage from './pages/CampusLifePage';
import ResearchPage from './pages/Researchpage';



import CommitteesPage from './components/committee/CommiteePage';

// import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/committee" element={<CommitteesPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/past-events" element={<PastEventsPage />} />
            <Route path="/research" element={<ResearchPage />} />


            <Route path="/campus-life" element={<CampusLifePage />} />
           
            <Route path="/research" element={<ResearchPage />} />

            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;