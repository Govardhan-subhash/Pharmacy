import React from 'react';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
=======
import { Route, Routes } from 'react-router-dom';
>>>>>>> 3b69a9b61c62ea6b38ad8493c0e502ec263cfa58
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
import PCIPage from './pages/PCIPage';
import CommitteesPage from './components/committee/CommiteePage';
import PlacementPage from './pages/PlacementPage';


const App: React.FC = () => {
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
              <Route path="/pci" element={<PCIPage />} />
              <Route path="/placement" element={<PlacementPage />} />
              {/* Uncomment this if you have a NotFoundPage */}
      
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
  
  );
};

export default App;