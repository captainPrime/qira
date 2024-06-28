export const getRandomProfileImage = () => {
  const randomImageId = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/200/200?random=${randomImageId}`;
};
