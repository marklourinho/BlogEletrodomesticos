import { GoogleGenAI } from "@google/genai";

export const generateSummary = async (content: string): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found in environment variables.");
    return "Chave de API não configurada. Por favor, adicione sua chave API para usar o recurso de IA.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Resuma o seguinte conteúdo sobre eletrodomésticos em um parágrafo curto, persuasivo e informativo (máximo 50 palavras) para um post de mídia social: \n\n ${content}`,
    });

    return response.text || "Não foi possível gerar o resumo.";
  } catch (error) {
    console.error("Erro ao gerar resumo:", error);
    return "Erro ao conectar com a IA. Tente novamente mais tarde.";
  }
};