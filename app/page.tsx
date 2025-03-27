"use client";

import Particles from "@/components/Particles/Particles";

export default function Home() {
  return (
    <div className="h-screen w-screen font-[family-name:var(--font-geist-sans)] relative flex items-center justify-center overflow-hidden">
      {/* 粒子背景 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Particles
          particleColors={["#4F46E5", "#60A5FA", "#34D399"]}
          particleCount={250}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* 整体容器 - 带有圆角边框 */}
      <div className="relative z-10 w-screen h-screen p-4">
        {/* 内容区域 - 占满屏幕的2行3列网格 */}
        <div className="w-full h-full border-1 border-gray-800 rounded-3xl overflow-hidden grid grid-cols-3 grid-rows-2">
          {/* 第一行 */}
          <div className="border-r-1 border-b-1 border-gray-800"></div>
          <div className="border-r-1 border-b-1 border-gray-800"></div>
          <div className="border-b-1 border-gray-800"></div>

          {/* 第二行 */}
          <div className="border-r-1 border-gray-800"></div>
          <div className="border-r-1 border-gray-800"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
