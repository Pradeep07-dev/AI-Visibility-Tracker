const countOccurrences = (text: string, word: string): number => {
  const regex = new RegExp(`\\b${word}\\b`, "gi");
  return (text.match(regex) || []).length;
};

export default countOccurrences;
