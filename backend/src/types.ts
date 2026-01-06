export type AnalyzeRequest = {
  category: string;
  brands: string[];
};

export type BrandMetrics = {
  name: string;
  mentions: number;
  visibility: number;
  citationShare: number;
};

export type PromptResult = {
  prompt: string;
  response: string;
  mentionedBrands: string[];
};

export type AnalyzeResponse = {
  totalPrompts: number;
  brands: BrandMetrics[];
  promptResults: PromptResult[];
};
