
import { GoogleGenAI } from "@google/genai";

export async function generateNightHype(mood: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Eres el community manager de Seven Restobar. Crea una frase corta, potente y muy nocturna para motivar a la gente a venir hoy. El ambiente es: ${mood}. Máximo 15 palabras. Usa emojis nocturnos.`,
      config: {
        temperature: 0.9,
      }
    });
    return response.text || "¡Prepárate para la mejor noche de tu vida! ⚡️";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "¡La noche te espera en Seven Restobar! 🔥";
  }
}
