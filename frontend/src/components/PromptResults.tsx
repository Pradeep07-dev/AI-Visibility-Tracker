import type { PromptResult } from "../types";

type Props = {
  results: PromptResult[];
};

const PromptResults = ({ results }: Props) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-3">Prompt Breakdown</h2>

      {results.map((r, index) => (
        <div key={index} className="mb-4 border-b pb-3">
          <p className="font-medium">Prompt:</p>
          <p className="italic text-gray-700">{r.prompt}</p>

          <p className="mt-2 font-medium">AI Response:</p>
          <p className="text-gray-800">{r.response}</p>

          <p className="mt-2 text-sm text-gray-600">
            Mentioned Brands: {r.mentionedBrands.join(", ") || "None"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PromptResults;
