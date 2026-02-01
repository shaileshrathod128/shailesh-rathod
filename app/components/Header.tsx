"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:justify-start lg:space-x-10">
          {/* Logo */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 294"
                preserveAspectRatio="xMidYMid meet"
                className="h-10 w-10"
              >
                <circle
                  cx="400"
                  cy="147"
                  r="120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                />
              </svg>
              <span className="text-lg font-semibold hidden sm:inline">
                ghost
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              href="#"
              className="text-gray-600 font-medium text-sm hover:text-gray-900"
            >
              Product
            </Link>
            <Link
              href="#"
              className="text-gray-600 font-medium text-sm hover:text-gray-900"
            >
              Explore
            </Link>
            <Link
              href="#"
              className="text-gray-600 font-medium text-sm hover:text-gray-900"
            >
              Resources
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 font-medium text-sm hover:text-gray-900"
            >
              Pricing
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4 justify-end lg:flex-1 lg:w-0">
            <Link
              href="#"
              className="whitespace-nowrap text-sm text-gray-600 font-medium hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="whitespace-nowrap px-5 py-2.5 border border-transparent rounded-md text-sm font-semibold text-white bg-black hover:bg-gray-900 transition-colors"
            >
              Get Started — free
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <Link
              href="#"
              className="block text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Product
            </Link>
            <Link
              href="#"
              className="block text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Explore
            </Link>
            <Link
              href="#"
              className="block text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Resources
            </Link>
            <Link
              href="/pricing"
              className="block text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Pricing
            </Link>
            <hr className="my-4" />
            <Link
              href="#"
              className="block text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="block w-full px-5 py-2.5 border border-transparent rounded-full text-sm font-semibold text-white bg-black hover:bg-gray-900 text-center transition-colors"
            >
              Get Started — free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
