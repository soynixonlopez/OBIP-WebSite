'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowLeft, User, Calendar, Award, Camera, Users } from 'lucide-react'
import Link from 'next/link'

const InscripcionPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    categoria: '',
    telefono: '',
    email: '',
    experiencia: '',
    motivacion: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const categorias = [
    {
      id: 'embajador',
      nombre: 'Embajador Indígena',
      edad: '18-28 años',
      descripcion: 'Modelos masculinos que representan la cultura indígena con elegancia y profesionalismo',
      icon: User,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'embajadora',
      nombre: 'Embajadora Indígena',
      edad: '18-28 años',
      descripcion: 'Modelos femeninas que celebran la belleza ancestral con gracia y autenticidad',
      icon: User,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'teen',
      nombre: 'Categoría Teen',
      edad: '12-17 años',
      descripcion: 'Jóvenes talentos que desarrollan sus habilidades en el modelaje cultural',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'child',
      nombre: 'Categoría Child',
      edad: '7-11 años',
      descripcion: 'Pequeños modelos que aprenden a expresar su identidad cultural con naturalidad',
      icon: Camera,
      color: 'from-gold-500 to-gold-600'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    alert('¡Inscripción enviada con éxito! Te contactaremos pronto para continuar con el proceso.')
    setFormData({
      nombre: '',
      apellido: '',
      edad: '',
      categoria: '',
      telefono: '',
      email: '',
      experiencia: '',
      motivacion: ''
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-12"
          >
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver al inicio</span>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Inscríbete a Nuestra
              <span className="block bg-gradient-to-r from-orange-300 to-gold-300 bg-clip-text text-transparent">Academia</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Únete a nuestra comunidad de modelos indígenas y desarrolla tu talento 
              mientras celebramos nuestra rica herencia cultural.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom pt-20 pb-16">
        {/* Categorías */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestras Categorías
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categorias.map((categoria, index) => (
              <motion.div
                key={categoria.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className={`bg-gradient-to-br ${categoria.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
                onClick={() => setFormData({...formData, categoria: categoria.id})}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <categoria.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{categoria.nombre}</h3>
                <p className="text-white/80 text-sm mb-3">{categoria.edad}</p>
                <p className="text-white/90 text-sm leading-relaxed">{categoria.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Formulario de Inscripción
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Información Personal */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-semibold text-gray-700 mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="edad" className="block text-sm font-semibold text-gray-700 mb-2">
                    Edad *
                  </label>
                  <input
                    type="number"
                    id="edad"
                    name="edad"
                    value={formData.edad}
                    onChange={handleInputChange}
                    required
                    min="7"
                    max="28"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tu edad"
                  />
                </div>
                <div>
                  <label htmlFor="categoria" className="block text-sm font-semibold text-gray-700 mb-2">
                    Categoría de Interés *
                  </label>
                  <select
                    id="categoria"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecciona una categoría</option>
                    {categorias.map((categoria) => (
                      <option key={categoria.id} value={categoria.id}>
                        {categoria.nombre} ({categoria.edad})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="+51 987 654 321"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="experiencia" className="block text-sm font-semibold text-gray-700 mb-2">
                  Experiencia en Modelaje (opcional)
                </label>
                <textarea
                  id="experiencia"
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Cuéntanos sobre tu experiencia previa en modelaje, si la tienes..."
                />
              </div>

              <div>
                <label htmlFor="motivacion" className="block text-sm font-semibold text-gray-700 mb-2">
                  ¿Por qué quieres unirte a nuestra academia? *
                </label>
                <textarea
                  id="motivacion"
                  name="motivacion"
                  value={formData.motivacion}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Comparte con nosotros tu motivación para formar parte de nuestra academia..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando inscripción...</span>
                  </>
                ) : (
                  <>
                    <Award className="w-5 h-5" />
                    <span>Enviar Inscripción</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default InscripcionPage
