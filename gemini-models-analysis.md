# Google Gemini 模型系列分析

Google Gemini 是 Google 最新的多模态大语言模型系列，其模型命名遵循特定的模式和规则。以下是对 Gemini 模型命名的详细分析。

## Gemini 模型命名结构

Gemini 模型的命名结构大致可以看作：`models/gemini-[版本]-[系列/变体]-[发布/稳定性]`

## 核心系列分类

Gemini 主要分为两个核心系列：

* **Pro 系列**：代表性能更强大、功能更全面的版本，适合复杂任务
* **Flash 系列**：代表速度更快、资源消耗更低的轻量级版本，适合需要低延迟的场景

## 版本号体系

* **1.0**：最早的版本，如 `gemini-1.0-pro-vision`（已弃用）
* **1.5**：一个重要的版本迭代，有 Pro 和 Flash 两种变体
* **2.0**：新一代模型，主要在 Flash 系列推出
* **2.5**：最新的实验性高级版本（Pro 系列）

## 发布与修订号

* **-001**、**-002** 等：表示特定版本的稳定发布序号
* 例如：`gemini-1.5-pro-001` 是 1.5 Pro 的第一个稳定版，`gemini-1.5-pro-002` 是第二个稳定版

## 稳定性与别名

* **latest**：重要的别名，总是指向对应系列中最新的稳定版本。例如 `gemini-1.5-pro-latest` 会自动更新到最新的稳定 1.5 Pro 版本
* **exp** / **experimental**：表示实验性版本，通常带有日期标识，如 `exp-03-25`（表示 2025 年 3 月 25 日的实验版本）
* **preview**：预览版本，与 experimental 性质类似

## 子变体与特性标识

* **-vision**：（主要在 1.0 版本中）表示具有图像理解能力。在 1.5 及以后版本中，视觉能力已整合到标准模型中
* **-8b**：（Flash 系列）可能表示模型参数规模约为 8 Billion（80亿）
* **-lite**：（Flash 系列）更轻量级的 Flash 变体
* **-thinking**：（Flash 系列）针对特定推理或"思考"过程优化的实验性变体
* **-tuning**：表示支持模型微调（Fine-tuning）的版本
* **-embedding**：Gemini 系列的文本嵌入模型

## 典型模型示例

* `models/gemini-1.5-pro-001`：Gemini 1.5 Pro 系列的第 1 个稳定版
* `models/gemini-1.5-pro-latest`：指向当前最新的 Gemini 1.5 Pro 稳定版
* `models/gemini-1.5-flash-8b-001`：Gemini 1.5 Flash 系列，8B 变体，第 1 个稳定版
* `models/gemini-2.5-pro-exp-03-25`：Gemini 2.5 Pro 系列，2025年3月25日的实验版本
* `models/gemini-2.0-flash-thinking-exp`：Gemini 2.0 Flash 系列的实验性"思考"优化版本
* `models/gemini-embedding-exp`：Gemini 家族的实验性文本嵌入模型

## 选择建议

* 对于生产环境：优先选择带有数字版本号（如 `-001`）的稳定版，或使用 `latest` 别名自动获取最新稳定版
* 对于实验性功能：可以尝试 `exp` 或 `preview` 版本，但要注意这些版本可能不稳定或未来会发生变化
* 对于资源受限场景：考虑使用 Flash 系列，特别是 `-8b` 或 `-lite` 变体
* 对于复杂任务：Pro 系列通常提供更好的性能和更全面的功能支持

## 模型弃用说明

* 旧的 `gemini-pro-vision` / `gemini-1.0-pro-vision` 已被标记为弃用（deprecated）
* 当看到模型描述中包含 "deprecated" 或 "Move to a newer Gemini version" 时，应考虑迁移到更新的版本 