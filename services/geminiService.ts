import { GoogleGenAI, Modality, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getArabicSpeech = async (text: string): Promise<string | null> => {
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text: `Say this in a friendly, clear voice for a child: ${text}` }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' }, // A friendly voice for kids
                    },
                },
            },
        });

        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (!base64Audio) {
            console.error("No audio data received from API. Full response:", JSON.stringify(response, null, 2));
            return null;
        }
        return base64Audio;

    } catch (error) {
        console.error("Error generating speech:", error);
        return null;
    }
};
