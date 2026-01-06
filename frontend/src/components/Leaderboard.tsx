import type { BrandMetrics } from "../types";

type Props = {
  brands: BrandMetrics[];
  selectedBrand: string;
};

const Leaderboard = ({ brands, selectedBrand }: Props) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-xl font-bold mb-3">Brand Leaderboard</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Brand</th>
            <th className="p-2 border">Mentions</th>
            <th className="p-2 border">Visibility</th>
            <th className="p-2 border">Citation Share</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((b) => (
            <tr
              key={b.name}
              className={
                b.name === selectedBrand ? "bg-[#0171e2] text-white" : ""
              }
            >
              <td className="p-2 border-black border font-medium">{b.name}</td>
              <td className="p-2 border-black border">{b.mentions}</td>
              <td className="p-2 border-black border">{b.visibility}%</td>
              <td className="p-2 border-black border">{b.citationShare}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
