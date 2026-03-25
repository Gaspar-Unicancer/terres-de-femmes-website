import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Histoire from '@/components/Histoire'
import Marques from '@/components/Marques'
import CoupsDeCoeur from '@/components/CoupsDeCoeur'
import Experience from '@/components/Experience'
import Cadeaux from '@/components/Cadeaux'
import Temoignages from '@/components/Temoignages'
import NousTrouver from '@/components/NousTrouver'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Histoire />
        <Marques />
        <CoupsDeCoeur />
        <Experience />
        <Cadeaux />
        <Temoignages />
        <NousTrouver />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
