import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import TeamSection from '@/components/TeamSection'
import StudentsGallery from '@/components/StudentsGallery'
import CompetitionsSection from '@/components/CompetitionsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <TeamSection />
      <StudentsGallery />
      <CompetitionsSection />
      <ContactSection />
    </div>
  )
}
