'use client'

import { useEffect, useRef, useState } from 'react'

interface VideoBackgroundProps {
  videoSrc: string
  fallbackImage?: string
  className?: string
  children?: React.ReactNode
}

export default function VideoBackground({ 
  videoSrc, 
  fallbackImage = '/images/hero/hero-bg-main.jpg',
  className = '',
  children 
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
      // Ensure video plays
      video.play().catch(console.error)
    }

    const handleError = () => {
      setHasError(true)
      setIsLoaded(false)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)

    // Preload the video
    video.load()

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
    }
  }, [videoSrc])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      {!hasError && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ filter: 'brightness(0.85) saturate(1.1)' }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback Image */}
      {(!isLoaded || hasError) && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('${fallbackImage}')`,
            filter: 'brightness(0.85) saturate(1.1)'
          }}
        />
      )}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30" />
      
      {/* Warm tint overlay to match TrueKind aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-orange-900/20" />

      {/* Content */}
      {children}
    </div>
  )
}