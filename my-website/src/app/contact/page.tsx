
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope} from 'react-icons/fa';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormCard from '../components/FormCard';
import Schedule from '../components/Schedule';

const data = {
    '2025-05': 'booked',
    '2025-06': 'booked',
    '2025-07': 'partial',
} as const;
  
export default function ContactPage() {
    return (
    <div className="relative min-h-screen overflow-hidden">
        <AnimatedBackground />
        <main className="main-layout" >
            <Header />
            {/* Hero Section */}
            <section className="main-section">
                <div className="split-layout">
                    <div className="split-text">
                        <p className="text-xl">
                            Message me on <a className="link-style" href="https://www.linkedin.com/in/selim-sheta/" 
                            target="_blank" rel="noopener noreferrer">LinkedIn!</a>
                        </p>   
                        <p className="text-sm mb-4"> Or fill this form: </p>
                        <FormCard />
                    </div>
                    <div className='split-image'>
                        <p className="text-sm">⠀</p>
                        <p className="text-xl font-bold mb-4">Work Availability</p>
                        <Schedule scheduleData={data} />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    </div>
  );
}