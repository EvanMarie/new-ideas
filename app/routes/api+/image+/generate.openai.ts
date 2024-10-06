import { openaiImageGenerator } from "~/utils/openai.image.server";
import { uploadImageFileFromUrl } from "~/utils/images.server";
import { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  const _url = new URL(request.url);
  const pathname = _url.pathname;

  const formData = await request.formData();
  const prompt = formData.get("prompt") as string;
  const itemType = formData.get("itemType") as string;
  const itemId = formData.get("itemId") as string;
  // check both counters beforehand, because we don't want to attempt unless we know we can increment
  const response = await openaiImageGenerator({ prompt });
  const url = response.data ? response.data[0].url : null;

  console.log("image generated.  url: ", url);
  if (!url) {
    console.error("No image url returned from OpenAI");
    return { data: null, error: "No image url returned from OpenAI" };
  }
  let success = false;
  let retries = 3;
  while (!success && retries > 0) {
    try {
      const imageData = await uploadImageFileFromUrl({ url });
      success = true;
      return { data: imageData, error: null };
    } catch (e) {
      console.error("Error uploading image", e);
      await new Promise((resolve) => setTimeout(resolve, 500));
      retries--;
      if (retries === 0) {
        return { data: null, error: "Error uploading image" };
      }
    }
  }
};
