'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const useGSAP = () => {
  useEffect(() => {
    // Initialize GSAP settings
    gsap.config({
      nullTargetWarn: false,
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}

export const fadeInUp = (element: string | Element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export const fadeInLeft = (element: string | Element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      x: -60,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export const staggerAnimation = (elements: string, delay = 0.2) => {
  return gsap.fromTo(
    elements,
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elements,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

export { gsap, ScrollTrigger }
