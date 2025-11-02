import { GoogleGenAI, Type, Modality } from "@google/genai";
import { QuizItem } from '../types';

if (!process.env.API_KEY) {
  // This is a placeholder check. The actual key is expected to be in the environment.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const getAi = () => new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateQuizData = async (category: string): Promise<QuizItem[]> => {
  const ai = getAi();
  const prompt = `Generate a list of 5 kid-friendly items for the category "${category}". For each item, provide:
  1. The English name.
  2. The Arabic name.
  3. A simple English transliteration of the Arabic name.
  4. A simple, descriptive prompt for an image generation model (e.g., "a cute cartoon red apple").
  5. An array of 4 multiple choice options, one correct and three plausible incorrect, for both Arabic and English.`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          items: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                english: { type: Type.STRING },
                arabic: { type: Type.STRING },
                transliteration: { type: Type.STRING },
                imagePrompt: { type: Type.STRING },
                options: {
                  type: Type.OBJECT,
                  properties: {
                    arabic: { type: Type.ARRAY, items: { type: Type.STRING } },
                    english: { type: Type.ARRAY, items: { type: Type.STRING } },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  const jsonResponse = JSON.parse(response.text);
  return jsonResponse.items as QuizItem[];
};

export const generateImage = async (prompt: string): Promise<string> => {
    const ai = getAi();
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: `${prompt}, cute, cartoon, for kids, white background`,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/png',
                aspectRatio: '1:1',
            },
        });
        const base64ImageBytes = response.generatedImages[0].image.imageBytes;
        return `data:image/png;base64,${base64ImageBytes}`;
    } catch (error) {
        console.error("Image generation failed:", error);
        return `https://picsum.photos/512/512?random=${Math.random()}`; // Fallback
    }
};


export const getArabicSpeech = async (text: string): Promise<string> => {
    const ai = getAi();
    // Providing a more explicit prompt can help the TTS model generate audio more reliably.
    const prompt = `Pronounce this Arabic word: ${text}`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' }, // A female voice
            },
        },
      },
    });
    
    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
        // Log the full response for easier debugging if the issue persists
        console.error("No audio data received. Full API response:", JSON.stringify(response, null, 2));
        throw new Error("No audio data received from API");
    }
    return base64Audio;
};