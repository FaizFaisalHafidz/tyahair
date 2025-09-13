'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedHeroImageProps {
  src: string
  alt: string
  fallbackSrc?: string
  priority?: boolean
}

export default function OptimizedHeroImage({ 
  src, 
  alt, 
  fallbackSrc = '/images/hero/hero-bg-alt.jpg',
  priority = true 
}: OptimizedHeroImageProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className="absolute inset-0">
      {/* Loading placeholder */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-warm-200 to-cream-300 animate-pulse" />
      )}

      {!imageError ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="100vw"
          quality={85}
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      ) : (
        // Try fallback image first before gradient
        !imageError && fallbackSrc ? (
          <Image
            src={fallbackSrc}
            alt={alt}
            fill
            priority={false}
            className="object-cover"
            sizes="100vw"
            quality={85}
            onError={() => setImageError(true)}
            onLoad={handleImageLoad}
          />
        ) : (
        // Fallback to gradient background
        <div className="w-full h-full bg-gradient-to-br from-amber-200 via-orange-300 to-red-400 relative">
          {/* Hair texture simulation */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 2%, transparent 2%), 
                               radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 1%, transparent 1%),
                               radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1%, transparent 1%)`,
              backgroundSize: '50px 50px, 30px 30px, 20px 20px'
            }}></div>
          </div>
          
          {/* Subtle text overlay for demo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/60">
              <p className="text-sm mb-2">Hero Background Image</p>
              <p className="text-xs">Place your image in /public/images/hero/hero-bg-main.jpg</p>
            </div>
          </div>
        </div>
        )
      )}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
    </div>
  )
}