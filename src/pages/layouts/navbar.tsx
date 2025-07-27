import { ArrowDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-blue-900">C</div>
              <span className="sr-only">Logo</span>
            </div>
          </Link>

          {/* Action Buttons - Visible on all screens */}
          <div className="flex items-center gap-4">
            <Link
              href="/volunteer"
              className="text-blue-900 hover:text-blue-600 text-sm font-semibold transition-colors"
            >
              Volunteer
            </Link>
            <Link
              href="/donate"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 text-sm font-semibold transition-colors"
            >
              Donate
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden ml-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <ArrowDown className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Only language toggle */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                English / EN
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}