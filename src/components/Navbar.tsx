'use client'

import { Menu, MessageCircle, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const menuItems = [
    { name: 'Beranda', href: '#', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'Produk', href: '#products', action: () => scrollToSection('products') },
    { name: 'Testimoni', href: '#testimonials', action: () => scrollToSection('testimonials') },
    { name: 'Kontak', href: '#contact', action: () => scrollToSection('contact') },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative h-12 w-auto">
              <Image
                src="/images/logo-tya.png"
                alt="TyaHair Logo"
                height={48}
                width={120}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className={`font-medium transition-all duration-300 hover:opacity-75 ${
                  isScrolled ? 'text-warm-700' : 'text-white'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://wa.me/62XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center transition-all duration-300 hover:opacity-75 ${
                isScrolled ? 'text-green-600' : 'text-white'
              }`}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">WhatsApp</span>
            </a>
            
            {/* Shopping bag icon like TrueKind */}
            <div className="flex items-center space-x-2">
              <button className={`p-2 transition-all duration-300 hover:opacity-75 ${
                isScrolled ? 'text-warm-700' : 'text-white'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                </svg>
              </button>
              <button className={`p-2 transition-all duration-300 hover:opacity-75 ${
                isScrolled ? 'text-warm-700' : 'text-white'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-warm-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <a
                  href="https://wa.me/62XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 mb-2"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat WhatsApp
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}