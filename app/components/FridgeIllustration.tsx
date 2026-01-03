'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FridgeIllustrationProps {
  children: ReactNode;
}

export default function FridgeIllustration({ children }: FridgeIllustrationProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Main fridge body */}
      <div className="relative">
        {/* Fridge shadow */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-8 rounded-[50%] opacity-20"
          style={{ background: 'radial-gradient(ellipse, #000 0%, transparent 70%)' }}
        />

        {/* Fridge body */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="relative w-[320px] md:w-[380px] min-h-[480px] md:min-h-[520px] rounded-3xl"
          style={{
            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
            boxShadow: `
              inset -8px -8px 16px rgba(0,0,0,0.05),
              inset 4px 4px 8px rgba(255,255,255,0.9),
              8px 12px 32px rgba(0,0,0,0.12),
              -4px -4px 16px rgba(255,255,255,0.8)
            `,
          }}
        >
          {/* Top freezer section */}
          <div className="relative h-16 border-b-2 border-gray-100 rounded-t-3xl overflow-hidden">
            {/* Freezer handle */}
            <motion.div
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-2 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #d1d5db 0%, #e5e7eb 50%, #d1d5db 100%)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.8)'
              }}
              whileHover={{ scale: 1.05 }}
            />
            {/* Freezer snowflake icon */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300 text-lg">
              ❄️
            </div>
          </div>

          {/* Main fridge door - open */}
          <motion.div
            initial={{ rotateY: -60 }}
            animate={{ rotateY: -25 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }}
            className="absolute top-16 -left-2 w-[85%] h-[calc(100%-64px)] rounded-2xl origin-left"
            style={{
              background: 'linear-gradient(160deg, #ffffff 0%, #f0f0f0 100%)',
              boxShadow: '4px 0 16px rgba(0,0,0,0.1)',
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            {/* Door handle */}
            <motion.div
              className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-20 rounded-full"
              style={{
                background: 'linear-gradient(180deg, #e5e7eb 0%, #d1d5db 50%, #c4c8cc 100%)',
                boxShadow: '2px 2px 6px rgba(0,0,0,0.15), inset -1px -1px 2px rgba(0,0,0,0.1)'
              }}
            />

            {/* Door shelves (decorative) */}
            <div className="absolute right-4 top-8 w-16 h-6 rounded bg-white/50 border border-white/30" />
            <div className="absolute right-4 top-20 w-16 h-6 rounded bg-white/50 border border-white/30" />
            <div className="absolute right-4 top-32 w-16 h-6 rounded bg-white/50 border border-white/30" />
          </motion.div>

          {/* Fridge interior */}
          <div
            className="absolute top-16 left-0 right-0 bottom-0 rounded-b-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #f0f4ff 0%, #e8f0fe 100%)',
            }}
          >
            {/* Interior light glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-16 opacity-60"
              style={{
                background: 'radial-gradient(ellipse at center top, #fffbeb 0%, transparent 80%)',
              }}
            />

            {/* Shelves with ingredient inputs */}
            <div className="relative h-full flex flex-col p-4 pt-6">
              {children}
            </div>
          </div>

          {/* Fridge feet */}
          <div className="absolute -bottom-2 left-6 w-6 h-3 rounded-b-lg bg-gray-300" />
          <div className="absolute -bottom-2 right-6 w-6 h-3 rounded-b-lg bg-gray-300" />
        </motion.div>

        {/* Cute decorative elements */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="absolute -top-6 -right-4 text-3xl"
        >
          ✨
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring' }}
          className="absolute -top-2 -left-6 text-2xl"
        >
          🧊
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, type: 'spring' }}
          className="absolute bottom-20 -right-8 text-2xl"
          style={{ transform: 'rotate(15deg)' }}
        >
          🥕
        </motion.div>
      </div>
    </div>
  );
}
