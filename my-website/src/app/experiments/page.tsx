
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import ExperimentCard from '../components/ExperimentCard';

export default function Page() {
    const experiments = [
        {
            title: 'AllPass Designer [Coming soon]',
            description: 'Design all-pass filters by interacting with poles directly on the unit circle.',
            date: 'May 2025',
            imageUrl: '/img/exp-thumb-apd-temp.webp',
            link: '',
        },
        {
            title: 'ChromaCheck [Coming soon]',
            description: 'Three cats give you feedback on value, contrast, and colour harmony.',
            date: 'Mar 2025',
            imageUrl: '/img/exp-thumb-chroma-temp.webp',
            link: '',
        },
        {
            title: 'Polyrhythm Maker',
            description: 'Generate, preview and download complex polyrhythms.',
            date: 'Apr 2024',
            imageUrl: '/img/exp-thumb-polyrhythm.webp',
            link: 'https://selim-sheta.github.io/PolyrhythmMaker/',
        },
        {
            title: 'Circle',
            description: 'A Web Audio API experiment with a circle that screams at you.',
            date: 'Jan 2020',
            imageUrl: '/img/exp-thumb-circle.webp',
            link: 'https://mjrmls-circle.glitch.me/',
            desktopOnly: true,
        },
        {
            title: 'Underwater Synth',
            description: 'My very first website made from scratch: it just makes watery bleeps and bloops.',
            date: 'Jan 2020',
            imageUrl: '/img/exp-thumb-underwater.webp',
            link: 'https://mjrmls-water.glitch.me/',
            desktopOnly: true,
        },
    ];

    return (
        <div className="relative min-h-screen">
            <AnimatedBackground mode="alternate" />
            <main className="main-layout" >
                <Header />
                {/* Hero Section */}
                <section className="main-section">
                    <p className="text-body">
                        <b>My web experiments.</b>
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            experiments.map((exp) => (
                                <ExperimentCard key={exp.title} {...exp} />
                            ))
                        }
                    </div>
                </section>
                <Footer />
            </main>
        </div>
    );
}
