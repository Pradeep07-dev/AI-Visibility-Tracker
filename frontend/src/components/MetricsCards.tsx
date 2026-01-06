import type { AnalyzeResponse } from "../types";

type Props = {
  data: AnalyzeResponse;
  selectedBrand: string;
};

const MetricsCards = ({ data, selectedBrand }: Props) => {
  const brand = data.brands.find((b) => b.name === selectedBrand);

  if (!brand) return null;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow">
        <p className="text-gray-500">Total Prompts</p>
        <p className="text-2xl font-bold">{data.totalPrompts}</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p className="text-gray-500">AI Visibility</p>
        <p className="text-2xl font-bold">{brand.visibility}%</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p className="text-gray-500">Citation Share</p>
        <p className="text-2xl font-bold">{brand.citationShare}%</p>
      </div>
    </div>
  );
};

export default MetricsCards;
