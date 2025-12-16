import { Navbar } from './components/organisms/navBar';
import { Hero } from './components/organisms/hero';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      
      <main>
        {/* El Hero ya tiene h-screen, así que ocupará toda la pantalla inicial */}
        <Hero />

        {/* Sección de ejemplo siguiente */}
        <section id="experiencias" className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-display text-4xl text-brand-brown mb-8">Nuestras Experiencias</h2>
            <p className="text-brand-brown-light">Aquí van las tarjetitas.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App