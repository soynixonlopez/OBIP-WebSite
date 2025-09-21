'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Instagram, Linkedin, Award, Camera, Users, Star, Crown, Zap, Target, Heart } from 'lucide-react'

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const teamMembers = [
    {
      name: 'Anselmo Urrutia',
      role: 'Director',
      shortRole: 'CEO',
      image: '/images/team/anselmo-urrutia.jpg',
      color: 'from-orange-500 to-gold-500',
      specialty: 'Liderazgo & Visión',
      social: {
        instagram: '@anselmo_urrutia',
        linkedin: 'anselmo-urrutia'
      }
    },
    {
      name: 'Yaini Archibold',
      role: 'Logística',
      shortRole: 'LOG',
      image: '/images/team/yaini-archibold.jpg',
      color: 'from-pink-500 to-rose-500',
      specialty: 'Organización & Eventos',
      social: {
        instagram: '@yaini_archibold',
        linkedin: 'yaini-archibold'
      }
    },
    {
      name: 'Matilde Kabu',
      role: 'Protocolos',
      shortRole: 'PRO',
      image: '/images/team/matilde-kabu.jpg',
      color: 'from-green-500 to-emerald-500',
      specialty: 'Protocolo & Ceremonias',
      social: {
        instagram: '@matilde_kabu',
        linkedin: 'matilde-kabu'
      }
    },
    {
      name: 'Keytlin Lopez',
      role: 'Coordinación',
      shortRole: 'COO',
      image: '/images/team/keytlin-lopez.jpg',
      color: 'from-purple-500 to-violet-500',
      specialty: 'Planificación & Operaciones',
      social: {
        instagram: '@keytlin_lopez',
        linkedin: 'keytlin-lopez'
      }
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
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Conoce a los profesionales apasionados que hacen posible nuestra misión 
            de celebrar la belleza ancestral a través del modelaje profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full flex flex-col items-center text-center hover:bg-white/10 transition-all duration-500">
                {/* Profile Image with gradient border */}
                <div className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-3xl p-2 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-2xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback icon if image fails to load */}
                    <div className="w-full h-full flex items-center justify-center hidden">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>

                {/* Short Role Badge */}
                <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                  <span className="text-xs font-bold text-orange-400 tracking-wider">{member.shortRole}</span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-3">{member.name}</h3>

                {/* Role */}
                <p className="text-orange-400 font-semibold text-base mb-3">{member.role}</p>

                {/* Specialty */}
                <p className="text-white/70 text-sm mb-6 leading-relaxed">{member.specialty}</p>

                {/* Social Links */}
                <div className="flex space-x-4 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    href={`https://instagram.com/${member.social.instagram.replace('@', '')}`}
                    className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    href={`https://linkedin.com/in/${member.social.linkedin}`}
                    className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${member.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className={`absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br ${member.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
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
