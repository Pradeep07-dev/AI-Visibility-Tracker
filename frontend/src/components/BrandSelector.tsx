type Props = {
  brands: string[];
  selectedBrand: string;
  onChange: (brand: string) => void;
};

const BrandSelector = ({ brands, selectedBrand, onChange }: Props) => {
  return (
    <div className="my-4">
      <label className="font-medium mr-2">View as: </label>
      <select
        value={selectedBrand}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded"
      >
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandSelector;
