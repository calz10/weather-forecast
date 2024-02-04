import Button from "@/components/common/button/Button";

type WeatherTableProps = {
  renderItems: Array<{ label: string; value: string | number }>;
  onBack: () => void;
};

export const WeatherTable = ({ renderItems, onBack }: WeatherTableProps) => {
  if (!renderItems.length) return null;

  return (
    <div className="p-10 flex items-center justify-center flex-col">
      <table className="table-auto relative">
        <thead>
          <tr>
            {renderItems.map((h) => (
              <th className="border border-emerald-500 px-4 py-2 text-emerald-600" key={h.label}>{h.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {renderItems.map((h) => (
              <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium" key={h.label}>
                {String(h.value)}
              </td>
            ))}
          </tr>
        </tbody>
        <div className="absolute -bottom-20 right-0">
          <Button color="primary" onClick={onBack}>Back</Button>
        </div>
      </table>
    </div>
  );
};
