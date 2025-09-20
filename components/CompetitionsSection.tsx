'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Award, Calendar, MapPin, Users, Star } from 'lucide-react'

const CompetitionsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const competitions = [
    {
      id: 1,
      title: 'Desfile Internacional de Diversidad Cultural',
      date: '15 de Marzo, 2024',
      location: 'Lima, Perú',
      status: 'próximo',
      description: 'El evento más importante del año donde nuestros estudiantes compiten con modelos de todo el mundo.',
      achievements: ['1er Lugar - Sofía Mamani', '2do Lugar - Diego Quispe', 'Mejor Pasarela Cultural'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Concurso Nacional de Modelaje Indígena',
      date: '20 de Enero, 2024',
      location: 'Cusco, Perú',
      status: 'completado',
      description: 'Competencia nacional que celebra la belleza y diversidad de los pueblos indígenas.',
      achievements: ['1er Lugar - Elena Condori', '2do Lugar - Miguel Huanca', 'Premio Especial a la Tradición'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Festival de Moda Ancestral',
      date: '10 de Diciembre, 2023',
      location: 'Arequipa, Perú',
      status: 'completado',
      description: 'Evento que combina moda contemporánea con elementos tradicionales indígenas.',
      achievements: ['Mejor Diseño Cultural', 'Modelo Revelación - Carmen Flores', 'Premio del Público'],
      image: '/api/placeholder/600/400'
    }
  ]

  const achievements = [
    {
      icon: Trophy,
      title: 'Premios Internacionales',
      count: '25+',
      description: 'Reconocimientos en competencias de modelaje a nivel mundial'
    },
    {
      icon: Users,
      title: 'Estudiantes Premiados',
      count: '80+',
      description: 'Nuestros estudiantes han ganado premios en diversas competencias'
    },
    {
      icon: Star,
      title: 'Calificación Promedio',
      count: '9.2/10',
      description: 'Evaluación promedio de nuestros estudiantes en competencias'
    },
    {
      icon: Award,
      title: 'Reconocimientos Culturales',
      count: '15+',
      description: 'Premios especiales por promover la diversidad cultural'
    }
  ]

  return (
    <section id="competencias" ref={ref} className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Competencias y <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-gold-400 bg-clip-text text-transparent">Logros</span>
          </h2>
          <p className="text-xl text-orange-200 max-w-3xl mx-auto leading-relaxed">
            Nuestros estudiantes participan en las competencias más prestigiosas 
            del modelaje, llevando consigo el orgullo de su herencia cultural.
          </p>
        </motion.div>

        {/* Achievements Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-gold-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">{achievement.count}</div>
              <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
              <p className="text-orange-200 text-sm leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Competitions Timeline */}
        <div className="space-y-12">
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Competition Image */}
              <div className="lg:w-1/2">
                <div className="aspect-[3/2] bg-gradient-to-br from-primary-100 to-gold-100 rounded-2xl shadow-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-200 to-gold-200 flex items-center justify-center">
                    <Trophy className="w-24 h-24 text-primary-500" />
                  </div>
                </div>
              </div>

              {/* Competition Info */}
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    competition.status === 'próximo' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-orange-500/20 text-orange-200'
                  }`}>
                    {competition.status === 'próximo' ? 'Próximo' : 'Completado'}
                  </span>
                  <div className="flex items-center space-x-1 text-orange-300">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{competition.date}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{competition.title}</h3>
                <p className="text-orange-200 mb-4 leading-relaxed">{competition.description}</p>

                <div className="flex items-center space-x-1 text-orange-300 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{competition.location}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Logros Obtenidos:</h4>
                  {competition.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span className="text-sm text-orange-200">{achievement}</span>
                    </div>
                  ))}
                </div>

                {competition.status === 'próximo' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 btn-primary"
                  >
                    Inscribirse
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-500 to-gold-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para Competir?
            </h3>
            <p className="text-xl mb-6 max-w-2xl mx-auto opacity-90">
              Únete a nuestra academia y prepárate para participar en las competencias 
              más prestigiosas del modelaje, representando con orgullo tu herencia cultural.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Comenzar Ahora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CompetitionsSection
