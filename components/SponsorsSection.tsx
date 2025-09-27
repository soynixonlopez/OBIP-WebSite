'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Instagram } from 'lucide-react'

const SponsorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const sponsors = [
    {
      id: 1,
      name: 'UvaCafe',
      handle: '@uva_cafeelcangrejo',
      instagram: 'https://www.instagram.com/uva_cafeelcangrejo',
      logo: 'https://res.cloudinary.com/dewe5s4xv/image/upload/v1758948314/uvacafe_dskqtr.png',
      category: 'Gastronomía'
    },
    {
      id: 2,
      name: 'Gom Photography',
      handle: '@gom.photography',
      instagram: 'https://www.instagram.com/gom.photography',
      logo: 'https://res.cloudinary.com/dewe5s4xv/image/upload/v1758948314/gom_w8dan2.png',
      category: 'Fotografía'
    },
    {
      id: 3,
      name: 'MAS',
      handle: '@alimentacionsaludablepanama',
      instagram: 'https://www.instagram.com/alimentacionsaludablepanama',
      logo: 'https://res.cloudinary.com/dewe5s4xv/image/upload/v1758948314/alimentacion_rbwqmi.png',
      category: 'Salud & Bienestar'
    },
    {
      id: 4,
      name: 'Itzenith Quintero',
      handle: '@itzenithquintero',
      instagram: 'https://www.instagram.com/itzenithquintero',
      logo: 'https://res.cloudinary.com/dewe5s4xv/image/upload/v1758948313/itzeneth_lkpaz5.png',
      category: 'Belleza & Estilo'
    }
  ]

  return (
    <section id="patrocinadores" ref={ref} className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Nuestros Patrocinadores
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Aliados <span className="text-orange-500">Estratégicos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empresas que comparten nuestra visión de celebrar la belleza indígena 
            y promover la cultura ancestral panameña.
          </p>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group text-center"
            >
              {/* Logo Circle */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Instagram Icon */}
                <motion.a
                  href={sponsor.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>

              {/* Sponsor Info */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{sponsor.name}</h3>
                <p className="text-orange-500 font-medium text-sm mb-2">{sponsor.handle}</p>
                <p className="text-gray-500 text-xs">{sponsor.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500 to-gold-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">¿Quieres ser parte de nuestra familia?</h3>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg">
              Únete a nuestros patrocinadores y apoya la promoción de la belleza indígena 
              y la cultura ancestral panameña.
            </p>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 inline-block"
            >
              Conviértete en Patrocinador
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SponsorsSection
