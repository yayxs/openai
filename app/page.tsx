"use client";

import Particles from "@/components/Particles/Particles";
import Image from "next/image";
import Link from "next/link";

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
        time: "2025年03月19日",
        name: "o1-pro/o1-pro-2025-03-19",
        description: "",
      },
      {
        time: "2025年02月27日",
        name: "gpt-4.5-preview/gpt-4.5-preview-2025-02-27",
        description: "最大最能干聊天模型",
      },
      {
        time: "2025年01月31日",
        name: "o3-mini/o3-mini-2025-01-31",
        description: "",
      },
      {
        time: "2024年12月17日",
        name: "o1/o1-2024-12-17",
        description: "",
      },
      {
        time: "2024年11月20日",
        name: "gpt-4o/gpt-4o-2024-11-20",
        description: "",
      },
      {
        time: "2024年09月12日",
        name: "o1-mini/o1-mini-2024-09-12",
        description: "",
      },
      {
        time: "2024年09月12日",
        name: "o1-preview-2024-09-12",
        description: "",
      },
      {
        time: "2024年09月03日",
        name: "chatgpt-4o-latest",
        description:
          "与其他 GPT-4o 模型不同，它更专注于对话生成，而非多模态或实时处理",
      },
      {
        time: "2024年08月16日",
        name: "gpt-4o/gpt-4o-2024-08-06",
        description:
          "这是 GPT-4o 的首个正式版本，支持文本、图像和音频输入，具有强大的多模态处理能力，相比 GPT-4o-mini，它在处理复杂任务时准确性更高，功能更全面",
      },
      {
        time: "2024年07月18日",
        name: "gpt-4o-mini/gpt-4o-mini-2024-07-18",
        description:
          "这是 GPT-4o-mini 的首个版本，专为高效、低成本的应用场景设计，支持文本和视觉输入",
      },
      {
        time: "2024年05月13日",
        name: "gpt-4o/gpt-4o-2024-05-13",
        description: "",
      },
      {
        time: "2024年04月09日",
        name: "gpt-4-turbo-2024-04-09",
        description: "这是GPT-4 Turbo的正式发布",
      },
      {
        time: "2024年01月25日",
        name: "gpt-3.5-turbo-0125",
        description: "",
      },
      {
        time: "2024年01月25日",
        name: "gpt-4-0125-preview",
        description:
          "相较于gpt-4-1106-preview，此版本改进了任务完成能力，它是第二个预览版本",
      },
      {
        time: "2023年11月06日",
        name: "gpt-4-1106-preview",
        description:
          "这是GPT-4 Turbo的首个预览版本，于OpenAI的DevDay活动中发布",
      },
      {
        time: "2023年11月06日",
        name: "gpt-3.5-turbo-1106",
        description: "",
      },
      {
        time: "2023年06月13日",
        name: "gpt-4-0613",
        description: "",
      },
      {
        time: "2023年06月13日",
        name: "gpt-3.5-turbo-0613",
        description: "",
      },
      {
        time: "2023年03月14日",
        name: "gpt-4-0314",
        description: "",
      },
      {
        time: "2023年03月01日",
        name: "gpt-3.5-0301",
        description: "",
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
        time: "2025年02月17日",
        name: "Grok3",
        description: "",
      },
      {
        time: "2014年12月12日",
        name: "grok-2-1212/grok-2/grok-2-latest",
        description: "截止日期为 2024 年 7 月 17 日",
      },
      {
        time: "",
        name: "grok-beta",
        description: "grok-beta型号是早期型号，现已弃用",
      },
      {
        time: "2024年08月12日",
        name: "Grok2 Grok2 mini",
        description: "",
      },
      {
        time: "2024年03月28日",
        name: "Grok1.5",
        description: "",
      },
      {
        time: "2023年11月03日",
        name: "Grok1",
        description: "",
      },
    ],
    // 第五个格子 - DeepSeek
    [
      {
        time: "2025年03月24日",
        name: "DeepSeek-V3-0324",
        description: "DeepSeek V3 模型已完成0324小版本升级",
      },
      {
        time: "2025年01月20日",
        name: "DeepSeek-R1",
        description: "",
      },
      {
        time: "2024年12月26日",
        name: "DeepSeek-V3",
        description: "",
      },
      {
        time: "2024年12月10日",
        name: "DeepSeek-V2.5-1210",
        description: "DeepSeek V2.5 的最终版微调模型，全新支持了联网搜索",
      },
      {
        time: "2024年11月20日",
        name: "DeepSeek-R1-Lite",
        description: "处于迭代开发阶段，仅支持网页使用，暂不支持 API 调用",
      },
      {
        time: "2024年09月05日",
        name: "DeepSeek-V2.5",
        description:
          "DeepSeek V2 Chat 和 DeepSeek Coder V2 两个模型已经合并升级，升级后的新模型为 DeepSeek V2.5",
      },
      {
        time: "2024年07月24日",
        name: "DeepSeek-Coder-V2-0724",
        description: "deepseek-coder 模型升级为 DeepSeek-Coder-V2-0724",
      },
      {
        time: "2024年06月28日",
        name: "DeepSeek-V2-0628",
        description: "deepseek-chat 模型升级为 DeepSeek-V2-0628",
      },
      {
        time: "2024年06月14日",
        name: "DeepSeek-Coder-V2-0614",
        description: "deepseek-coder 模型升级为 DeepSeek-Coder-V2-0614",
      },
      {
        time: "2024年05月17日",
        name: "DeepSeek-V2-0517",
        description: "deepseek-chat 模型升级为 DeepSeek-V2-0517",
      },
      {
        time: "2024年05月06日",
        name: "DeepSeek-V2-0506",
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
          <div className="border-r-1 border-b-1 border-gray-800 p-2 flex flex-col">
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
            <div className="overflow-y-auto flex-1">
              <table className="w-full text-sm table-fixed">
                <colgroup>
                  <col className="w-[120px] min-w-[120px]" />
                  <col className="w-[250px] min-w-[250px]" />
                  <col />
                </colgroup>
                <tbody>
                  {gridData[0]?.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 cursor-pointer"
                      onClick={() =>
                        window.open(
                          "https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/#gemini-2-5-thinking",
                          "_blank"
                        )
                      }
                    >
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
          </div>

          {/* 第一行第二列 - OpenAI GPT系列 */}
          <div className="border-r-1 border-b-1 border-gray-800 p-2 flex flex-col">
            <Link
              href="https://chatgpt.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="font-bold text-lg mb-2 px-2 flex items-center hover:underline">
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
            </Link>
            <div className="overflow-y-auto flex-1">
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
          </div>

          {/* 第一行第三列 - Anthropic Claude系列 */}
          <div className="border-b-1 border-gray-800 p-2 flex flex-col">
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
            <div className="overflow-y-auto flex-1">
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
          </div>

          {/* 第二行第一列 - xAI Grok系列 */}
          <div className="border-r-1 border-gray-800 p-2 flex flex-col">
            <Link
              href="https://grok.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="font-bold text-lg mb-2 px-2 flex items-center hover:underline">
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
            </Link>
            <div className="overflow-y-auto flex-1">
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
          </div>

          {/* 第二行第二列 - DeepSeek */}
          <div className="border-r-1 border-gray-800 p-2 flex flex-col">
            <Link
              href="https://chat.deepseek.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="font-bold text-lg mb-2 px-2 flex items-center hover:underline">
                <span className="mr-2 flex items-center">
                  <Image
                    src="/deepseek-color.svg"
                    alt="DeepSeek Logo"
                    width={20}
                    height={20}
                    className="mr-1"
                  />
                </span>
                <span className="text-[#4D6BFE]">DeepSeek DeepSeek</span>
              </h3>
            </Link>
            <div className="overflow-y-auto flex-1">
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
          </div>

          {/* 第二行第三列 - Meta LLaMA系列 */}
          <div className="p-2 flex flex-col">
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
            <div className="overflow-y-auto flex-1">
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
    </div>
  );
}
