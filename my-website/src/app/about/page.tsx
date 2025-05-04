
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import ActionCard from '../components/ActionCard';

export default function Page() {
    const getInTouch = [
        {
          title: 'Get In Touch',
          description: 'DERI Institute Launch.',
          date: 'Mar 2022',
          imageUrl: '/img/candid-1.webp',
          link: '/contact',
        }
    ];
    return (
        <div className="relative min-h-screen overflow-hidden">
            <AnimatedBackground animate={false} />
            <main className="main-layout" >
                <Header />
                {/* Hero Section */}
                <section className="main-section">
                    <div className="split-layout">
                        <div className="split-text">
                            <p className="text-body">
                                <b>I'm an R&D engineer and tech consultant specializing in digital audio and music processing.</b>
                            </p>
                            <p className="text-body">
                                I've been making electronic music for over 10 years, and I love to experiment with sound and creative computing.
                                I graduated from London's Centre for Digital Music in 2020, and have since delivered real-world results across a wide range 
                                of audio tech challenges — from designing reverbs used in major live shows to building custom audio plugins for 
                                Unreal Engine.
                            </p>
                            <p className="text-body">
                                My main focus is on designing, implementing, benchmarking, and refining real-time audio algorithms. 
                                Whether you're facing a technical challenge or exploring new ideas, I can help:<br/>
                                <span className="inline-block ml-4">• Review the latest research and industry standards</span><br/>
                                <span className="inline-block ml-4">• Prototype, test, and iterate</span><br/>
                                <span className="inline-block ml-4">• Develop tangible solutions, incorporate feedback</span><br/>
                                <span className="inline-block ml-4">• Assess audio quality and performance</span><br/>
                                <span className="inline-block ml-4">• Provide reports, specifications and unit test data</span>
                            </p>
                            <p className="text-body">
                                I have industrial experience in audio synthesis, creative effects, binaural audio, frequency-domain processing, 
                                artificial reverberation, dynamic range effects, and more. 
                            </p>
                            <p className="text-body">
                                My main tools include C++ (JUCE, MAX MSP, Unreal Engine), Matlab, JavaScript (Frontend, Web Audio API), C# (Unity), and Python — and I'm always learning more. 
                            </p>
                            <p className="text-body">
                                I'm fluent in English and French, and I'm currently learning Spanish.<br/>
                                Finally, I'm addicted to Chess. <a className="link-style" href="https://link.chess.com/friend/5SGeOR" target="_blank" rel="noopener noreferrer">Add me on chess.com!</a>
                            </p>
                        </div>
                        <div className='split-image'>
                            <ActionCard
                                imageUrl="/img/candid-1.webp"
                                buttonLabel="Get In Touch"
                                buttonHref="/contact"
                                description="Digital Environment Research Institute launch at Queen Mary (March 2022)"
                            />
                            <p className="text-xl mt-8 mb-4">Latest Post</p>
                            <div className="w-full aspect-video">
                                <iframe
                                    src="https://www.youtube.com/embed/c_93Iqw4kmk?si=xhiP30Fv2cPcTSaT"
                                    title="YouTube video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full rounded-md shadow-md"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </main>
        </div>
    );
}
