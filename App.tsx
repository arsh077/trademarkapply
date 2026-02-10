import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { ExperienceHero } from './components/ui/experience-hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import WhyChooseUs from './components/WhyChooseUs';
import ConsultationForm from './components/ConsultationForm';
import AboutExpert from './components/AboutExpert';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicePage from './components/ServicePage';
import TrademarkRegistrationPage from './components/TrademarkRegistrationPage';
import LogoDesignPage from './components/LogoDesignPage';
import LegalConsultationPage from './components/LegalConsultationPage';
import OppositionHandlingPage from './components/OppositionHandlingPage';
import RenewalServicesPage from './components/RenewalServicesPage';
import CopyrightRegistrationPage from './components/CopyrightRegistrationPage';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import GetQuotePage from './components/GetQuotePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import ThankYouPage from './components/ThankYouPage';
import { GlassFilter } from './components/ui/liquid-glass';
import Lenis from 'lenis';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleAdminLogin = (username: string, password: string) => {
    setIsAdminLoggedIn(true);
    sessionStorage.setItem('adminLoggedIn', 'true');
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    sessionStorage.removeItem('adminLoggedIn');
    navigateTo('home');
  };

  useEffect(() => {
    // Check if admin is already logged in
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
      setIsAdminLoggedIn(true);
    }
  }, []);

  // Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Global scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  return (
    <div className="font-sans text-white antialiased bg-[#020202] transition-colors duration-300 selection:bg-secondary selection:text-black">
      <GlassFilter />
      
      {/* Admin Pages */}
      {currentPage === 'admin' && !isAdminLoggedIn && (
        <AdminLogin onLogin={handleAdminLogin} />
      )}
      
      {currentPage === 'admin' && isAdminLoggedIn && (
        <AdminDashboard onLogout={handleAdminLogout} />
      )}
      
      {/* Regular Pages */}
      {currentPage !== 'admin' && currentPage !== 'thank-you' && (
        <>
          <Header onNavigate={navigateTo} currentPage={currentPage} />
          <main className="relative w-full overflow-x-hidden">
            {currentPage === 'home' && (
              <div className="animate-fade-in">
                <ExperienceHero onNavigate={navigateTo} />
                <div className="reveal"><Services onNavigate={navigateTo} /></div>
                <div className="reveal"><Reviews /></div>
                <div className="reveal"><WhyChooseUs /></div>
                <div id="consultation-form" className="reveal">
                  <ConsultationForm onNavigate={navigateTo} />
                </div>
                <div className="reveal"><AboutExpert /></div>
                <div className="reveal"><Contact /></div>
              </div>
            )}
            {currentPage === 'services' && (
              <ServicePage onNavigate={navigateTo} />
            )}
            {currentPage === 'trademark-registration' && (
              <TrademarkRegistrationPage onNavigate={navigateTo} />
            )}
            {currentPage === 'logo-design' && (
              <LogoDesignPage onNavigate={navigateTo} />
            )}
            {currentPage === 'legal-consultation' && (
              <LegalConsultationPage onNavigate={navigateTo} />
            )}
            {currentPage === 'opposition-handling' && (
              <OppositionHandlingPage onNavigate={navigateTo} />
            )}
            {currentPage === 'renewal-services' && (
              <RenewalServicesPage onNavigate={navigateTo} />
            )}
            {currentPage === 'copyright-registration' && (
              <CopyrightRegistrationPage onNavigate={navigateTo} />
            )}
            {currentPage === 'about-us' && (
              <AboutUsPage onNavigate={navigateTo} />
            )}
            {currentPage === 'contact' && (
              <ContactPage onNavigate={navigateTo} />
            )}
            {currentPage === 'get-quote' && (
              <GetQuotePage onNavigate={navigateTo} />
            )}
            {currentPage === 'privacy-policy' && (
              <PrivacyPolicyPage onNavigate={navigateTo} />
            )}
            {currentPage === 'terms-of-service' && (
              <TermsOfServicePage onNavigate={navigateTo} />
            )}
          </main>
          <Footer onNavigate={navigateTo} />
        </>
      )}
      
      {/* Thank You Page - Full Screen without Header/Footer */}
      {currentPage === 'thank-you' && (
        <ThankYouPage onNavigate={navigateTo} />
      )}
    </div>
  );
}

export default App;
