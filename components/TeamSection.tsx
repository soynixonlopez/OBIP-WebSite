'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Instagram, Linkedin, Award, Camera, Users, Star } from 'lucide-react'

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const teamMembers = [
    {
      name: 'María Elena Quispe',
      role: 'Directora General',
      description: 'Experta en modelaje con más de 15 años de experiencia y defensora de la cultura indígena.',
      image: '/api/placeholder/300/400',
      social: {
        instagram: '@maria_quispe',
        linkedin: 'maria-quispe'
      },
      achievements: ['Ex-Modelo Internacional', 'Fundadora de la Academia', 'Premio a la Diversidad Cultural 2023']
    },
    {
      name: 'Carlos Mamani',
      role: 'Instructor de Pasarela',
      description: 'Especialista en técnicas de pasarela y expresión corporal con enfoque cultural.',
      image: '/api/placeholder/300/400',
      social: {
        instagram: '@carlos_mamani',
        linkedin: 'carlos-mamani'
      },
      achievements: ['Instructor Certificado', '15+ años experiencia', 'Especialista en Expresión Cultural']
    },
    {
      name: 'Ana Condori',
      role: 'Coordinadora de Fotografía',
      description: 'Fotógrafa profesional especializada en retratos que celebran la diversidad cultural.',
      image: '/api/placeholder/300/400',
      social: {
        instagram: '@ana_condori_photo',
        linkedin: 'ana-condori'
      },
      achievements: ['Fotógrafa Profesional', 'Premio Nacional de Fotografía', 'Especialista en Retratos Culturales']
    },
    {
      name: 'Roberto Huanca',
      role: 'Asesor Cultural',
      description: 'Antropólogo y consultor cultural, asegura el respeto por las tradiciones ancestrales.',
      image: '/api/placeholder/300/400',
      social: {
        instagram: '@roberto_huanca',
        linkedin: 'roberto-huanca'
      },
      achievements: ['Antropólogo Cultural', 'Consultor UNESCO', 'Especialista en Tradiciones Indígenas']
    }
  ]

  return (
    <section id="equipo" ref={ref} className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestro <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-gold-400 bg-clip-text text-transparent">Equipo</span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto leading-relaxed">
            Conoce a los profesionales apasionados que hacen posible nuestra misión 
            de celebrar la belleza ancestral a través del modelaje profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 card-hover"
            >
              {/* Profile Image */}
              <div className="relative h-80 bg-gradient-to-br from-orange-500/20 to-pink-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10 flex items-center justify-center">
                  <Users className="w-24 h-24 text-orange-400" />
                </div>
                {/* Role badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-orange-600">{member.role}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-orange-200 mb-4 leading-relaxed">{member.description}</p>

                {/* Achievements */}
                <div className="space-y-2 mb-4">
                  {member.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span className="text-sm text-orange-200">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={`https://instagram.com/${member.social.instagram.replace('@', '')}`}
                    className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={`https://linkedin.com/in/${member.social.linkedin}`}
                    className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres formar parte de nuestro equipo?
            </h3>
            <p className="text-orange-200 mb-6 max-w-2xl mx-auto">
              Estamos siempre buscando profesionales apasionados por la cultura 
              indígena y el modelaje. Únete a nuestra misión de celebrar la diversidad.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Ver Oportunidades
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
