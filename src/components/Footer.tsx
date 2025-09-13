'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* EXPLORE Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">EXPLORE</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg"
                >
                  Shop
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg"
                >
                  Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg"
                >
                  Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg"
                >
                  Sign Up/Login
                </button>
              </li>
            </ul>
          </div>

          {/* FOLLOW US Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">FOLLOW US</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.instagram.com/tyahairrr_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/tyahair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT US Section */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">CONTACT US</h3>
            <div className="space-y-4">
              <p className="text-gray-600 text-lg">hello@tyahair.com</p>
              <p className="text-gray-600 text-lg">+62 XXX-XXXX-XXXX</p>
            </div>
          </div>
        </div>

        {/* Brand Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">TyaHair</h2>
              <p className="text-gray-600 text-lg max-w-md">
                Natural, Premium, Hair Extensions!<br />
                Beautiful hair that truly works
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm text-gray-500">
            <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
              <p>© {currentYear} TyaHair, All Rights Reserved</p>
              <a href="#" className="hover:text-gray-700 transition-colors">Disclaimer</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Credits</a>
            </div>
            <div className="flex items-center gap-2">
              <span>Website By:</span>
              <a 
                href="#" 
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Faiz Faisal Hafidz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}