"use client";

import Link from "next/link";
import Particles from "@/components/Particles/Particles";

export default function Home() {
  // 导航项配置
  const navItems = [
    { label: "Awesome MCP", href: "/" },
    { label: "Model Timing", href: "/model-timing" },
  ];

  return (
    <div className="min-h-screen bg-slate-100 font-[family-name:var(--font-geist-sans)] relative">
      {/* 粒子背景 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Particles
          particleColors={["#4F46E5", "#60A5FA", "#34D399"]}
          particleCount={150}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* 简单的头部导航栏 */}
      <header className="relative z-10 bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center sm:justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
              >
                Awesome MCP
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-16 ${
                    item.href === "/"
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* 移动端下拉菜单 */}
            <div className="flex sm:hidden">
              <div className="flex space-x-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md ${
                      item.href === "/"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto py-8 px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
          Awesome MCP
        </h1>
      </main>

      <footer className="relative z-10 py-6 text-center text-sm text-gray-500"></footer>
    </div>
  );
}
