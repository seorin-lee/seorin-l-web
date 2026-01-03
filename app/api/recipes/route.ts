import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

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

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured. Please add OPENAI_API_KEY to your .env.local file.' },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const ingredientList = ingredients.filter((i: string) => i.trim()).join(', ');

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a helpful home cooking assistant. Your job is to suggest simple, home-friendly recipes based on ingredients the user has.

IMPORTANT: Detect the language of the user's ingredients and respond in the SAME language. If ingredients are in Korean, respond entirely in Korean. If in English, respond in English.

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

Guidelines:
- Suggest 3-7 recipes depending on ingredient variety
- Focus on simple, achievable home cooking (not restaurant-level complexity)
- Keep additional ingredients minimal (common pantry items only)
- Steps should be clear and beginner-friendly
- If ingredients are limited, suggest simpler recipes`
        },
        {
          role: 'user',
          content: `I have these ingredients: ${ingredientList}

What can I cook with these?`
        }
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const content = completion.choices[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 }
      );
    }

    const recipeData: RecipeResponse = JSON.parse(content);

    return NextResponse.json(recipeData);
  } catch (error) {
    console.error('Recipe API Error:', error);

    if (error instanceof OpenAI.APIError) {
      return NextResponse.json(
        { error: `OpenAI API error: ${error.message}` },
        { status: error.status || 500 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to generate recipes' },
      { status: 500 }
    );
  }
}
