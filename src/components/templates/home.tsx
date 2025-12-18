import { Navbar } from '../organisms/navBar';
import { Hero } from '../organisms/hero';
import { Experiences } from '../organisms/experiences';
import { WhyUs } from '../organisms/whyUs';
import { WhatsAppButton } from '../molecules/whatsAppButton';
import { Reviews } from '../organisms/reviews';
import { Footer } from '../organisms/footer';

export const Home = () => {
    return (
        <div className="min-h-screen bg-brand-bg relative">
            <Navbar />
            <main>
                <Hero />
                <WhyUs />
                <Experiences />
                <Reviews />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}
