'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Recipe {
  name: string;
  reason: string;
  additionalIngredients: string[];
  steps: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

export default function RecipeCard({ recipe, index }: RecipeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: 'spring' as const,
          stiffness: 200,
          damping: 20,
          delay: index * 0.1,
        },
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="glass rounded-2xl p-5 md:p-6 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Recipe header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 font-fredoka">
            {recipe.name}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mt-1.5 leading-relaxed">
            {recipe.reason}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="text-xl text-gray-400 flex-shrink-0 mt-1"
        >
          ▼
        </motion.div>
      </div>

      {/* Additional ingredients */}
      {recipe.additionalIngredients && recipe.additionalIngredients.length > 0 && (
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              + Need:
            </span>
            {recipe.additionalIngredients.map((ingredient, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs rounded-full bg-amber-100 text-amber-700 font-medium"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Expandable steps */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div className="mt-5 pt-4 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span>📝</span> Steps
              </h4>
              <ol className="space-y-2.5">
                {recipe.steps.map((step, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 text-sm text-gray-600"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed pt-0.5">{step}</span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click hint */}
      <div className="mt-3 text-xs text-gray-400 text-center">
        {isExpanded ? 'Click to collapse' : 'Click to see steps'}
      </div>
    </motion.div>
  );
}
