import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Academia de Modelaje Indígena - Celebrando la Belleza Ancestral',
  description: 'Academia especializada en modelaje para pueblos indígenas, promoviendo la belleza ancestral y la diversidad cultural. Formamos modelos profesionales respetando nuestras raíces.',
  keywords: 'modelaje indígena, academia de modelaje, belleza ancestral, pueblos indígenas, diversidad cultural',
  authors: [{ name: 'Academia de Modelaje Indígena' }],
  openGraph: {
    title: 'Academia de Modelaje Indígena',
    description: 'Celebrando la belleza ancestral a través del modelaje profesional',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${playfair.variable}`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
