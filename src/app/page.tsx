'use client';

import ContactSection from '@/components/ContactSection';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import ProductShowcase from '@/components/ProductShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Delay sedikit sebelum menampilkan content untuk smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 200);
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {/* Main Content */}
      <main className={`min-h-screen transition-opacity duration-500 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}>
        <Navbar />
        <HeroSection />
        <FeatureSection />
        <ProductShowcase />
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
