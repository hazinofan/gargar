import { ArrowDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="relative w-16 h-16 md:w-28 md:h-28">
              <Image
                src="/assets/logo.png"
                alt="Gar Gar logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Action Buttons - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/volunteer"
              className="bg-[#49a0a7] text-white px-4 py-2 rounded hover:bg-[#436e6b] text-sm md:text-base font-semibold transition-colors"
            >
              Volunteer
            </Link>
            <Link
              href="/donate"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 text-sm md:text-base font-semibold transition-colors"
            >
              Donate
            </Link>
            <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3">
              <Link
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                English / EN
              </Link>
            </div>
          </div>

          {/* Mobile menu button - Always visible on mobile */}
          <div className="md:hidden ml-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <ArrowDown className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Shows all navigation options */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
              <Link
                href="/volunteer"
                className="block w-full text-center bg-[#49a0a7] text-white px-4 py-2 rounded hover:bg-[#436e6b] font-medium transition-colors"
              >
                Volunteer
              </Link>
              <Link
                href="/donate"
                className="block w-full text-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 font-medium transition-colors"
              >
                Donate
              </Link>
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