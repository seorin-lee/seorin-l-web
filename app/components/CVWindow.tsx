'use client';

import { motion } from 'framer-motion';

export default function CVWindow() {
  return (
    <section className="px-4 pt-4 pb-12 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className="w-full max-w-3xl"
      >
        {/* Window Container */}
        <div className="window-border rounded-lg overflow-hidden bg-gradient-to-b from-[#edf2ff] to-[#dbeafe]">
          {/* Title Bar */}
          <div className="bg-gradient-to-r from-[#ff6b9d] to-[#ffc8dd] px-4 py-2 flex items-center justify-between border-b-2 border-black">
            <div className="flex items-center gap-2">
              <div className="text-xl">📄</div>
              <span className="text-white font-semibold text-sm md:text-base" style={{ fontFamily: 'Bitend, sans-serif' }}>
                About_Seorin.txt
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-4 h-4 bg-[#ffed4e] border border-black rounded-sm"></div>
              <div className="w-4 h-4 bg-[#a8daff] border border-black rounded-sm"></div>
              <div className="w-4 h-4 bg-[#ffc8dd] border border-black rounded-sm"></div>
            </div>
          </div>

          {/* Window Content */}
          <div className="p-6 md:p-8 bg-white/90 backdrop-blur-sm">
            <div className="space-y-6 text-sm md:text-base leading-relaxed font-Poppins font-bold">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Gude! Ich bin Seorin Lee.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Für mich ist klar, dass ich einen neuen Weg einschlagen möchte.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Ich interessiere mich sehr für Webentwicklung und Programmieren. Es macht mir Spaß, Dinge selbst umzusetzen, auszuprobieren und Schritt für Schritt besser zu werden.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Da ich in diesem Bereich noch am Anfang stehe, habe ich diese Website selbst aufgebaut und dabei KI-Tools wie ChatGPT und Claude als Lernhilfe genutzt. Viele Dinge habe ich erst dadurch richtig verstanden. Das Umsetzen, Testen und Verbessern habe ich jedoch selbst gemacht, wodurch ich viel dazugelernt habe.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Zurzeit investiere ich viel Zeit in Onlinekurse und eigene Projekte. Ich mache Fehler, lerne daraus und versuche, mich kontinuierlich weiterzuentwickeln.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Mir ist bewusst, dass ich noch am Anfang stehe. Trotzdem bin ich motiviert, dranzubleiben und jeden Tag etwas Neues zu lernen.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                Ich freue mich, wenn Sie mich auf diesem Weg begleiten.
              </motion.p>
            </div>
          </div>

          {/* Window Status Bar */}
          <div className="bg-[#edf2ff] px-4 py-1 border-t-2 border-black flex items-center justify-between text-xs">
            <span className="font-Bitend">Ready</span>
            <span className="font-Bitend">© 2026 Seorin Lee</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
