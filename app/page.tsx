import Navigation from './components/Navigation';
import Hero from './components/Hero';
import CVWindow from './components/CVWindow';
import DecorativeElements from './components/DecorativeElements';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <DecorativeElements />

      {/* Main content */}
      <div className="relative z-10">
        <Navigation />

        <main className="pt-20">
          <Hero />
          <CVWindow />
        </main>

        {/* Footer */}
        <footer className="py-8 text-center">
          <div className="glass rounded-full px-6 py-3 inline-block mx-auto">
            <p className="text-sm md:text-base font-medium">
              Made with 💖 by Seorin Lee
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
