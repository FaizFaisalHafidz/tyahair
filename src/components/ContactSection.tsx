'use client'

import { fadeInUp, staggerAnimation } from '@/lib/gsap'
import { Clock, Instagram, MessageCircle, Phone, Send } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    productType: ''
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fadeInUp('.contact-title')
    staggerAnimation('.contact-card', 0.2)
    fadeInUp('.contact-form')
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `Halo TyaHair! 

Nama: ${formData.name}
No. HP: ${formData.phone}
Produk yang diminati: ${formData.productType}

Pesan: ${formData.message}

Saya tertarik untuk mengetahui lebih lanjut tentang hair extension TyaHair.`

    const whatsappURL = `https://wa.me/62XXXXXXXXX?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')

    // Reset form
    setFormData({
      name: '',
      phone: '',
      message: '',
      productType: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat langsung dengan kami',
      value: '+62 XXX-XXXX-XXXX',
      action: () => window.open('https://wa.me/62XXXXXXXXX', '_blank')
    },
    {
      icon: Phone,
      title: 'Telepon',
      description: 'Hubungi kami langsung',
      value: '+62 XXX-XXXX-XXXX',
      action: () => window.open('tel:+62XXXXXXXXX')
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow untuk update terbaru',
      value: '@tyahairrr_',
      action: () => window.open('https://www.instagram.com/tyahairrr_/', '_blank')
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      description: 'Senin - Minggu',
      value: '08:00 - 20:00 WIB',
      action: () => {}
    }
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="contact-title text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Hubungi Kami
          </h2>
          <p className="contact-title text-lg text-gray-600 max-w-3xl mx-auto">
            Siap membantu Anda mendapatkan hair extension impian. Konsultasi gratis untuk pemilihan produk yang tepat!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informasi Kontak</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="contact-card flex items-start p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                  onClick={info.action}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">{info.description}</p>
                    <p className="text-primary-600 font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick WhatsApp Button */}
            <div className="bg-gradient-to-r from-warm-600 to-warm-700 rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <MessageCircle className="w-8 h-8 mr-3" />
                <h4 className="text-xl font-bold">Chat WhatsApp Sekarang</h4>
              </div>
              <p className="text-warm-100 mb-4">
                Dapatkan konsultasi gratis dan respon cepat dari tim kami
              </p>
              <button 
                onClick={() => window.open('https://wa.me/62XXXXXXXXX', '_blank')}
                className="bg-white text-warm-700 hover:bg-cream-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Mulai Chat
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Contoh: 081234567890"
                  />
                </div>

                <div>
                  <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-2">
                    Produk yang Diminati
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Pilih produk</option>
                    <option value="Straight Hair Extension">Straight Hair Extension</option>
                    <option value="Wavy Hair Extension">Wavy Hair Extension</option>
                    <option value="Curly Hair Extension">Curly Hair Extension</option>
                    <option value="Konsultasi Warna">Konsultasi Warna</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Ceritakan kebutuhan hair extension Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim via WhatsApp
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-4 text-center">
                Dengan mengirim pesan, Anda akan diarahkan ke WhatsApp untuk melanjutkan percakapan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}