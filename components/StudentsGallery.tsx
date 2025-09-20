'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Camera, Star, Award, Users } from 'lucide-react'
import { useState } from 'react'

const StudentsGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedCategory, setSelectedCategory] = useState('todos')

  const categories = [
    { id: 'todos', name: 'Todos', icon: Users },
    { id: 'pasarela', name: 'Pasarela', icon: Camera },
    { id: 'fotografia', name: 'Fotografía', icon: Star },
    { id: 'premios', name: 'Premios', icon: Award }
  ]

  const students = [
    {
      id: 1,
      name: 'Sofia Mamani',
      category: 'pasarela',
      image: '/api/placeholder/400/500',
      achievement: 'Ganadora Desfile Internacional 2023',
      description: 'Estudiante destacada en técnicas de pasarela con enfoque cultural.'
    },
    {
      id: 2,
      name: 'Diego Quispe',
      category: 'fotografia',
      image: '/api/placeholder/400/500',
      achievement: 'Portada Revista Cultural',
      description: 'Especialista en fotografía de moda con identidad indígena.'
    },
    {
      id: 3,
      name: 'Elena Condori',
      category: 'premios',
      image: '/api/placeholder/400/500',
      achievement: 'Premio a la Diversidad Cultural',
      description: 'Modelo reconocida por promover la belleza ancestral.'
    },
    {
      id: 4,
      name: 'Miguel Huanca',
      category: 'pasarela',
      image: '/api/placeholder/400/500',
      achievement: 'Desfile de Alta Costura',
      description: 'Especialista en modelaje masculino con raíces culturales.'
    },
    {
      id: 5,
      name: 'Carmen Flores',
      category: 'fotografia',
      image: '/api/placeholder/400/500',
      achievement: 'Campaña Nacional de Moda',
      description: 'Fotógrafa especializada en retratos culturales.'
    },
    {
      id: 6,
      name: 'Roberto Mamani',
      category: 'premios',
      image: '/api/placeholder/400/500',
      achievement: 'Modelo del Año 2023',
      description: 'Reconocido por su trabajo en diversidad cultural.'
    }
  ]

  const filteredStudents = selectedCategory === 'todos' 
    ? students 
    : students.filter(student => student.category === selectedCategory)

  return (
    <section id="estudiantes" ref={ref} className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-gradient">Estudiantes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conoce a los talentosos estudiantes que están transformando la industria 
            del modelaje con su belleza ancestral y profesionalismo.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-md'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Students Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredStudents.map((student, index) => (
            <motion.div
              key={student.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 card-hover"
            >
              {/* Student Image */}
              <div className="relative h-80 bg-gradient-to-br from-primary-100 to-gold-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-gold-200 flex items-center justify-center">
                  <Users className="w-24 h-24 text-primary-500" />
                </div>
                {/* Achievement badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary-600">{student.achievement}</span>
                </div>
              </div>

              {/* Student Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{student.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{student.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === student.category)?.name}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary-500 hover:text-primary-600 font-semibold"
                  >
                    Ver Perfil →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-primary-500 to-gold-500 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-primary-100">Estudiantes Activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-100">Tasa de Éxito</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Premios Obtenidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-100">Países Representados</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StudentsGallery
