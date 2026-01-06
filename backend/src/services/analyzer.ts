import type { BrandMetrics, AnalyzeResponse, PromptResult } from "../types";

import countOccurrences from "../utils/textUtils";

const analyzeResponses = (
  aiResponses: { prompt: string; response: string }[],
  brands: string[]
): AnalyzeResponse => {
  const brandStats: Record<string, BrandMetrics> = {};
  const promptResults: PromptResult[] = [];

  brands.forEach((brand) => {
    brandStats[brand] = {
      name: brand,
      mentions: 0,
      visibility: 0,
      citationShare: 0,
    };
  });

  let totalMentions = 0;

  for (const { prompt, response } of aiResponses) {
    const mentionedBrands: string[] = [];

    brands.forEach((brand) => {
      const count = countOccurrences(response, brand);
      if (count > 0) {
        mentionedBrands.push(brand);
        brandStats[brand].mentions += count;
        totalMentions += count;
      }
    });

    promptResults.push({
      prompt,
      response,
      mentionedBrands,
    });
  }

  brands.forEach((brand) => {
    const promptsMentioned = promptResults.filter((p) =>
      p.mentionedBrands.includes(brand)
    ).length;

    brandStats[brand].visibility = Math.round(
      (promptsMentioned / aiResponses.length) * 100
    );

    brandStats[brand].citationShare = totalMentions
      ? Math.round((brandStats[brand].mentions / totalMentions) * 100)
      : 0;
  });

  return {
    totalPrompts: aiResponses.length,
    brands: Object.values(brandStats),
    promptResults,
  };
};

export default analyzeResponses;
