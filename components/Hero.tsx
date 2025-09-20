'use client'

import { motion } from 'framer-motion'
import { Sparkles, Crown, Heart } from 'lucide-react'

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-green-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block text-4xl md:text-5xl lg:text-6xl text-orange-200 font-light mb-2">Academia de</span>
            <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-gold-400 bg-clip-text text-transparent">
              Modelaje
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl text-orange-200 font-light">
              Indígena
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-orange-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Formamos modelos profesionales que celebran y exponen la belleza 
            de nuestra cultura indígena con elegancia y autenticidad.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/inscripcion"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform shadow-2xl hover:shadow-orange-500/25 text-base inline-flex items-center space-x-3"
            >
              <span>Inscríbete Ahora</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-4 h-4"
              >
                →
              </motion.div>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 backdrop-blur-sm text-base"
            >
              Ver Nuestros Modelos
            </motion.button>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero
