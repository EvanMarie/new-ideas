import { supabaseClient } from "./supabase.server";
import { v4 as uuid } from "uuid";
import { writeFile } from "fs/promises";

const imageBucket = "darkVioletPublic";
const imageFolder = "landing/";
const imageBaseUrl =
  "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/";

export const uploadImageFile = async (file: File) => {
  const id = uuid();
  const { error } = await supabaseClient.storage
    .from(imageBucket)
    .upload(imageFolder + id, file, {
      cacheControl: "3600",
      upsert: true,
    });
  if (error) {
    throw error;
  }

  const newImageUrl = imageBaseUrl + id;
  return { url: newImageUrl, id };
};
// openAI provides a url to the image, so we need to download it and then upload it to supabase
export const uploadImageFileFromUrl = async ({ url }: { url: string }) => {
  console.log("retrieving image from url", url);
  const imageData = await fetch(url);
  // convert imageData into a file buffer that can be uploaded with supabase.storage.from().upload()
  const buffer = await imageData.arrayBuffer();
  const file = new File([buffer], "image", { type: "image/*" });

  return await uploadImageFile(file);
};

export const saveImageFileFromUrl = async ({ url }: { url: string }) => {
  console.log("retrieving image from url", url);
  const imageData = await fetch(url);
  // convert imageData into a file buffer that can be uploaded with supabase.storage.from().upload()
  const buffer = await imageData.arrayBuffer();
  const dataView = new DataView(buffer);
  const file = new File([dataView], "image", { type: "image/*" });
  await writeFile("temp-image", dataView);
};

export const deleteImageFile = async (id: string) => {
  const { error } = await supabaseClient.storage
    .from(imageBucket)
    .remove([imageFolder + id]);
  if (error) {
    throw error;
  }
};
