'use client';

import { motion } from 'framer-motion';

export default function DecorativeElements() {
  const stickers = [
    { emoji: '🫧', x: '5%', y: '15%', delay: 0, duration: 4 },
    { emoji: '🐰', x: '85%', y: '25%', delay: 0.5, duration: 3.5 },
    { emoji: '🎀', x: '15%', y: '60%', delay: 1, duration: 4.5 },
    { emoji: '🍰', x: '80%', y: '70%', delay: 0.3, duration: 4 },
    { emoji: '🤍', x: '15%', y: '85%', delay: 0.8, duration: 3.8 },
    { emoji: '🇰🇷', x: '92%', y: '50%', delay: 0.2, duration: 3.2 },
  ];

  const pixelHearts = [
    { size: 'small', x: '20%', y: '30%' },
    { size: 'medium', x: '75%', y: '45%' },
    { size: 'small', x: '30%', y: '75%' },
  ];

  return (
    <>
      {/* Floating emoji stickers */}
      {stickers.map((sticker, idx) => (
        <motion.div
          key={idx}
          className="fixed pointer-events-none z-0 opacity-40"
          style={{
            left: sticker.x,
            top: sticker.y,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: sticker.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: sticker.delay,
          }}
        >
          <span className="text-4xl md:text-5xl lg:text-6xl">{sticker.emoji}</span>
        </motion.div>
      ))}

      {/* Pixel art hearts */}
      {pixelHearts.map((heart, idx) => (
        <motion.div
          key={`heart-${idx}`}
          className="fixed pointer-events-none z-0"
          style={{
            left: heart.x,
            top: heart.y,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: idx * 0.4,
          }}
        >
          <PixelHeart size={heart.size} />
        </motion.div>
      ))}

      {/* Geometric shapes */}
      <motion.div
        className="fixed top-[30%] left-[10%] pointer-events-none z-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-[#a8daff] opacity-30 rounded-lg"></div>
      </motion.div>

      <motion.div
        className="fixed bottom-[80%] right-[3%] pointer-events-none z-0"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#ffc8dd] to-[#ffed4e] opacity-30 rounded-full"></div>
      </motion.div>

      {/* Sparkle effects */}
      <Sparkles />
    </>
  );
}

function PixelHeart({ size }: { size: string }) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  return (
    <svg
      viewBox="0 0 16 16"
      className={sizeClasses[size as keyof typeof sizeClasses]}
      style={{ imageRendering: 'pixelated' }}
    >
      <path
        d="M2 4h2v2H2V4zm10 0h2v2h-2V4zM0 6h2v4H0V6zm4 0h2v6H4V6zm4 0h2v6H8V6zm4 0h2v4h-2V6zm-10 6h2v2H2v-2zm4 0h2v2H6v-2zm4 0h2v2h-2v-2z"
        fill="#ffc8dd"
      />
    </svg>
  );
}

function Sparkles() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="fixed pointer-events-none z-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        >
          <div className="w-2 h-2 bg-[#ffed4e] rounded-full shadow-lg shadow-[#ffed4e]/50"></div>
        </motion.div>
      ))}
    </>
  );
}
