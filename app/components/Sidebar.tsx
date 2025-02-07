'use client';

import { useState } from 'react';

interface SidebarProps {
  companies: string[];
  selectedCompanies: string[];
  onCompanyToggle: (company: string) => void;
}

export default function Sidebar({ companies, selectedCompanies, onCompanyToggle }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 bg-blue-500 text-white p-2 rounded-md"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          bg-white border-r w-64 shrink-0 shadow-lg
          md:block
          ${isOpen ? 'block fixed inset-y-0 left-0 z-40' : 'hidden'}
        `}
      >
        <div className="h-full flex flex-col">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6 text-gray-800">Providers</h2>
            <div className="space-y-2">
              {companies.map((company) => (
                <label
                  key={company}
                  className={`
                    flex items-center space-x-3 p-3 rounded-lg cursor-pointer
                    transition-all duration-200
                    ${
                      selectedCompanies.includes(company)
                        ? 'bg-blue-50 text-blue-600'
                        : 'hover:bg-gray-50 text-gray-700'
                    }
                  `}
                >
                  <input
                    type="checkbox"
                    checked={selectedCompanies.includes(company)}
                    onChange={() => onCompanyToggle(company)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium">{company}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
