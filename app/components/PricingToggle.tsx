interface PricingToggleProps {
  isYearly: boolean;
  onChange: (isYearly: boolean) => void;
}

export default function PricingToggle({
  isYearly,
  onChange,
}: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-2 flex-nowrap">
      <button
        onClick={() => onChange(false)}
        className={`rounded-md border px-4 py-2 text-sm font-medium transition whitespace-nowrap ${
          !isYearly
            ? "border-gray-800 bg-gray-50 text-black"
            : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"
        }`}
      >
        Monthly billing
      </button>
      <button
        onClick={() => onChange(true)}
        className={`rounded-md border px-4 py-2 text-sm font-medium transition whitespace-nowrap ${
          isYearly
            ? "border-gray-800 bg-gray-50 text-black"
            : "border-gray-300 bg-white text-gray-600 hover:border-gray-400"
        }`}
      >
        Yearly billing
      </button>
    </div>
  );
}
