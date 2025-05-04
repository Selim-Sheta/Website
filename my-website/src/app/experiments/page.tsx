
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import ExperimentCard from '../components/ExperimentCard';

export default function Page() {
    const experiments = [
        {
          title: 'ChromaCheck [Coming soon]',
          description: 'Three cats give you feedback on value, contrast, and colour harmony.',
          date: 'Mar 2025',
          imageUrl: '/img/exp-thumb-chroma.webp',
          link: '',
        },
        {
          title: 'Polyrhythm Maker',
          description: 'Generate, preview and download complex polyrhythms instead of resizing note patterns in the piano roll. ',
          date: 'Apr 2024',
          imageUrl: '/img/exp-thumb-polyrhythm.webp',
          link: 'https://selim-sheta.github.io/PolyrhythmMaker/',
        },
        {
            title: 'Circle',
            description: 'A Web Audio API experiment where a circle screams at you if you annoy it.',
            date: 'Jan 2020',
            imageUrl: '/img/exp-thumb-circle.webp',
            link: 'https://mjrmls-circle.glitch.me/',
        },
        {
            title: 'Underwater Synth',
            description: 'My very first website made from scratch! It just makes watery bleeps and bloops.',
            date: 'Jan 2020',
            imageUrl: '/img/exp-thumb-underwater.webp',
            link: 'https://mjrmls-water.glitch.me/',
        },
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">
            <AnimatedBackground animate={false} />
            <main className="main-layout" >
                <Header />
                {/* Hero Section */}
                <section className="main-section">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        experiments.map((exp) => (
                        <ExperimentCard key={exp.title} {...exp} />
                        ))
                    }
                    </div>
                </section>
                <Footer/>
            </main>
        </div>
    );
}
