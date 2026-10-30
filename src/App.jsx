import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GitHubStats from './components/GitHubStats'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Credentials from './components/Credentials'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

export default function App() {
  const rootRef = useReveal()

  return (
    <div ref={rootRef}>
      <Navbar />
      <main>
        <Hero />
        <GitHubStats />
        <Experience />
        <TechStack />
        <Projects />
        <Credentials />
      </main>
      <Footer />
    </div>
  )
}
