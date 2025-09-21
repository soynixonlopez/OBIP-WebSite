'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Camera, Star, Award, Users, ChevronLeft, ChevronRight, Baby, User, Crown, UserCheck } from 'lucide-react'
import { useState } from 'react'

const StudentsGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(0)

  const categories = [
    { id: 'all', name: 'Todos', icon: Users },
    { id: 'mini', name: 'Mini', icon: Baby },
    { id: 'teen', name: 'Teen', icon: User },
    { id: 'miss', name: 'Miss', icon: Crown },
    { id: 'mrs', name: 'Mrs', icon: UserCheck }
  ]

  const students = [
    // Mini Models (7-11 años)
    {
      id: 1,
      name: 'Luna Archibold',
      category: 'mini',
      age: 9,
      image: '/api/placeholder/400/500',
      achievement: 'Mini Modelo del Año 2023',
      description: 'Pequeña gran estrella con carisma natural y elegancia innata.'
    },
    {
      id: 2,
      name: 'Kai Urrutia',
      category: 'mini',
      age: 8,
      image: '/api/placeholder/400/500',
      achievement: 'Mejor Pasarela Infantil',
      description: 'Modelo infantil con gran potencial y personalidad única.'
    },
    {
      id: 3,
      name: 'Maya Kabu',
      category: 'mini',
      age: 10,
      image: '/api/placeholder/400/500',
      achievement: 'Premio a la Sonrisa',
      description: 'Encantadora modelo que ilumina cada sesión fotográfica.'
    },
    // Teen Models (12-17 años)
    {
      id: 4,
      name: 'Sofia Mamani',
      category: 'teen',
      age: 16,
      image: '/api/placeholder/400/500',
      achievement: 'Ganadora Desfile Internacional 2023',
      description: 'Estudiante destacada en técnicas de pasarela con enfoque cultural.'
    },
    {
      id: 5,
      name: 'Diego Quispe',
      category: 'teen',
      age: 15,
      image: '/api/placeholder/400/500',
      achievement: 'Portada Revista Cultural',
      description: 'Especialista en fotografía de moda con identidad indígena.'
    },
    {
      id: 6,
      name: 'Elena Condori',
      category: 'teen',
      age: 17,
      image: '/api/placeholder/400/500',
      achievement: 'Premio a la Diversidad Cultural',
      description: 'Modelo reconocida por promover la belleza ancestral.'
    },
    // Miss Models (18-28 años mujeres)
    {
      id: 7,
      name: 'Carmen Flores',
      category: 'miss',
      age: 22,
      image: '/api/placeholder/400/500',
      achievement: 'Campaña Nacional de Moda',
      description: 'Modelo profesional especializada en alta costura.'
    },
    {
      id: 8,
      name: 'Isabella Lopez',
      category: 'miss',
      age: 25,
      image: '/api/placeholder/400/500',
      achievement: 'Miss Panamá Indígena 2023',
      description: 'Embajadora de la belleza y cultura indígena panameña.'
    },
    {
      id: 9,
      name: 'Valentina Archibold',
      category: 'miss',
      age: 20,
      image: '/api/placeholder/400/500',
      achievement: 'Mejor Modelo Emergente',
      description: 'Joven promesa del modelaje con gran proyección internacional.'
    },
    // Mrs Models (18-28 años hombres)
    {
      id: 10,
      name: 'Miguel Huanca',
      category: 'mrs',
      age: 24,
      image: '/api/placeholder/400/500',
      achievement: 'Desfile de Alta Costura',
      description: 'Especialista en modelaje masculino con raíces culturales.'
    },
    {
      id: 11,
      name: 'Roberto Mamani',
      category: 'mrs',
      age: 26,
      image: '/api/placeholder/400/500',
      achievement: 'Modelo del Año 2023',
      description: 'Reconocido por su trabajo en diversidad cultural.'
    },
    {
      id: 12,
      name: 'Carlos Urrutia',
      category: 'mrs',
      age: 23,
      image: '/api/placeholder/400/500',
      achievement: 'Mejor Modelo Masculino',
      description: 'Modelo profesional con gran presencia y elegancia.'
    }
  ]

  const filteredStudents = selectedCategory === 'all' 
    ? students 
    : students.filter(student => student.category === selectedCategory)

  const studentsPerPage = 3
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage)
  const startIndex = currentPage * studentsPerPage
  const endIndex = startIndex + studentsPerPage
  const currentStudents = filteredStudents.slice(startIndex, endIndex)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentPage(0)
  }

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
              onClick={() => handleCategoryChange(category.id)}
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

        {/* Students Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-500 hover:bg-primary-50 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </>
          )}

          {/* Students Grid - 3 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {currentStudents.map((student, index) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 card-hover"
              >
                {/* Student Image */}
                <div className="relative h-80 bg-gradient-to-br from-orange-100 to-pink-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-pink-200 flex items-center justify-center">
                    <Users className="w-24 h-24 text-orange-500" />
                  </div>
                  {/* Achievement badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-orange-600">{student.achievement}</span>
                  </div>
                  {/* Age badge */}
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">{student.age} años</span>
                  </div>
                </div>

                {/* Student Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{student.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{student.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                      {categories.find(cat => cat.id === student.category)?.name}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-orange-500 hover:text-orange-600 font-semibold"
                    >
                      Ver Perfil →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage 
                      ? 'bg-orange-500' 
                      : 'bg-gray-300 hover:bg-orange-300'
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-orange-500 to-gold-500 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-orange-100">Estudiantes Activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-orange-100">Tasa de Éxito</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-orange-100">Premios Obtenidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30</div>
              <div className="text-orange-100">Eventos Participados</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StudentsGallery
