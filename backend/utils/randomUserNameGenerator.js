const randomNames = [
  "AlphaWolf@",
  "CodeNinja!",
  "SkyWalker%",
  "IronMan^",
  "DarkKnight&",
  "PixelMaster*",
  "ShadowHunter)",
  "CyberWizard(",
  "StormBreaker+",
  "NightCrawler=",
];

export const randomUserNameGenerator = (email, otp) => {
  const num = Math.floor(Math.random() * randomNames.length);

  const namePart = email.split("@")[0];
  console.log(`${randomNames[num]}_${namePart}_${otp}`);

  return `${randomNames[num]}_${namePart}_${otp}`;
};


