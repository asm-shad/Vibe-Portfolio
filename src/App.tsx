import { FC } from 'react'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: FC = () => {
  return (
    <Layout>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </Layout>
  )
}

export default App