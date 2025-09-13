'use client'

import { fadeInUp, staggerAnimation } from '@/lib/gsap'
import { Heart, Instagram, Quote, Star } from 'lucide-react'
import { useEffect, useRef } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Wijaya',
    location: 'Jakarta',
    rating: 5,
    comment: 'Hair extension dari TyaHair benar-benar berkualitas premium! Warnanya natural banget dan gampang banget dipasangnya. Sudah pakai 6 bulan masih bagus seperti baru.',
    image: '/images/testimonial-1.jpg',
    instagram: '@sarahwijaya'
  },
  {
    id: 2,
    name: 'Maya Sari',
    location: 'Surabaya',
    rating: 5,
    comment: 'Pertama kali beli hair extension langsung jatuh cinta! Teksturnya halus, warnanya sesuai dengan yang di foto, dan pelayanannya sangat ramah. Recommended banget!',
    image: '/images/testimonial-2.jpg',
    instagram: '@mayasari_'
  },
  {
    id: 3,
    name: 'Dinda Putri',
    location: 'Bandung',
    rating: 5,
    comment: 'Selama ini susah banget cari hair extension yang natural. Setelah coba TyaHair, akhirnya ketemu yang cocok! Banyak yang tanya rambut asli apa extension hehe.',
    image: '/images/testimonial-3.jpg',
    instagram: '@dindaputri'
  },
  {
    id: 4,
    name: 'Rika Melani',
    location: 'Medan',
    rating: 5,
    comment: 'Kualitas rambut extension TyaHair no joke! Sudah dicuci berkali-kali tetap bagus dan tidak kusut. Worth it banget dengan harganya!',
    image: '/images/testimonial-4.jpg',
    instagram: '@rikamelani'
  }
]

const socialProof = [
  { label: 'Pelanggan Puas', value: '1000+', icon: Heart },
  { label: 'Rating Bintang 5', value: '4.9/5', icon: Star },
  { label: 'Testimoni Positif', value: '500+', icon: Quote },
  { label: 'Followers Instagram', value: '10K+', icon: Instagram }
]

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fadeInUp('.testimonials-title')
    staggerAnimation('.testimonial-card', 0.2)
    staggerAnimation('.social-proof-item', 0.1)
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="testimonials-title text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Kata Mereka Tentang TyaHair
          </h2>
          <p className="testimonials-title text-lg text-gray-600 max-w-3xl mx-auto">
            Ribuan pelanggan telah mempercayai TyaHair untuk mendapatkan hair extension berkualitas premium
          </p>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {socialProof.map((item, index) => (
            <div key={index} className="social-proof-item text-center">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">{item.value}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-primary-300" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                  "{testimonial.comment}"
                </p>

                {/* Profile */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mr-3">
                    <Heart className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                    <p className="text-primary-600 text-xs">{testimonial.instagram}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <Instagram className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Lihat Lebih Banyak Testimoni di Instagram
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Follow @tyahair untuk melihat hasil transformasi hair extension dari pelanggan kami
          </p>
          <a 
            href="https://www.instagram.com/tyahairrr_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow @tyahair
          </a>
        </div>
      </div>
    </section>
  )
}