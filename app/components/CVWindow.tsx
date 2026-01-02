'use client';

import { motion } from 'framer-motion';

export default function CVWindow() {
  return (
    <section className="px-4 py-12 flex justify-center items-center">
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
          <div className="bg-gradient-to-r from-[#0066ff] to-[#00a3ff] px-4 py-2 flex items-center justify-between border-b-2 border-black">
            <div className="flex items-center gap-2">
              <div className="text-xl">📄</div>
              <span className="text-white font-semibold text-sm md:text-base" style={{ fontFamily: 'Fredoka, sans-serif' }}>
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
            <div className="space-y-6 text-sm md:text-base leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                안녕하세요! 저는{' '}
                <a
                  href="https://www.snu.ac.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-link font-semibold"
                >
                  서울대학교
                </a>
                에서 컴퓨터공학을 전공하고 있는 개발자 이서린입니다.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                웹 개발과 사용자 경험 디자인에 열정을 가지고 있으며, 최신 기술 트렌드를 학습하고 적용하는 것을 즐깁니다.
                React, Next.js, TypeScript를 주로 사용하여 프로젝트를 진행하고 있습니다.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>💼</span>
                  <span style={{ fontFamily: 'Fredoka, sans-serif' }}>Experience</span>
                </h3>
                <ul className="space-y-2 ml-6">
                  <li className="list-disc">
                    Full-stack Developer Intern at{' '}
                    <a
                      href="https://www.naver.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-link"
                    >
                      NAVER Corp
                    </a>
                  </li>
                  <li className="list-disc">
                    Frontend Developer at{' '}
                    <a
                      href="https://wafflestudio.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-link"
                    >
                      Waffle Studio
                    </a>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>🎓</span>
                  <span style={{ fontFamily: 'Fredoka, sans-serif' }}>Education</span>
                </h3>
                <ul className="space-y-2 ml-6">
                  <li className="list-disc">
                    B.S. in Computer Science and Engineering,{' '}
                    <a
                      href="https://cse.snu.ac.kr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-link"
                    >
                      Seoul National University
                    </a>
                  </li>
                  <li className="list-disc">Expected Graduation: 2026</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <span>🛠️</span>
                  <span style={{ fontFamily: 'Fredoka, sans-serif' }}>Skills</span>
                </h3>
                <div className="flex flex-wrap gap-2 ml-6">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python', 'Git'].map(
                    (skill, idx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, rotate: -2 }}
                        className="px-3 py-1 rounded-full text-xs md:text-sm font-medium border-2 border-black bg-gradient-to-r from-[#a8daff] to-[#ffc8dd] cursor-default"
                      >
                        {skill}
                      </motion.span>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Window Status Bar */}
          <div className="bg-[#edf2ff] px-4 py-1 border-t-2 border-black flex items-center justify-between text-xs">
            <span className="font-mono">Ready</span>
            <span className="font-mono">© 2026 Seorin Lee</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
