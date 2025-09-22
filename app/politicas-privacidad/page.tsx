import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Políticas de Privacidad - OBIP',
  description: 'Políticas de privacidad de Bellezas Indígenas de Panamá',
}

export default function PoliticasPrivacidad() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-gold-500 text-white py-24">
        <div className="container-custom text-center pt-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Políticas de Privacidad
          </h1>
          <p className="text-xl opacity-90">
            Bellezas Indígenas de Panamá
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom pt-20 pb-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-gray-800 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-orange-600 mb-4">
                  1. Información que Recopilamos
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Recopilamos información personal que nos proporcionas directamente, incluyendo:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                  <li>Nombre completo y datos de contacto</li>
                  <li>Información de inscripción y participación en programas</li>
                  <li>Fotografías y videos para promoción</li>
                  <li>Información de redes sociales</li>
                  <li>Datos de contacto para comunicación</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-600 mb-4">
                  2. Uso de la Información
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Utilizamos tu información personal para:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                  <li>Procesar inscripciones y gestionar programas</li>
                  <li>Comunicarnos contigo sobre eventos y actividades</li>
                  <li>Promocionar la academia y sus estudiantes</li>
                  <li>Mejorar nuestros servicios educativos</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-600 mb-4">
                  3. Compartir Información
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  No vendemos, alquilamos ni compartimos tu información personal con terceros, 
                  excepto en los siguientes casos:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                  <li>Con tu consentimiento explícito</li>
                  <li>Para cumplir con la ley</li>
                  <li>Con proveedores de servicios que nos ayudan a operar</li>
                  <li>En caso de emergencia médica</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-600 mb-4">
                  4. Seguridad de Datos
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger 
                  tu información personal contra acceso no autorizado, alteración, divulgación 
                  o destrucción.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-600 mb-4">
                  5. Tus Derechos
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Tienes derecho a:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                  <li>Acceder a tu información personal</li>
                  <li>Corregir información inexacta</li>
                  <li>Solicitar la eliminación de tus datos</li>
                  <li>Retirar tu consentimiento en cualquier momento</li>
                  <li>Presentar una queja ante las autoridades competentes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-600 mb-4">
                  6. Cookies y Tecnologías Similares
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Nuestro sitio web puede utilizar cookies para mejorar tu experiencia de 
                  navegación. Puedes configurar tu navegador para rechazar cookies si lo deseas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-600 mb-4">
                  7. Cambios a esta Política
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos 
                  sobre cambios significativos a través de nuestro sitio web o por correo electrónico.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-orange-600 mb-4">
                  8. Contacto
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:
                </p>
                <div className="bg-orange-50 p-6 rounded-lg mt-4">
                  <p className="text-gray-800 font-semibold">Bellezas Indígenas de Panamá</p>
                  <p className="text-gray-700">Email: bellezasindigenas@gmail.com</p>
                  <p className="text-gray-700">Teléfono: 66197170</p>
                  <p className="text-gray-700">Dirección: Panamá City, Panamá</p>
                </div>
              </section>

              <div className="border-t pt-8 mt-12">
                <p className="text-sm text-gray-500 text-center">
                  Última actualización: {new Date().toLocaleDateString('es-PA')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="bg-gray-100 py-8">
        <div className="container-custom text-center">
          <a 
            href="/"
            className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            <span>←</span>
            <span>Volver al Inicio</span>
          </a>
        </div>
      </div>
    </div>
  )
}
