
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';

export default function Page() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <AnimatedBackground />
            <main className="relative z-0 flex flex-col min-h-screen bg-center bg-no-repeat bg-cover" >
                <Header />
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center flex-1 text-center p-12 bg-black/70">
                        <p className="text-xl text-justify leading-relaxed mb-8 mx-8">
                        <b>Greetings! I'm an R&D engineer and tech consultant specializing in digital audio and music processing.</b> <br/><br/>
                        I've been making electronic music for over 10 years, and I love to experiment with sound and creative computing.
                        I graduated from London's Centre for Digital Music (C4DM) in 2020, and have since delivered real-world results across a wide range 
                        of audio tech challenges — from designing reverbs used in major live shows to building custom audio plugins for 
                        Unreal Engine, filing a patent, and presenting at the 2024 Audio Developer Conference. <br/><br/>
                        My main focus is on designing, implementing, benchmarking, and refining real-time audio algorithms. 
                        Whether you're facing a technical challenge or exploring new ideas, I can help:<br/>
                        <span className="inline-block ml-4">• Review the latest research and industry standards</span><br/>
                        <span className="inline-block ml-4">• Prototype, test, and iterate</span><br/>
                        <span className="inline-block ml-4">• Develop tangible solutions, incorporate feedback</span><br/>
                        <span className="inline-block ml-4">• Assess audio quality and performance</span><br/>
                        <span className="inline-block ml-4">• Provide reports, specifications and unit test data</span><br/><br/>
                        I have industrial experience on artificial reverberation, dynamic range effects, 
                        audio synthesis, creative effects, frequency-domain processing, and binaural audio. <br/>
                        My main tools include C++ (JUCE, MAX MSP, Unreal Engine), Matlab, JavaScript (Frontend, Web Audio API), C# (Unity), and Python — and I'm always learning more. <br/><br/>
                        I'm fluent in English and French, and I'm currently learning Spanish.<br/>
                        Finally, I'm addicted to Chess. <a href="https://link.chess.com/friend/5SGeOR" target="_blank" rel="noopener noreferrer" className="text-[#ff8800] underline">Add me on chess.com!</a>
                        </p>
                    <Link href="/contact" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
                        Get In Touch
                    </Link>
                </section>

                {/* Footer with Videos */}
                <footer className="border-t p-6 flex flex-col items-center justify-center">
                    <p className="text-xl mb-2">
                        Latest Content
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
