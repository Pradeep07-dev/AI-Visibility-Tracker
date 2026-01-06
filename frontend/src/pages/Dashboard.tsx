import { useState } from "react";
import InputForm from "../components/InputForm";
import type { AnalyzeResponse } from "../types";
import BrandSelector from "../components/BrandSelector";
import MetricsCards from "../components/MetricsCards";
import Leaderboard from "../components/Leaderboard";
import analyzeVisibility from "../api/analyzeVisibility";
import PromptSelector from "../components/PromptResults";

const Dashboard = () => {
  const [category, setCategory] = useState("");
  const [brands, setBrands] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AnalyzeResponse | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string>("Hubspot");

  const handleAnalyze = async () => {
    if (!category.trim() || !brands.length) {
      alert("Please enter a category");
      return;
    }

    try {
      setLoading(true);

      const data = await analyzeVisibility(category, brands);

      setData(data);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while analyzing AI visibility");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">AI Visibility Tracker</h1>
      <p>Track how often brands appear in AI generated answers.</p>

      <InputForm
        category={category}
        setCategory={setCategory}
        brands={brands}
        setBrands={setBrands}
        onAnalyze={handleAnalyze}
        loading={loading}
      />

      {data && (
        <>
          <BrandSelector
            brands={data.brands.map((b) => b.name)}
            selectedBrand={selectedBrand}
            onChange={setSelectedBrand}
          />

          <MetricsCards data={data} selectedBrand={selectedBrand} />

          <Leaderboard brands={data.brands} selectedBrand={selectedBrand} />

          <PromptSelector results={data.promptResults} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
