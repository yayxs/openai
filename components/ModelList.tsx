import React from 'react';
import { ModelItem } from '@/app/page';

interface ModelListProps {
  models: ModelItem[];
}

export default function ModelList({ models }: ModelListProps) {
  // 如果没有模型数据，显示空状态
  if (!models || models.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">发布时间</th>
            <th className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">模型名称</th>
            <th className="py-3 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">描述</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {models.map((model, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-4 px-3 whitespace-nowrap text-gray-600">
                {model.time || '未知日期'}
              </td>
              <td className="py-4 px-3 text-gray-900 font-medium">
                {model.name}
                {model.isReasoning && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    推理能力
                  </span>
                )}
              </td>
              <td className="py-4 px-3 text-gray-600 whitespace-pre-line">
                {model.description || '暂无描述'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 