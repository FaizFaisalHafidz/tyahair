'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Crown, Leaf, Palette, Shield } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !imageRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Image animation
      gsap.fromTo(imageRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotateY: 15
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Cards stagger animation
      const cards = cardsRef.current?.children
      if (cards) {
        gsap.fromTo(cards,
          {
            opacity: 0,
            y: 80,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: Crown,
      title: "Premium Quality"
    },
    {
      icon: Shield,
      title: "Natural Blend"
    },
    {
      icon: Leaf,
      title: "Long Lasting"
    },
    {
      icon: Palette,
      title: "Perfect Match"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-16 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Desktop Layout: Text left, Image right */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center mb-16">
          
          {/* Left: Title and subtitle */}
          <div ref={titleRef} className="space-y-6">
            <div>
              <h2 className="text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                NATURAL, PREMIUM,
                <br />
                PERFORMANCE
                <br />
                <span className="italic font-serif text-5xl xl:text-6xl">extensions.</span>
              </h2>
              
              {/* Curved arrow like TrueKind */}
              <div className="mt-8">
                <svg width="120" height="80" viewBox="0 0 120 80" className="text-gray-400">
                  <path 
                    d="M10 10 Q60 60, 110 10" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              <p className="text-gray-600 text-lg max-w-md mt-6">
                Premium hair extensions yang natural dan berkualitas tinggi, untuk rambut indah yang terlihat alami – tanpa kompromi!
              </p>
            </div>
          </div>

          {/* Right: Large Image */}
          <div ref={imageRef} className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <div 
                className="relative w-full h-[500px] xl:h-[600px] rounded-[50px] overflow-hidden shadow-2xl"
                style={{ clipPath: 'ellipse(80% 100% at 50% 50%)' }}
              >
                <Image
                  src="/images/gambar-section-ke-2.jpeg"
                  alt="Premium Hair Extensions"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Keep original vertical layout */}
        <div className="lg:hidden">
          <div ref={titleRef} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              NATURAL, PREMIUM,
              <br />
              PERFORMANCE
              <br />
              <span className="italic font-serif">extensions.</span>
            </h2>
            
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              Premium hair extensions yang natural dan berkualitas tinggi, untuk rambut indah yang terlihat alami – tanpa kompromi!
            </p>
          </div>

          {/* Mobile Image */}
          <div ref={imageRef} className="mb-16 flex justify-center">
            <div className="relative w-full max-w-md">
              <div 
                className="relative w-full h-80 md:h-96 rounded-[50px] overflow-hidden shadow-2xl"
                style={{ clipPath: 'ellipse(80% 100% at 50% 50%)' }}
              >
                <Image
                  src="/images/gambar-section-ke-2.jpeg"
                  alt="Premium Hair Extensions"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards - 2x2 grid (both desktop and mobile) */}
        <div ref={cardsRef} className="grid grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50/80 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:bg-gray-100/80 border border-gray-100">
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
                </div>
                
                {/* Title only - no description */}
                <h3 className="font-semibold text-gray-900 text-sm md:text-base lg:text-lg">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}