'use client'

import { motion } from 'framer-motion'
import { Users, Mail, Phone, MapPin, Facebook, Instagram, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    academy: [
      { name: 'Sobre Nosotros', href: '#academia' },
      { name: 'Nuestro Equipo', href: '#equipo' },
      { name: 'Programas', href: '#programas' },
      { name: 'Metodología', href: '#metodologia' }
    ],
    students: [
      { name: 'Galería', href: '#estudiantes' },
      { name: 'Competencias', href: '#competencias' },
      { name: 'Testimonios', href: '#testimonios' },
      { name: 'Logros', href: '#logros' }
    ],
    support: [
      { name: 'Contacto', href: '#contacto' },
      { name: 'Preguntas Frecuentes', href: '#faq' },
      { name: 'Inscripciones', href: '#inscripciones' },
      { name: 'Soporte', href: '#soporte' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/bellezasindigenaspanama', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/bellezasindigenaspanama', label: 'Instagram' },
    { icon: 'tiktok', href: 'https://www.tiktok.com/@bellezasindigenaspanama', label: 'TikTok' }
  ]

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      <div className="container-custom section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-gold-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Academia Indígena</span>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              Celebrando la belleza ancestral a través del modelaje profesional, 
              promoviendo la diversidad cultural y el orgullo por nuestras raíces.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon === 'tiktok' ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  ) : (
                    <social.icon className="w-5 h-5" />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Academy Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Academia</h3>
            <ul className="space-y-3">
              {footerLinks.academy.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-white hover:text-orange-300 transition-colors duration-300"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Students Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Estudiantes</h3>
            <ul className="space-y-3">
              {footerLinks.students.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-white hover:text-orange-300 transition-colors duration-300"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-white">66197170</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-white">bellezasindigenas@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-white">
                  Panamá City<br />
                  Panamá
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 text-orange-400">Mantente Informado</h3>
            <p className="text-white mb-6">
              Suscríbete a nuestro boletín y recibe las últimas noticias sobre competencias, 
              eventos y logros de nuestros estudiantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                Suscribirse
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-white">
              <span>© {currentYear} Bellezas Indígenas de Panamá |</span>
              <span>Todos los derechos reservados.</span>
            </div>
            <div className="flex items-center space-x-1 text-white">
              <span>Sitio Web desarrollado por</span>
              <a href="http://nixonlopez.com"><span className='text-orange-400'>NixonDev</span></a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
