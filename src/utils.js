export const getImageUrl = (path) => {
  if (!path) {
    console.error("Image path is undefined");
    return "";
  }
  return new URL(`/assets/${path}`, import.meta.url).href;
};
