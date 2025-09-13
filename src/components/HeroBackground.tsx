'use client'

import NextImage from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface HeroBackgroundProps {
  imageSrc?: string
  videoSrc?: string
  alt?: string
  priority?: boolean
}

export default function HeroBackground({ 
  imageSrc = '/images/hero/hero-bg-main.jpg',
  videoSrc,
  alt = 'Beautiful hair extensions',
  priority = true 
}: HeroBackgroundProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Preload image for better performance
    if (imageSrc) {
      const img = new Image()
      img.onload = () => setImageLoaded(true)
      img.onerror = () => setImageError(true)
      img.src = imageSrc
    }
  }, [imageSrc])

  useEffect(() => {
    // Auto play video if available
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log('Video autoplay failed, falling back to image')
      })
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {/* Video Background (if provided) */}
      {videoSrc && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={() => console.log('Video failed to load')}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Image Background */}
      {!videoSrc && imageSrc && !imageError && (
        <NextImage
          src={imageSrc}
          alt={alt || 'Hero background'}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          priority={priority}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}

      {/* Fallback gradient background */}
      {(!imageSrc || imageError) && !videoSrc && (
        <div className="w-full h-full bg-gradient-to-br from-amber-200 via-orange-300 to-red-400 relative">
          {/* Overlay pattern to simulate hair texture */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 2%, transparent 2%), 
                               radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 1%, transparent 1%),
                               radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1%, transparent 1%)`,
              backgroundSize: '50px 50px, 30px 30px, 20px 20px'
            }}></div>
          </div>
        </div>
      )}

      {/* Loading placeholder */}
      {!imageLoaded && !imageError && imageSrc && (
        <div className="w-full h-full bg-gradient-to-br from-warm-200 to-cream-300 animate-pulse"></div>
      )}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Gradient overlay from bottom for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
    </div>
  )
}