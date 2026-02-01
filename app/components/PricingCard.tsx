interface PricingCardProps {
  title: string;
  subtitle: string;
  price: number | string;
  billingPeriod: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

export default function PricingCard({
  title,
  subtitle,
  price,
  billingPeriod,
  features,
  buttonText,
  isPopular,
}: PricingCardProps) {
  return (
    <div className="bg-white ring-1 ring-inset ring-gray-200 pb-8 rounded-lg shadow-xl shadow-black/10 pt-6 flex flex-col h-full">
      <div className="flex-grow">
        <div className="px-6 lg:px-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
            {title}
          </h3>
          <p className="text-sm text-zinc-500 mb-4">{subtitle}</p>

          <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start">
            <div className="mt-3 flex items-center">
              <span className="text-zinc-400 font-normal text-4xl">$</span>
              <p className="text-5xl font-bold">{price}</p>
              <div className="ml-4">
                <p className="text-sm text-gray-900">{billingPeriod}</p>
                <p className="text-sm text-zinc-400">
                  Billed{" "}
                  {billingPeriod.includes("yearly") ? "yearly" : "monthly"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <h4 className="sr-only">Features</h4>
        <ul role="list" className="mt-7 px-6 lg:px-8">
          {features.map((feature, idx) => (
            <li key={idx} className="py-1.5 flex items-center">
              <svg
                className="text-gray-400 w-4 h-4 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2 text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 lg:px-8 mt-6">
        <button className="bg-black text-white w-full inline-block py-2 px-8 rounded-md shadow-sm text-center text-sm font-medium hover:bg-gray-900 transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
