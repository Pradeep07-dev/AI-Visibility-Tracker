import type { AnalyzeResponse } from "../types";

const analyzeVisibility = async (
  category: string,
  brands: string[]
): Promise<AnalyzeResponse> => {
  const result = await fetch(
    "https://ai-visibility-tracker-frxa.onrender.com/api/analyze",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category,
        brands,
      }),
    }
  );

  if (!result.ok) {
    throw new Error("Failed to analyze visibility.");
  }

  return result.json();
};

export default analyzeVisibility;
