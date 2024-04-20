import EMOJIS from "../constants/emojis";

const RandomEmojis = () => {
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
};

export default RandomEmojis;
