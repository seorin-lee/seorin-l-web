import Navigation from '../components/Navigation';
import DecorativeElements from '../components/DecorativeElements';

export default function PortfolioPage() {
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
              🎨 Portfolio
            </h1>
            <p className="text-center text-gray-600">
              이제 배경색이 홈 화면과 똑같아졌을 거예요!
            </p>
          </div>
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
