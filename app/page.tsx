"use client";

import Particles from "@/components/Particles/Particles";
import Image from "next/image";

export default function Home() {
  // 模拟数据 - 每个格子的表格数据（每个格子是一个数据集，包含多行数据）
  const gridData = [
    // 第一个格子 - Google Gemini系列
    [
      {
        time: "2025年03月25日",
        name: "Gemini 2.5 Pro Experimental\rgemini-2.5-pro-exp-03-25",
        description:
          "<model>-<generation>-<variation>-<version>\n" +
          "模型名称：Gemini\n" +
          "generation：2.5这一代\n" +
          "variation：pro变体\n" +
          "版本：实验版本exp-03-25",
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
    // 第四个格子 - xAI Grok系列
    [
      {
        time: "2025年02月18日",
        name: "Grok3",
        description: "",
      },
    ],
    // 第五个格子 - DeepSeek
    [
      {
        time: "2025年03月24日",
        name: "DeepSeek-V3-0324",
        description: "",
      },
      {
        time: "2025年01月20日",
        name: "DeepSeek-R1",
        description: "",
      },
    ],
    // 第六个格子 - Meta LLaMA系列
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
        <div className="w-full h-full border-1 border-gray-800 rounded-3xl overflow-hidden grid grid-cols-3 grid-rows-2">
          {/* 第一行第一列 - Gemini系列 */}
          <div className="border-r-1 border-b-1 border-gray-800 p-2 overflow-auto">
            <h3 className="font-bold text-lg mb-2 px-2 flex items-center">
              <span className="mr-2 flex items-center">
                <Image
                  src="/google-color.svg"
                  alt="Google Logo"
                  width={20}
                  height={20}
                  className="mr-1"
                />
              </span>
              <span className="text-[#4285F4]">Google Gemini</span>
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
                    <td className="p-2 border-b whitespace-pre-line">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 第一行第二列 - OpenAI GPT系列 */}
          <div className="border-r-1 border-b-1 border-gray-800 p-2 overflow-auto">
            <h3 className="font-bold text-lg mb-2 px-2 flex items-center">
              <span className="mr-2 flex items-center">
                <Image
                  src="/openai.svg"
                  alt="OpenAI Logo"
                  width={20}
                  height={20}
                  className="mr-1"
                />
              </span>
              <span className="text-[#10A37F]">OpenAI ChatGPT</span>
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
          <div className="border-b-1 border-gray-800 p-2 overflow-auto">
            <h3 className="font-bold text-lg mb-2 px-2 flex items-center">
              <span className="mr-2 flex items-center">
                <Image
                  src="/anthropic.svg"
                  alt="Anthropic Logo"
                  width={20}
                  height={20}
                  className="mr-1"
                />
              </span>
              <span className="text-[#7B61FF]">Anthropic Claude</span>
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

          {/* 第二行第一列 - xAI Grok系列 */}
          <div className="border-r-1 border-gray-800 p-2 overflow-auto">
            <h3 className="font-bold text-lg mb-2 px-2 flex items-center">
              <span className="mr-2 flex items-center">
                <Image
                  src="/xai.svg"
                  alt="xAI Logo"
                  width={20}
                  height={20}
                  className="mr-1"
                />
              </span>
              <span className="text-[#000000]">xAI Grok</span>
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

          {/* 第二行第二列 - DeepSeek */}
          <div className="border-r-1 border-gray-800 p-2 overflow-auto">
            <h3 className="font-bold text-lg mb-2 px-2 flex items-center">
              <span className="mr-2 flex items-center">
                <Image
                  src="/deepseek-color.svg"
                  alt="DeepSeek Logo"
                  width={20}
                  height={20}
                  className="mr-1"
                />
              </span>
              <span className="text-[#4D6BFE]">DeepSeek</span>
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

          {/* 第二行第三列 - Meta LLaMA系列 */}
          <div className="p-2 overflow-auto">
            <h3 className="font-bold text-lg mb-2 px-2 flex items-center">
              <span className="mr-2 flex items-center">
                <Image
                  src="/meta-color.svg"
                  alt="Meta Logo"
                  width={20}
                  height={20}
                  className="mr-1"
                />
              </span>
              <span className="text-[#0668E1]">Meta LLaMA</span>
            </h3>
            <table className="w-full text-sm table-fixed">
              <colgroup>
                <col className="w-[120px] min-w-[120px]" />
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
