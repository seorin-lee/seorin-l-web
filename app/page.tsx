"use client";

// Original imports - uncomment when ready to restore
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import CVWindow from './components/CVWindow';
// import DecorativeElements from './components/DecorativeElements';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4">
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <div
          className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full opacity-30"
          style={{
            background: 'var(--pastel-pink)',
            top: '-10%',
            right: '-5%',
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full opacity-30"
          style={{
            background: 'var(--pastel-blue)',
            bottom: '-5%',
            left: '-5%',
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full opacity-20"
          style={{
            background: 'var(--vibrant-yellow)',
            top: '40%',
            left: '10%',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
      </div>

      {/* Main content card */}
      <main className="relative z-10 w-full max-w-xl">
        <div className="glass rounded-3xl p-8 md:p-12 text-center">
          {/* Construction icon */}
          <div className="mb-6 md:mb-8">
            <div
              className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full"
              style={{ background: 'linear-gradient(135deg, var(--pastel-pink) 0%, var(--pastel-blue) 100%)' }}
            >
              <svg
                className="w-10 h-10 md:w-12 md:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
          </div>

          {/* Main heading */}
          <h1
            className="font-Poppins font-bold text-2xl md:text-4xl mb-4 md:mb-6"
            style={{ color: 'var(--foreground)' }}
          >
            Something Great is in the Works!
          </h1>

          {/* Subtext */}
          <p
            className="font-Poppins text-base md:text-lg mb-8 md:mb-10 leading-relaxed opacity-80"
            style={{ color: 'var(--foreground)' }}
          >
            I am currently updating my portfolio to showcase new projects.
            Please check back soon!
          </p>

          {/* Progress indicator */}
          <div className="mb-8 md:mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-sm font-medium opacity-60">Building something amazing</span>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ background: 'rgba(0,0,0,0.1)' }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: '60%',
                  background: 'linear-gradient(90deg, var(--pastel-pink) 0%, var(--pastel-blue) 100%)',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
            </div>
          </div>

          {/* Contact links */}
          <div className="flex items-center justify-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/seorin-lee"
              target="_blank"
              rel="noopener noreferrer"
              className="jelly-hover inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:shadow-lg"
              style={{ background: 'var(--pastel-blue)' }}
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@seorinlee.com"
              className="jelly-hover inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:shadow-lg"
              style={{ background: 'var(--pastel-pink)' }}
              aria-label="Send Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center mt-6 text-sm opacity-50 font-Poppins">
          Seorin Lee
        </p>
      </main>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}

/*
 * ============================================
 * ORIGINAL PAGE CODE - RESTORE WHEN READY
 * ============================================
 *
 * To restore your original landing page:
 * 1. Uncomment the imports at the top
 * 2. Replace the entire Home() function with:
 *
 * export default function Home() {
 *   return (
 *     <div className="relative min-h-screen overflow-hidden">
 *       <DecorativeElements />
 *       <div className="relative z-10">
 *         <Navigation />
 *         <main className="pt-20">
 *           <Hero />
 *           <CVWindow />
 *         </main>
 *         <footer className="py-8 text-center">
 *           <div className="glass rounded-full px-6 py-3 inline-block mx-auto">
 *             <p className="text-sm md:text-base font-medium">
 *               Made with 💖 by Seorin Lee
 *             </p>
 *           </div>
 *         </footer>
 *       </div>
 *     </div>
 *   );
 * }
 *
 * ============================================
 */
