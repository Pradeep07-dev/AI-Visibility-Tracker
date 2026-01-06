const buildPrompts = (category: string): string[] => {
  return [
    `What are the best ${category} for startups?`,
    `Top ${category} for small businesses`,
    `Best alternatives in ${category}`,
    `Most popular ${category} tools`,
    `Recommended ${category} for early-stage companies`,
    `Pros and cons of ${category} tools`,
  ];
};

export default buildPrompts;
