'use client';

import { gsap } from 'gsap';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          setIsLoading(false);
          onLoadingComplete();
        }, 200);
      }
    });

    // Set initial states
    gsap.set('.text-left', { y: -150, opacity: 0 });
    gsap.set('.text-right', { y: 150, opacity: 0 });
    gsap.set('.loading-line', { height: 0 });
    gsap.set('.loading-container', { y: 0 });

    // Animation sequence seperti TrueKind
    timeline
      // Line muncul dari atas ke bawah (full height)
      .to('.loading-line', {
        height: '100px',
        duration: 1.2,
        ease: "power2.out"
      })
      // Text kiri muncul dari atas
      .to('.text-left', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5")
      // Text kanan muncul dari bawah
      .to('.text-right', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.7")
      // Hold sejenak
      .to({}, { duration: 1.5 })
      // Seluruh loading ditarik ke atas
      .to('.loading-container', {
        y: '-100vh',
        duration: 1.2,
        ease: "power3.inOut"
      });

    return () => {
      timeline.kill();
    };
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="loading-container fixed inset-0 z-50 flex items-center justify-center bg-cream-50">
      {/* Main Text Container */}
      <div className="relative flex items-center justify-center">
        {/* Left Text - "Tya" */}
        <div className="text-left text-6xl md:text-8xl font-serif text-sage-600">
          Tya
        </div>

        {/* Center Line */}
        <div className="loading-line w-px bg-sage-400 mx-4" />

        {/* Right Text - "Hair.co" */}
        <div className="text-right text-6xl md:text-8xl font-serif text-sage-600">
          Hair.co
        </div>
      </div>
    </div>
  );
}