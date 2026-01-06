type Props = {
  category: string;
  setCategory: (value: string) => void;
  brands: string[];
  setBrands: (brands: string[]) => void;
  onAnalyze: () => void;
  loading: boolean;
};

const InputForm = ({
  category,
  setCategory,
  setBrands,
  onAnalyze,
  brands,
  loading,
}: Props) => {
  return (
    <div className="bg-white p-4 rounded shadow mt-4 mb-6">
      <div className="mb-3">
        <label className="block font-medium">Category</label>
        <input
          type="text"
          placeholder="e.g. CRM software"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>

      <div className="mb-3">
        <label className="block font-medium">Brands</label>
        <input
          type="text"
          placeholder="e.g. Salesforce, HubSpot, Pipedrive"
          onChange={(e) =>
            setBrands(
              e.target.value
                .split(",")
                .map((b) => b.trim())
                .filter(Boolean)
            )
          }
          className="border p-2 w-full rounded"
        />
      </div>

      <button
        onClick={onAnalyze}
        disabled={loading || !category.trim() || brands.length === 0}
        className="bg-[#0171e2] text-white px-4 py-2 rounded cursor-pointer disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Analyze Visibility"}
      </button>
    </div>
  );
};

export default InputForm;
