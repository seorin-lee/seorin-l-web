'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import DecorativeElements from '../components/DecorativeElements';
import FridgeIllustration from '../components/FridgeIllustration';
import RecipeCard from '../components/RecipeCard';

interface Recipe {
  name: string;
  reason: string;
  additionalIngredients: string[];
  steps: string[];
}

export default function PortfolioPage() {
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const addIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const removeIngredient = (index: number) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter((_, i) => i !== index));
    }
  };

  const updateIngredient = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleSubmit = async () => {
    const validIngredients = ingredients.filter((i) => i.trim() !== '');

    if (validIngredients.length === 0) {
      setError('Please add at least one ingredient!');
      return;
    }

    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await fetch('/api/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients: validIngredients }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get recipes');
      }

      setRecipes(data.recipes || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setRecipes([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <DecorativeElements />

      <div className="relative z-10">
        <Navigation />

        <main className="pt-20 pb-12 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-bold font-fredoka text-gray-800 mb-2">
                Fridge Recipe Finder
              </h1>
              <p className="text-gray-600 text-sm md:text-base">
                Tell me what&apos;s in your fridge, and I&apos;ll suggest recipes!
              </p>
            </motion.div>

            {/* Fridge with ingredients */}
            <div className="flex flex-col items-center">
              <FridgeIllustration>
                {/* Ingredient inputs as fridge shelves */}
                <div className="flex-1 flex flex-col gap-3 overflow-y-auto max-h-[340px] pr-2 custom-scrollbar">
                  <AnimatePresence>
                    {ingredients.map((ingredient, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20, height: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        className="relative"
                      >
                        {/* Shelf visual */}
                        <div
                          className="absolute -bottom-1 left-0 right-0 h-1.5 rounded-full"
                          style={{
                            background: 'linear-gradient(180deg, #d4d4d8 0%, #a1a1aa 100%)',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          }}
                        />
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={ingredient}
                            onChange={(e) => updateIngredient(index, e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder={`Ingredient ${index + 1}`}
                            className="flex-1 px-4 py-2.5 rounded-xl bg-white/90 border-2 border-white/50 text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
                            style={{
                              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)',
                            }}
                          />
                          {ingredients.length > 1 && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => removeIngredient(index)}
                              className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-lg font-bold hover:bg-red-200 transition-colors"
                            >
                              −
                            </motion.button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Add ingredient button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={addIngredient}
                  className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span className="text-lg">+</span>
                  Add Ingredient
                </motion.button>
              </FridgeIllustration>

              {/* Find Recipes button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={isLoading}
                className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-3"
              >
                {isLoading ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="text-xl"
                    >
                      🍳
                    </motion.span>
                    Finding Recipes...
                  </>
                ) : (
                  <>
                    <span className="text-xl">🍽️</span>
                    Find Recipes!
                  </>
                )}
              </motion.button>
            </div>

            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-center text-sm max-w-md mx-auto"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Recipe Results */}
            <AnimatePresence>
              {hasSearched && !isLoading && recipes.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-12"
                >
                  <h2 className="text-2xl md:text-3xl font-bold font-fredoka text-center text-gray-800 mb-6">
                    Here&apos;s what you can make!
                  </h2>
                  <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                    {recipes.map((recipe, index) => (
                      <RecipeCard key={index} recipe={recipe} index={index} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* No results message */}
            <AnimatePresence>
              {hasSearched && !isLoading && recipes.length === 0 && !error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-12 text-center text-gray-500"
                >
                  <span className="text-4xl mb-3 block">🤔</span>
                  <p>No recipes found. Try adding more ingredients!</p>
                </motion.div>
              )}
            </AnimatePresence>
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
