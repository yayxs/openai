"use client";

import Particles from "@/components/Particles/Particles";

export default function Home() {
  // 模拟数据 - 每个格子的表格数据（每个格子是一个数据集，包含多行数据）
  const gridData = [
    // 第一个格子 - Google Gemini系列
    [
      {
        time: "2025年03月25日",
        name: "Gemini 2.5 Pro Experimental\rgemini-2.5-pro-exp-03-25",
        description:
          "<model>-<generation>-<variation>-<version>\rGemini-2.5这一代-pro变体-实验版本exp-03-25",
      },
    ],
    // 第二个格子 - OpenAI GPT系列
    [
      {
        time: "2020年6月11日",
        name: "gpt-3",
        description: "1750亿参数的大型语言模型",
      },
    ],
    // 第三个格子 - Anthropic Claude系列
    [
      {
        time: "2023年3月",
        name: "claude-1",
        description: "Anthropic首个商用模型",
      },
    ],
    // 第四个格子 - Meta LLaMA系列
    [
      {
        time: "2023年2月24日",
        name: "llama-1-7b/13b/70b",
        description: "Meta首个开源大型语言模型系列",
      },
    ],
    // 第五个格子 - 国产模型系列
    [
      {
        time: "2023年8月",
        name: "baichuan-2-7b/13b",
        description: "百川智能发布的开源大语言模型",
      },
    ],
    // 第六个格子 - 模型命名规律总结
    [],
  ];

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
        <div className="w-full h-full border-2 border-gray-800 rounded-3xl overflow-hidden grid grid-cols-3 grid-rows-2">
          {/* 第一行第一列 - Gemini系列 */}
          <div className="border-r-2 border-b-2 border-gray-800 p-2 overflow-auto">
            <h3 className="font-bold text-lg mb-2 px-2 text-indigo-800">
              Google Gemini
            </h3>
            <table className="w-full text-sm table-fixed">
              <colgroup>
                <col className="w-[120px] min-w-[120px]" />
                <col className="w-[250px] min-w-[250px]" />
                <col />
              </colgroup>
              <tbody>
                {gridData[0]?.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-2 border-b whitespace-nowrap">
                      {item.time}
                    </td>
                    <td className="p-2 border-b font-medium break-words">
                      {item.name}
                    </td>
                    <td className="p-2 border-b">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 第一行第二列 - OpenAI GPT系列 */}
          <div className="border-r-2 border-b-2 border-gray-800 p-2 overflow-auto">
            <h3 className="font-bold text-lg mb-2 px-2 text-green-800">
              OpenAI GPT 系列
            </h3>
            <table className="w-full text-sm table-fixed">
              <colgroup>
                <col className="w-[120px] min-w-[120px]" />
                <col className="w-[250px] min-w-[250px]" />
                <col />
              </colgroup>
              <tbody>
                {gridData[1]?.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-2 border-b whitespace-nowrap">
                      {item.time}
                    </td>
                    <td className="p-2 border-b font-medium break-words">
                      {item.name}
                    </td>
                    <td className="p-2 border-b">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 第一行第三列 - Anthropic Claude系列 */}
          <div className="border-b-2 border-gray-800 p-2 overflow-auto">
            <h3 className="font-bold text-lg mb-2 px-2 text-purple-800">
              Anthropic Claude 系列
            </h3>
            <table className="w-full text-sm table-fixed">
              <colgroup>
                <col className="w-[120px] min-w-[120px]" />
                <col className="w-[250px] min-w-[250px]" />
                <col />
              </colgroup>
              <tbody>
                {gridData[2]?.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-2 border-b whitespace-nowrap">
                      {item.time}
                    </td>
                    <td className="p-2 border-b font-medium break-words">
                      {item.name}
                    </td>
                    <td className="p-2 border-b">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 第二行第一列 - Meta LLaMA系列 */}
          <div className="border-r-2 border-gray-800 p-2 overflow-auto">
            <h3 className="font-bold text-lg mb-2 px-2 text-blue-800">
              Meta LLaMA 系列
            </h3>
            <table className="w-full text-sm table-fixed">
              <colgroup>
                <col className="w-[120px] min-w-[120px]" />
                <col className="w-[250px] min-w-[250px]" />
                <col />
              </colgroup>
              <tbody>
                {gridData[3]?.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-2 border-b whitespace-nowrap">
                      {item.time}
                    </td>
                    <td className="p-2 border-b font-medium break-words">
                      {item.name}
                    </td>
                    <td className="p-2 border-b">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 第二行第二列 - 国产模型系列 */}
          <div className="border-r-2 border-gray-800 p-2 overflow-auto">
            <h3 className="font-bold text-lg mb-2 px-2 text-red-800">
              中国开源模型
            </h3>
            <table className="w-full text-sm table-fixed">
              <colgroup>
                <col className="w-[120px] min-w-[120px]" />
                <col className="w-[250px] min-w-[250px]" />
                <col />
              </colgroup>
              <tbody>
                {gridData[4]?.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-2 border-b whitespace-nowrap">
                      {item.time}
                    </td>
                    <td className="p-2 border-b font-medium break-words">
                      {item.name}
                    </td>
                    <td className="p-2 border-b">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 第二行第三列 - 模型命名规律 */}
          <div className="p-2 overflow-auto">
            <h3 className="font-bold text-lg mb-2 px-2 text-gray-800">
              模型命名规律
            </h3>
            <table className="w-full text-sm table-fixed">
              <colgroup>
                <col className="w-[100px] min-w-[100px]" />
                <col className="w-[250px] min-w-[250px]" />
                <col />
              </colgroup>
              <tbody>
                {gridData[5]?.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-2 border-b whitespace-nowrap">
                      {item.time}
                    </td>
                    <td className="p-2 border-b font-medium break-words">
                      {item.name}
                    </td>
                    <td className="p-2 border-b">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
