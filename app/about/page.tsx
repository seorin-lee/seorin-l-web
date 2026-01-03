import Navigation from '../components/Navigation';
import DecorativeElements from '../components/DecorativeElements';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background decorative elements */}
      <DecorativeElements />

      {/* Main content */}
      <div className="relative z-10">
        <Navigation />

        <main className="pt-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              👤 Lebenslauf
            </h1>
            
          </div>
        </main>

        <img src="/images/lebenslauf.png" alt="Lebenslauf" className="max-w-xl mx-auto" />

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
