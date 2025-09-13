'use client'

import { fadeInUp, staggerAnimation } from '@/lib/gsap'
import { Check, Heart, Palette, Scissors, Star } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const products = [
  {
    id: 1,
    name: 'Straight Hair Extension',
    description: 'Rambut lurus natural dengan kualitas premium',
    features: ['100% Virgin Hair', 'Tahan Lama', 'Natural Look'],
    colors: ['#2C1810', '#4A2C17', '#8B4513', '#CD853F', '#F4A460'],
    price: 'Mulai dari Rp 150.000',
    image: '/images/foto-rambut-1.png'
  },
  {
    id: 2,
    name: 'Wavy Hair Extension',
    description: 'Rambut bergelombang untuk tampilan glamour',
    features: ['Volume Maksimal', 'Easy Styling', 'Soft Texture'],
    colors: ['#1C1C1C', '#654321', '#8B4513', '#DEB887', '#F5DEB3'],
    price: 'Mulai dari Rp 175.000',
    image: '/images/foto-rambut-2.png'
  },
  {
    id: 3,
    name: 'Curly Hair Extension',
    description: 'Rambut keriting untuk penampilan bold dan percaya diri',
    features: ['Defined Curls', 'Bounce Effect', 'Long Lasting'],
    colors: ['#000000', '#3C2414', '#8B4513', '#D2691E', '#FAEBD7'],
    price: 'Mulai dari Rp 200.000',
    image: '/images/foto-rambut-3.png'
  }
]

const benefits = [
  {
    icon: Star,
    title: 'Kualitas Premium',
    description: '100% rambut asli berkualitas tinggi yang tahan lama dan natural'
  },
  {
    icon: Palette,
    title: '50+ Pilihan Warna',
    description: 'Berbagai pilihan warna dari natural hingga fashion colors'
  },
  {
    icon: Scissors,
    title: 'Mudah Dipasang',
    description: 'Sistem klip yang aman dan mudah untuk dipasang sendiri'
  },
  {
    icon: Heart,
    title: 'Hasil Natural',
    description: 'Tekstur dan warna yang menyatu sempurna dengan rambut asli'
  }
]

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fadeInUp('.product-title')
    staggerAnimation('.product-card', 0.2)
    staggerAnimation('.benefit-card', 0.15)
  }, [])

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="product-title text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Koleksi Premium Kami
          </h2>
          <p className="product-title text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan hair extension berkualitas tinggi dengan berbagai pilihan tekstur dan warna 
            yang akan membuat penampilan Anda semakin memukau
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                {/* Product Image */}
                <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Color Options */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Pilihan Warna:</p>
                    <div className="flex space-x-2">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full border-2 border-gray-300 shadow-sm"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center">
                        <span className="text-xs text-gray-500">+</span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary-600">{product.price}</span>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Mengapa Memilih TyaHair?
            </h3>
            <p className="text-lg text-gray-600">
              Komitmen kami untuk memberikan yang terbaik bagi Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card text-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}