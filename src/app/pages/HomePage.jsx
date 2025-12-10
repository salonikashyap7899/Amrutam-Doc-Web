import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import WhyChooseUs from '../components/WhyChooseUs';
import JoinCircle from '../components/JoinCircle';
import AppPromotion from '../components/AppPromotion';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
        <WhyChooseUs />
        <JoinCircle />
        <AppPromotion />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;