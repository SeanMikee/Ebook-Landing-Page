import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import TrustElements from './components/TrustElements';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll implementation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-['Poppins'] text-gray-800">
      <Navigation />
      <Hero />
      <Benefits />
      <Testimonials />
      <CTASection />
      <FAQ />
      <TrustElements />
      <Footer />
    </div>
  );
}

export default App;