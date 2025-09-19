export const randomPasswordGenerator = () => {
  const name = ["bat$", "cat@", "mouse&", "tiger%"];
  const randomStr = name[Math.floor(Math.random() * name.length)];

  const no = Math.floor(Math.random() * 1000);

  return `${randomStr}${no}`;
};
