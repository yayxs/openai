'use client';

import { useState } from 'react';

interface SidebarProps {
  companies: string[];
  selectedCompanies: string[];
  onCompanyToggle: (company: string) => void;
  onSelectAll: () => void;
}

export default function Sidebar({
  companies,
  selectedCompanies,
  onCompanyToggle,
  onSelectAll,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 移动端菜单按钮 */}
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

      {/* 侧边栏 */}
      <aside
        className={`
          bg-white border-r w-64 shrink-0
          md:block
          ${isOpen ? 'block fixed inset-y-0 left-0 z-40' : 'hidden'}
        `}
      >
        <div className="h-full flex flex-col">
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4">模型提供方</h2>

            {/* 全选选项 */}
            <div className="mb-4">
              <label className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input
                  type="checkbox"
                  checked={selectedCompanies.length === companies.length}
                  onChange={onSelectAll}
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <span className="text-sm font-medium">全部</span>
              </label>
            </div>

            <div className="border-t mb-4"></div>

            {/* 公司列表 */}
            <div className="space-y-1">
              {companies.map((company) => (
                <label
                  key={company}
                  className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={selectedCompanies.includes(company)}
                    onChange={() => onCompanyToggle(company)}
                    className="h-4 w-4 text-blue-600 rounded"
                  />
                  <span className="text-sm">{company}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
