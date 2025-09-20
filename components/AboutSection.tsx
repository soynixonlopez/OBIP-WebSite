'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Target, Users, Globe } from 'lucide-react'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Heart,
      title: 'Respeto Cultural',
      description: 'Honramos y preservamos las tradiciones ancestrales en cada sesión de modelaje.'
    },
    {
      icon: Target,
      title: 'Excelencia Profesional',
      description: 'Formamos modelos de clase mundial con técnicas profesionales y ética cultural.'
    },
    {
      icon: Users,
      title: 'Comunidad Inclusiva',
      description: 'Creamos un espacio seguro donde cada estudiante puede expresar su identidad única.'
    },
    {
      icon: Globe,
      title: 'Impacto Global',
      description: 'Promovemos la diversidad cultural en la industria del modelaje internacional.'
    }
  ]

  return (
    <section id="academia" ref={ref} className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestra <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-gold-400 bg-clip-text text-transparent">Academia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos una academia pionera que combina la tradición ancestral con 
            las técnicas modernas del modelaje profesional, creando un espacio 
            único donde la cultura indígena se convierte en arte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Una Visión Única del Modelaje
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              En nuestra academia, creemos que la belleza auténtica proviene de 
              nuestras raíces culturales. Cada estudiante aprende no solo las 
              técnicas del modelaje profesional, sino también el valor de su 
              herencia ancestral.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nuestro enfoque integral incluye formación en pasarela, fotografía, 
              expresión corporal, y lo más importante: el orgullo por la identidad 
              cultural que cada modelo representa.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Conoce Nuestro Método
            </motion.button>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl shadow-2xl overflow-hidden border border-orange-200">
              <div className="w-full h-full bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-24 h-24 text-orange-500 mx-auto mb-4" />
                  <p className="text-orange-600 font-semibold">Imagen de la Academia</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full"></div>
          </motion.div>
        </div>

        {/* Features grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-orange-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
