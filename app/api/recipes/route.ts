import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from "@google/genai";

export interface Recipe {
  name: string;
  reason: string;
  additionalIngredients: string[];
  steps: string[];
}

export interface RecipeResponse {
  recipes: Recipe[];
}

export async function POST(request: NextRequest) {
  try {
    const { ingredients } = await request.json();

    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
      return NextResponse.json(
        { error: 'Please provide at least one ingredient' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key is not configured. Please add GEMINI_API_KEY to your .env.local file.' },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const ingredientList = ingredients.filter((i: string) => i.trim()).join(', ');

    const systemPrompt = `You are an expert home cooking assistant. Your job is to suggest REAL, EXISTING recipes based on the ingredients the user provides.

CRITICAL RULES - RECIPE VALIDITY:
- ONLY suggest recipes that are real, commonly recognized dishes found in actual cookbooks or cooking references.
- Do NOT invent recipe names, combinations, or dishes that don't exist in real-world cooking.
- Every recipe must be a dish that home cooks would recognize by name.
- If the available ingredients cannot realistically make a proper dish, do NOT force a suggestion.
- Accuracy and realism are MORE IMPORTANT than quantity. It is better to suggest 1-2 excellent, valid recipes than 5 forced or invented ones.

LANGUAGE HANDLING:
Detect the language of the user's ingredients and respond ENTIRELY in the SAME language. If ingredients are in Korean, respond entirely in Korean. If in English, respond in English.

Return your response as valid JSON in this exact format:
{
  "recipes": [
    {
      "name": "Recipe Name",
      "reason": "Brief explanation of why this recipe works with the given ingredients",
      "additionalIngredients": ["optional ingredient 1", "optional ingredient 2"],
      "steps": ["Step 1: Do this", "Step 2: Then do that", "Step 3: Finally..."]
    }
  ]
}

RECIPE QUALITY GUIDELINES:
- Suggest 1-5 recipes depending on how well the ingredients support real dishes. Fewer is fine if ingredients are limited.
- Focus on achievable home cooking (not restaurant-level complexity).
- Keep additional ingredients minimal (common pantry staples only: salt, pepper, oil, basic spices).
- Cooking steps must be thorough and instructive:
  * Specify the order of operations clearly
  * Include heat levels (e.g., medium-high heat, low simmer)
  * Mention approximate cooking times where helpful
  * Add brief tips on technique (e.g., "stir frequently to prevent sticking", "let rest for 5 minutes before slicing")
  * Explain why certain steps matter when it helps understanding
- Steps should be beginner-friendly but detailed enough to actually follow and succeed.`;

    const userPrompt = `I have these ingredients: ${ingredientList}

What can I cook with these?`;

    const completion = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      config: {
        systemInstruction: systemPrompt,
      },
      contents: userPrompt,
    });

    const content = completion.text;

    if (!content) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 }
      );
    }

    // Clean up the response - remove markdown code blocks if present
    const cleanedContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const recipeData: RecipeResponse = JSON.parse(cleanedContent);

    return NextResponse.json(recipeData);
  } catch (error) {
    console.error('Recipe API Error:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Gemini API error: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to generate recipes' },
      { status: 500 }
    );
  }
}
