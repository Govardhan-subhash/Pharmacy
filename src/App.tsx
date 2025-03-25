import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import NAACPage from './pages/NAACPage';
import Criteria1 from './pages/Criteria1';


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
              <Route path="/naac" element={<NAACPage />} />
              <Route path="/research/publications" element={<div>Publications Page</div>} />
              <Route path="/research/projects" element={<div>Projects Page</div>} />
              <Route path="/research/collaborations" element={<div>Collaborations Page</div>} />
              <Route path="/research/funding" element={<div>Funding Page</div>} />
              <Route path="/research/patents" element={<div>Patents Page</div>} />
              <Route path="/criteria/criteria-i" element={<Criteria1 />} />
              {/* Uncomment this if you have a NotFoundPage */}
      
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
  
  );
};

export default App;