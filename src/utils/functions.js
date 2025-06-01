// export const getImageURLHakkimizda = (imageName) => {
//   return new URL(`${process.env.PUBLIC_URL}/projects/${imageName}`, import.meta.url).href;
// };

export const getImageURL = (imageName) => {
  return `${process.env.PUBLIC_URL}/projects/${imageName}`;
};
