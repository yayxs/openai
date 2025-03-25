"use client";

import { modelReleases } from "@/data/models";
import { format } from "date-fns";
import Link from "next/link";
import Particles from "@/components/Particles/Particles";

export default function ModelTimingPage() {
  // 导航项配置
  const navItems = [
    { label: "Awesome MCP", href: "/" },
    { label: "Model Timing", href: "/model-timing" },
  ];

  // 按日期排序的模型发布
  const sortedReleases = [...modelReleases].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return (
    <div className="min-h-screen bg-slate-100 font-[family-name:var(--font-geist-sans)] relative">
      {/* 粒子背景 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Particles
          particleColors={["#4F46E5", "#60A5FA", "#34D399"]}
          particleCount={120}
          particleSpread={12}
          speed={0.06}
          particleBaseSize={100}
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
                    item.href === "/model-timing"
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
                      item.href === "/model-timing"
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

      <main className="relative z-10 max-w-3xl mx-auto py-8 px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
          AI 模型发布时间线
        </h1>

        <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-7 shadow-sm border border-gray-100">
          <div className="space-y-10">
            {sortedReleases.map((release, index) => (
              <div key={index} className="relative pl-8">
                {/* 时间线垂直线 */}
                {index < sortedReleases.length - 1 && (
                  <div className="absolute top-3 left-[5px] bottom-[-40px] w-[1px] bg-gray-200"></div>
                )}

                {/* 时间线圆点 */}
                <div className="absolute top-1 left-0 w-[11px] h-[11px] rounded-full border-[1px] border-white bg-blue-500 z-10 shadow-sm"></div>

                {/* 日期 */}
                <div className="text-gray-500 text-sm font-medium mb-1.5">
                  {format(new Date(release.date), "yyyy年MM月dd日")}
                </div>

                {/* 标题 */}
                <div className="text-gray-900 font-semibold text-base mb-2">
                  {release.modelName}
                </div>

                {/* 内容 */}
                <div className="text-gray-600">
                  <div className="text-sm mb-2.5 leading-relaxed">
                    {release.description}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                      {release.company}
                    </span>

                    {release.isOpenSource && (
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                        开源
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
