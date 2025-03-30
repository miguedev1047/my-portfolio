import { Header } from '@/app/_components/header'
import { Spotlight } from '@/components/ui/spotlight-new'
import { HeroSection } from '@/app/_sections/hero-section/hero-section'
import { ProjectsSection } from '@/app/_sections/projects-section'
import { SkillSection } from '@/app/_sections/skill-section'
import { AboutSection } from '@/app/_sections/about-section'
import { Footer } from '@/app/_components/footer'

export default function Home() {
  return (
    <>
      <Spotlight />

      <Header />
      <main className='relative z-10 overflow-clip'>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillSection />
      </main>
      <Footer />
    </>
  )
}
