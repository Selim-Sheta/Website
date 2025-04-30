import Link from 'next/link';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <AnimatedBackground />
            <main className="relative z-0 flex flex-col min-h-screen bg-center bg-no-repeat bg-cover" >
                <Header />
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center flex-1 text-center p-12 bg-black/70">
                    <h1 className="text-5xl font-bold mb-6">Hello, I'm Selim.</h1>
                        <p className="text-xl mb-8">
                            I craft real-time audio algorithms that power sound and music applications. <br /> Let's work together to turn complex ideas into practical solutions!
                        </p>
                    <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
                        Hire Me
                    </Link>
                </section>

                {/* Footer with Videos */}
                <footer className="border-t p-6 flex flex-col items-center justify-center">
                    <p className="text-xl mb-2">
                        Latest Post
                    </p>
                    <div className="w-full max-w-xl aspect-video">
                        <iframe
                            src="https://www.youtube.com/embed/c_93Iqw4kmk?si=xhiP30Fv2cPcTSaT"
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-md shadow-md"
                        ></iframe>
                    </div>
                </footer>
            </main>
        </div>
    );
}
