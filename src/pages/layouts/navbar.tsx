import { ArrowDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    equipe: false,
    apropos: false
  });

  const toggleDropdown = (menu:any) => {
    setDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navbar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-blue-900">C</div>
              <span className="sr-only">Logo</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center gap-6 text-sm font-semibold text-gray-800">
              <div className="relative group">
                <button 
                  onClick={() => toggleDropdown('equipe')}
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  ÉQUIPE <span className="ml-1">▾</span>
                </button>
                {dropdownOpen.equipe && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link href="/equipe/membre1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Membre 1</Link>
                    <Link href="/equipe/membre2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Membre 2</Link>
                  </div>
                )}
              </div>
              
              <div className="relative group">
                <button 
                  onClick={() => toggleDropdown('apropos')}
                  className="flex items-center hover:text-blue-600 transition-colors"
                >
                  À PROPOS <span className="ml-1">▾</span>
                </button>
                {dropdownOpen.apropos && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link href="/apropos/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notre mission</Link>
                    <Link href="/apropos/histoire" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Notre histoire</Link>
                  </div>
                )}
              </div>
              
              <Link href="/medias" className="hover:text-blue-600 transition-colors">MÉDIAS</Link>
              <Link href="/boutique" className="hover:text-blue-600 transition-colors">BOUTIQUE</Link>
            </nav>

            {/* Desktop Actions */}
            <div className="flex items-center gap-4">
              <Link href="/benevole" className="text-blue-900 hover:text-blue-600 text-sm font-semibold transition-colors hidden lg:block">Devenez bénévole</Link>
              <Link href="/adhesion" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm font-semibold transition-colors">Adhérez</Link>
              <Link href="/don" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 text-sm font-semibold transition-colors">Donnez</Link>
              <Link href="#" className="text-blue-900 hover:text-blue-600 text-sm font-semibold transition-colors">EN</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="border-b border-gray-200 pb-3">
              <button 
                onClick={() => toggleDropdown('equipe')}
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                ÉQUIPE <span>{dropdownOpen.equipe ? '▴' : '▾'}</span>
              </button>
              {dropdownOpen.equipe && (
                <div className="pl-4 py-2 space-y-2">
                  <Link href="/equipe/membre1" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">Membre 1</Link>
                  <Link href="/equipe/membre2" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">Member 2</Link>
                </div>
              )}
            </div>
            
            <div className="border-b border-gray-200 pb-3">
              <button 
                onClick={() => toggleDropdown('apropos')}
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              >
                À PROPOS <span>{dropdownOpen.apropos ? '▴' : '▾'}</span>
              </button>
              {dropdownOpen.apropos && (
                <div className="pl-4 py-2 space-y-2">
                  <Link href="/apropos/mission" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">Notre mission</Link>
                  <Link href="/apropos/histoire" className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">Notre histoire</Link>
                </div>
              )}
            </div>
            
            <Link href="/medias" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 border-b border-gray-200">MÉDIAS</Link>
            <Link href="/boutique" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 border-b border-gray-200">BOUTIQUE</Link>
            <Link href="/benevole" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 border-b border-gray-200">Devenez bénévole</Link>
            
            <div className="pt-2 grid grid-cols-2 gap-2">
              <Link href="/adhesion" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm font-medium text-center">Adhérez</Link>
              <Link href="/don" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 text-sm font-medium text-center">Donnez</Link>
              <Link href="#" className="text-blue-900 hover:text-blue-600 text-sm font-medium text-center col-span-2">English / EN</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}