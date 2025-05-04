
import Link from 'next/link';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page() {
    return (
        <div className="relative min-h-screen">
            <main className="main-layout" >
                <Header />
                {/* Hero Section */}
                <section className="main-section">
                    <h1 className="chroma text-5xl font-bold my-6 py-6">Coming Soon...</h1>
                </section>
                <Footer/>
            </main>
        </div>
    );
}
