import Hero from '../components/home/Hero'
import ExperienceSection from '../components/home/ExperienceSection'
import ParrillaSection from '../components/home/ParrillaSection'
import EventsPreview from '../components/home/EventsPreview'
import Testimonials from '../components/home/Testimonials'
import QuickContact from '../components/home/QuickContact'

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <ParrillaSection />
      <EventsPreview />
      <Testimonials />
      <QuickContact />
    </>
  )
}
