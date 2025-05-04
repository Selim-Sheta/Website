import Link from 'next/link';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <AnimatedBackground mode="regular" />
            <main className="main-layout" >
                <Header />
                {/* Hero Section */}
                <section className="main-section">
                    <h1 className="chroma text-5xl font-bold mb-6">Hello, I'm Selim.</h1>
                    <p className="text-xl mb-8">
                        I craft real-time audio algorithms that power sound and music applications. <br /> Let's work together to turn complex ideas into practical solutions!
                    </p>
                    <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
                        Hire Me
                    </Link>
                </section>
                <Footer />
            </main>
        </div>
    );
}
