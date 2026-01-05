'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[50vh] px-4 py-8 md:py-12">
      {/* Animated Logo/Name */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 0.8,
        }}
        className="text-center mb-8"
      >
        <h1
          className="text-6xl md:text-9xl font-bold"
          style={{
            fontFamily: 'Apple Peach, sans-serif',
            color: '#ff9fc2ff',
            textShadow: '6px 3px 0px rgba(0,0,0,0.1)',
          }}
        >
          SEORIN LEE
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-center gap-2"
        >
          <div className="w-3 h-3 rounded-full bg-[#ffed4e] animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffc8dd] animate-pulse delay-75"></div>
          <div className="w-3 h-3 rounded-full bg-[#a8daff] animate-pulse delay-150"></div>
        </motion.div>
      </motion.div>

      {/* Chat Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 15,
          delay: 0.5,
        }}
        className="relative"
      >
        <div className="bg-white/40 backdrop-blur-md rounded-3xl px-8 py-6">
          <p
            className="text-2xl md:text-xl font-black text-center"
            style={{ fontFamily: 'Bitend, sans-serif' }}
          >
            Hello Web
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="inline-block ml-2"
            >
              👾
            </motion.span>
          </p>
        </div>
        
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-2 left-[25%] text-6xl opacity-60"
      >
        ✨
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className="absolute top-10 right-[25%] text-5xl opacity-60"
      >
        🎈
      </motion.div>
      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-5 left-[5%] text-4xl opacity-60"
      >
        🦷
      </motion.div>
    </section>
  );
}
