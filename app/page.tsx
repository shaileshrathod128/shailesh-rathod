"use client";

import { useState } from "react";
import Header from "./components/Header";
import PricingCard from "./components/PricingCard";
import PricingToggle from "./components/PricingToggle";
import Footer from "./components/Footer";
import ComparisonSection from "./components/ComparisonSection";

const pricingData = {
  monthly: [
    {
      title: "STARTER",
      subtitle: "For solo blogs & newsletters",
      price: 15,
      billingPeriod: "USD / mo",
      features: [
        "Your own website",
        "Free custom domain",
        "Email newsletter",
        "Simple design settings",
        "1,000 members",
      ],
      buttonText: "Try for free",
    },
    {
      title: "PUBLISHER",
      subtitle: "For custom publications",
      price: 29,
      billingPeriod: "USD / mo",
      features: [
        "3 staff users",
        "Custom themes",
        "8,000+ integrations",
        "Paid subscriptions",
        "Advanced analytics",
        "1,000 members",
      ],
      buttonText: "Try for free",
      isPopular: true,
    },
    {
      title: "BUSINESS",
      subtitle: "For teams scaling up",
      price: 199,
      billingPeriod: "USD / mo",
      features: [
        "15 staff users",
        "Priority support",
        "Higher usage limits",
        "Early access to features",
        "10,000 members",
      ],
      buttonText: "Try for free",
    },
    {
      title: "CUSTOM",
      subtitle: "For more complex needs",
      price: "Custom",
      billingPeriod: "",
      features: [
        "Unlimited staff users",
        "Advanced configurations",
        "Dedicated IP address",
        "99.9% uptime SLA",
        "Unlimited members",
      ],
      buttonText: "Get in touch",
    },
  ],
  yearly: [
    {
      title: "STARTER",
      subtitle: "For solo blogs & newsletters",
      price: 150,
      billingPeriod: "USD / year",
      features: [
        "Your own website",
        "Free custom domain",
        "Email newsletter",
        "Simple design settings",
        "1,000 members",
      ],
      buttonText: "Try for free",
    },
    {
      title: "PUBLISHER",
      subtitle: "For custom publications",
      price: 290,
      billingPeriod: "USD / year",
      features: [
        "3 staff users",
        "Custom themes",
        "8,000+ integrations",
        "Paid subscriptions",
        "Advanced analytics",
        "1,000 members",
      ],
      buttonText: "Try for free",
      isPopular: true,
    },
    {
      title: "BUSINESS",
      subtitle: "For teams scaling up",
      price: 1990,
      billingPeriod: "USD / year",
      features: [
        "15 staff users",
        "Priority support",
        "Higher usage limits",
        "Early access to features",
        "10,000 members",
      ],
      buttonText: "Try for free",
    },
    {
      title: "CUSTOM",
      subtitle: "For more complex needs",
      price: "Custom",
      billingPeriod: "",
      features: [
        "Unlimited staff users",
        "Advanced configurations",
        "Dedicated IP address",
        "99.9% uptime SLA",
        "Unlimited members",
      ],
      buttonText: "Get in touch",
    },
  ],
};

const comparisonFeatures = [
  {
    category: "Website",
    rows: [
      {
        name: "Staff users",
        website: "1",
        starter: "1",
        publisher: "3",
        business: "15",
        custom: "Unlimited",
      },
      {
        name: "File uploads",
        website: "5mb",
        starter: "5mb",
        publisher: "100mb",
        business: "250mb",
        custom: "1gb",
      },
      {
        name: "Whitelabel branding",
        website: true,
        starter: true,
        publisher: true,
        business: true,
        custom: true,
      },
      {
        name: "Free custom domain",
        website: true,
        starter: true,
        publisher: true,
        business: true,
        custom: true,
      },
      {
        name: "Internationalization",
        website: true,
        starter: true,
        publisher: true,
        business: true,
        custom: true,
      },
      {
        name: "Design settings",
        website: true,
        starter: true,
        publisher: true,
        business: true,
        custom: true,
      },
      {
        name: "Marketplace themes",
        website: false,
        starter: false,
        publisher: true,
        business: true,
        custom: true,
      },
      {
        name: "Custom themes",
        website: false,
        starter: false,
        publisher: true,
        business: true,
        custom: true,
      },
    ],
  },
  {
    category: "Store",
    rows: [
      {
        name: "Product listings",
        website: false,
        starter: false,
        publisher: false,
        business: false,
        custom: true,
      },
      {
        name: "Paid memberships",
        website: false,
        starter: false,
        publisher: true,
        business: true,
        custom: true,
      },
    ],
  },
  {
    category: "Publisher",
    rows: [
      {
        name: "Published members",
        website: "Unlimited",
        starter: "1,000",
        publisher: "1,000",
        business: "10,000",
        custom: "Unlimited",
      },
      {
        name: "Newsletters",
        website: "Unlimited",
        starter: "Unlimited",
        publisher: "Unlimited",
        business: "Unlimited",
        custom: "Unlimited",
      },
      {
        name: "Newsletter signup forms",
        website: true,
        starter: true,
        publisher: true,
        business: true,
        custom: true,
      },
    ],
  },
];

const RenderCell = ({ value }: { value: string | boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <svg
        className="mx-auto h-4 w-4 text-pink-600"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    ) : (
      <span className="text-gray-300">—</span>
    );
  }
  return (
    <span
      className={
        value === "Unlimited" ? "text-pink-600 font-medium" : "text-gray-700"
      }
    >
      {value}
    </span>
  );
};

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const currentPricing = isYearly ? pricingData.yearly : pricingData.monthly;

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="border-b border-gray-200 py-14">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative max-w-8xl mx-auto pb-[12vmin] pt-[8vmin] text-center">
              <span className="inline-block py-2 px-4 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">
                Ghost(Pro) plans &amp; pricing
              </span>
              <h1 className="mt-4 text-3xl sm:text-5xl leading-tight max-w-2xl mx-auto tracking-tight">
                Launch your creative business
              </h1>
              <p className="mt-4 max-w-sm mx-auto lg:max-w-none text-xl text-slate-500 mt-2">
                No payment fees — upgrade, downgrade, or cancel anytime.
              </p>
            </div>

            {/* Three Column Layout */}
            <div className="lg:max-w-8xl mx-auto relative flex flex-col text-center lg:text-left lg:flex-row justify-between items-center gap-10">
              {/* Left: Audience Info */}
              <div className="flex flex-col relative justify-center leading-tight text-lg font-semibold flex-shrink-0 w-[286px]">
                <div>Based on an audience up to</div>
                <div>
                  <span className="text-pink-900">1,000</span>
                  <span className="ml-1">members</span>
                </div>
              </div>

              {/* Center: Slider */}
              <div className="w-full flex flex-col items-center justify-center mt-8 lg:mt-0">
                <div className="relative inline-flex self-start items-center justify-center p-2 text-sm min-w-[60px] font-semibold text-white bg-pink-900 rounded-full">
                  <span className="relative z-20 leading-tight">1,000</span>
                </div>
                <div className="w-full flex items-center justify-center gap-3 font-bold text-sm mt-4">
                  <span>0</span>
                  <input
                    className="max-w-md"
                    type="range"
                    id="members"
                    name="members"
                    min="0"
                    max="9"
                    defaultValue="0"
                  />
                  <span>100k+</span>
                </div>
              </div>

              {/* Right: Billing Toggle */}
              <div className="flex gap-2">
                <PricingToggle isYearly={isYearly} onChange={setIsYearly} />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-5 md:grid-cols-4">
              {currentPricing.map((plan, idx) => (
                <PricingCard key={idx} {...plan} />
              ))}
            </div>
          </div>
        </section>

        <ComparisonSection categories={comparisonFeatures} />

        {/* Dark CTA Section */}
        <section className="border-t border-gray-200 bg-gray-900 py-20 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <p className="text-xs font-medium uppercase tracking-wider text-pink-600">
              Last week, 9,975 brand new publications
            </p>
            <h2 className="mt-3 text-4xl font-bold text-white">
              got started with Ghost.
            </h2>
            <p className="mt-3 text-3xl font-bold text-white">
              Today, it's your turn.
            </p>
            <button className="mt-8 rounded-lg bg-pink-600 px-7 py-2.5 text-xl font-medium text-white hover:bg-pink-700 transition">
              Start publishing now →
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
