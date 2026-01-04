'use client';

import Navigation from '../components/Navigation';
import DecorativeElements from '../components/DecorativeElements';

export default function AboutPage() {
  const handleDownloadPNG = async () => {
    try {
      const response = await fetch('/images/lebenslauf.png');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'lebenslauf.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleDownloadPDF = () => {
    // Open image in new window and trigger print (save as PDF)
    const printWindow = window.open('/images/lebenslauf.png', '_blank');
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <DecorativeElements />

      <div className="relative z-10">
        <Navigation />

        <main className="pt-20 px-4 md:px-8 pb-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Lebenslauf
            </h1>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/lebenslauf.png"
              alt="Lebenslauf"
              className="max-w-xl w-full mx-auto rounded-lg shadow-lg"
            />

            {/* Download buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleDownloadPDF}
                className="px-5 py-2.5 rounded-xl bg-white/80 backdrop-blur border border-gray-200 text-gray-700 text-sm font-medium hover:bg-white hover:shadow-md transition-all flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download as PDF
              </button>

              <button
                onClick={handleDownloadPNG}
                className="px-5 py-2.5 rounded-xl bg-white/80 backdrop-blur border border-gray-200 text-gray-700 text-sm font-medium hover:bg-white hover:shadow-md transition-all flex items-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Download as PNG
              </button>
            </div>
          </div>
        </main>

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
