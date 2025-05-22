import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import TrustElements from './components/TrustElements';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import PageTransition from './components/PageTransition';

function HomePage() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetId = href.substring(1);
        if (!targetId) return;
        
        const target = document.querySelector(`#${targetId}`);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <PageTransition>
      <Hero />
      <Benefits />
      <Testimonials />
      <CTASection />
      <FAQ />
      <TrustElements />
    </PageTransition>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="font-['Poppins'] text-gray-800">
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } />
          <Route path="/privacy-policy" element={
            <PageTransition>
              <PrivacyPolicy />
            </PageTransition>
          } />
          <Route path="/terms-of-service" element={
            <PageTransition>
              <TermsOfService />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;