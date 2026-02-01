"use client";

import { useState } from "react";

interface ComparisonRow {
  name: string;
  starter?: string | boolean;
  publisher?: string | boolean;
  business?: string | boolean;
  custom?: string | boolean;
}

interface ComparisonCategory {
  category: string;
  rows: ComparisonRow[];
}

interface ComparisonSectionProps {
  categories: ComparisonCategory[];
}

const RenderCell = ({ value }: { value: string | boolean | undefined }) => {
  if (typeof value === "boolean") {
    return value ? (
      <svg
        className="mx-auto h-5 w-5 text-pink-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    ) : (
      <span className="text-gray-400">–</span>
    );
  }
  if (typeof value === "string") {
    return <span className="text-gray-900 text-sm font-medium">{value}</span>;
  }
  return <span className="text-gray-400">–</span>;
};

export default function ComparisonSection({
  categories,
}: ComparisonSectionProps) {
  const [selectedPlan, setSelectedPlan] = useState("publisher");

  return (
    <section className="border-t border-gray-200 py-16">
      <div className="w-full px-[4vmin]">
        <div className="mt-0 lg:mt-12 max-w-2xl lg:max-w-8xl mx-auto pb-10 px-6 lg:px-0">
          {/* Mobile Plan Selector - Hidden on large screens */}
          <div className="flex items-center justify-between lg:hidden mb-8 py-4">
            <label
              htmlFor="plan"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Plan
            </label>
            <div className="relative max-w-[240px] w-full">
              <select
                id="plan-selector"
                name="plan-selector"
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="h-9 min-h-[36px] w-full appearance-none rounded-lg border border-gray-300 outline-none py-1 pr-10 bg-white px-3 cursor-pointer shadow-sm hover:border-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="starter">Starter</option>
                <option value="publisher">Publisher</option>
                <option value="business">Business</option>
                <option value="custom">Custom</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Comparison Tables */}
          {categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="mt-10 first:mt-0 text-base font-semibold text-gray-900">
                {category.category}
              </h3>

              {/* Table Section */}
              <div className="mt-4 relative">
                {/* Desktop Headers */}
                <div className="w-full border-none lg:border-t border-gray-200 flex gap-8 items-stretch top-0 pt-px z-40 lg:z-50 mb-1">
                  <div className="-mt-px w-1/5 py-3 flex items-end">
                    <h4 className="mt-auto text-sm font-bold text-gray-900">
                      {category.category}
                    </h4>
                  </div>
                  <div
                    aria-hidden="true"
                    className="hidden lg:block -mt-px w-1/5"
                  >
                    <div className="border-transparent py-3 border-t-2">
                      <p className="text-gray-900 text-sm font-bold text-center">
                        Starter
                      </p>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="hidden lg:block -mt-px w-1/5"
                  >
                    <div className="border-transparent py-3 border-t-2">
                      <p className="text-black text-sm font-bold text-center">
                        Publisher
                      </p>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="hidden lg:block -mt-px w-1/5"
                  >
                    <div className="border-transparent py-3 border-t-2">
                      <p className="text-gray-900 text-sm font-bold text-center">
                        Business
                      </p>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="hidden lg:block -mt-px w-1/5"
                  >
                    <div className="border-transparent py-3 border-t-2">
                      <p className="text-gray-900 text-sm font-bold text-center">
                        Custom
                      </p>
                    </div>
                  </div>
                </div>

                {/* Background Cards */}
                <div className="relative">
                  <div
                    className="absolute inset-0 hidden lg:flex gap-8 items-stretch pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="w-1/5"></div>
                    <div className="w-1/5">
                      <div className="w-full h-full bg-white rounded-lg shadow"></div>
                    </div>
                    <div className="w-1/5">
                      <div className="w-full h-full bg-white rounded-lg shadow"></div>
                    </div>
                    <div className="w-1/5">
                      <div className="w-full h-full bg-white rounded-lg shadow"></div>
                    </div>
                    <div className="w-1/5">
                      <div className="w-full h-full bg-white rounded-lg shadow"></div>
                    </div>
                  </div>

                  {/* Table */}
                  <table className="relative w-full flex flex-col">
                    <caption className="sr-only">
                      {category.category} comparison
                    </caption>
                    <thead>
                      <tr className="text-left">
                        <th scope="col">
                          <span className="sr-only">Feature</span>
                        </th>
                        <th scope="col">
                          <span className="sr-only">Starter plan</span>
                        </th>
                        <th scope="col">
                          <span className="sr-only">Publisher plan</span>
                        </th>
                        <th scope="col">
                          <span className="sr-only">Business plan</span>
                        </th>
                        <th scope="col">
                          <span className="sr-only">Custom plan</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5">
                      {category.rows.map((row, rowIdx) => (
                        <tr key={rowIdx} className="flex gap-8 items-center">
                          <th
                            scope="row"
                            className="flex-1 py-3 text-left text-sm font-medium text-gray-600"
                          >
                            {row.name}
                          </th>
                          <td className="relative flex-1 py-0 text-center">
                            <span className="relative w-full h-full py-3">
                              <RenderCell value={row.starter} />
                            </span>
                          </td>
                          <td className="relative flex-1 py-0 text-center">
                            <span className="relative w-full h-full py-3">
                              <RenderCell value={row.publisher} />
                            </span>
                          </td>
                          <td className="relative flex-1 py-0 text-center">
                            <span className="relative w-full h-full py-3">
                              <RenderCell value={row.business} />
                            </span>
                          </td>
                          <td className="relative flex-1 py-0 text-center">
                            <span className="relative w-full h-full py-3">
                              <RenderCell value={row.custom} />
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
