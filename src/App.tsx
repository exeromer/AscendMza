import { Navbar } from './components/organisms/navBar';
import { Hero } from './components/organisms/hero';
import { Experiences } from './components/organisms/experiences';
import { WhyUs } from './components/organisms/whyUs';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Experiences />
      </main>
    </div>
  )
}

export default App