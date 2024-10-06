import OpenAI from "openai";

const openai = new OpenAI();

export const openaiImageGenerator = async ({ prompt }: { prompt: string }) => {
  const imageUrl = await openai.images.generate({
    model: "dall-e-3",
    prompt,
    size: "1024x1024",
  });
  return imageUrl;
};
