'use client'

import { gsap, useGSAP } from '@/lib/gsap'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import VideoBackground from './VideoBackground'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useGSAP()

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    // Fade in the background
    tl.fromTo(heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: 'power2.out' }
    )
    // Animate title with stagger effect
    .fromTo('.title-line', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', stagger: 0.2 }
    )
    // Animate subtitle
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.5'
    )
    // Animate CTA
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.3'
    )

  }, [])

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <VideoBackground
        videoSrc="/videos/hero-hair-main.mp4"
        fallbackImage="/images/hero/hero-bg-main.jpg"
        className="h-full"
      >
        {/* Content */}
        <div 
          ref={heroRef}
          className="relative z-10 h-full flex items-center justify-center px-6 lg:px-8"
        >
          <div className="text-center max-w-5xl">
            {/* Main Headline - TrueKind exact style */}
            <h1 className="mb-8 md:mb-12">
              <div className="title-line text-4xl md:text-6xl lg:text-7xl font-display font-light text-white mb-0 leading-[0.9] tracking-tight">
                <span className="font-medium italic">True</span> to <span className="font-light">Length</span>
              </div>
              <div className="title-line text-4xl md:text-6xl lg:text-7xl font-display font-light text-white leading-[0.9] tracking-tight">
                <span className="font-medium">kind</span> to <span className="italic font-light text-amber-100">You</span>
              </div>
            </h1>

            {/* Subtitle - TrueKind exact spacing and size */}
            <p 
              ref={subtitleRef}
              className="text-sm md:text-base lg:text-lg text-white/75 mb-32 md:mb-40 max-w-lg mx-auto leading-relaxed font-light"
            >
              Premium hair extensions yang natural dan berkualitas tinggi,<br className="hidden md:block" />
              untuk rambut indah yang terlihat alami – tanpa kompromi!
            </p>

            {/* CTA Button - exact TrueKind style with animations */}
                      {/* CTA Button */}
          <div className="absolute bottom-8 left-4 right-4 md:relative md:bottom-auto md:left-auto md:right-auto md:mb-40">
            <button 
              onClick={() => scrollToSection('products')}
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white 
                         w-full md:w-auto
                         px-6 md:px-12 py-3 md:py-4 
                         text-sm md:text-base
                         rounded-full font-medium transition-all duration-300 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
            >
              <span className="mr-3 md:mr-4">EXPLORE ALL PRODUCTS</span>
              <div className="bg-black rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
          </div>
        </div>
      </VideoBackground>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-50 to-transparent z-20"></div>
    </section>
  )
}