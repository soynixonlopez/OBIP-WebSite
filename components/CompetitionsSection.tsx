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
      title: 'Baluwala, Historias Indígenas Panameñas',
      date: 'Viernes 26 de Septiembre',
      location: 'Teatro Balboa, 7:00 p.m.',
      status: 'próximo',
      description: 'Evento cultural que incluye teatro, modelaje, danza ancestral, poesía y canto tradicional.',
      achievements: ['Teatro', 'Modelaje', 'Danza Ancestral', 'Poesía', 'Canto'],
      image: 'https://res.cloudinary.com/dewe5s4xv/image/upload/v1758513501/baluwala.jpg'
    },
    {
      id: 2,
      title: '2da Festival de Arte Guna',
      date: '19 de Septiembre',
      location: 'Universidad de Panamá',
      status: 'completado',
      description: 'Participación en el festival organizado por diferentes organizaciones como AEKI, OCLAE y otras.',
      achievements: ['Participación Cultural', 'Representación Indígena', 'Arte Tradicional'],
      image: 'https://res.cloudinary.com/dewe5s4xv/image/upload/v1758512423/evento2.jpg'
    },
    {
      id: 3,
      title: 'La Gala Folklórica Etnias de Panamá',
      date: '31 de Agosto',
      location: 'Teatro Balboa',
      status: 'completado',
      description: 'Gala que celebra la diversidad étnica y cultural de Panamá con representación artística.',
      achievements: ['Representación Cultural', 'Modelaje Tradicional', 'Folklore Panameño'],
      image: 'https://res.cloudinary.com/dewe5s4xv/image/upload/v1758512423/evento%203.jpg'
    }
  ]

  const achievements = [
    {
      icon: Trophy,
      title: 'Premios',
      count: '5',
      description: 'Reconocimientos obtenidos en competencias de modelaje'
    },
    {
      icon: Users,
      title: 'Estudiantes',
      count: '15',
      description: 'Modelos profesionales formados en nuestra academia'
    },
    {
      icon: Star,
      title: 'Calificación Promedio',
      count: '9.8/10',
      description: 'Excelencia académica y profesional de nuestros estudiantes'
    },
    {
      icon: Award,
      title: 'Eventos Participados',
      count: '30',
      description: 'Competencias y desfiles en los que hemos participado'
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
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
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
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-white/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-400 mb-2">{achievement.count}</div>
              <h4 className="text-lg font-semibold text-orange-400 mb-2">{achievement.title}</h4>
              <p className="text-white text-sm leading-relaxed">{achievement.description}</p>
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
                <div className="aspect-[3/2] bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/20">
                  <img 
                    src={competition.image}
                    alt={competition.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Competition Info */}
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    competition.status === 'próximo' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-white/20 text-white'
                  }`}>
                    {competition.status === 'próximo' ? 'Próximo' : 'Completado'}
                  </span>
                  <div className="flex items-center space-x-1 text-white">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{competition.date}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-orange-400 mb-4">{competition.title}</h3>
                <p className="text-white mb-4 leading-relaxed">{competition.description}</p>

                <div className="flex items-center space-x-1 text-white mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{competition.location}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-orange-400">Participaciones con:</h4>
                  {competition.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span className="text-sm text-white">{achievement}</span>
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
