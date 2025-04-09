import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  selectedIndex: number;
}

export default function Header({ selectedIndex }: HeaderProps) {
  const models = [
    { name: 'Gemini', logo: '/google-color.svg' },
    { name: 'ChatGPT', logo: '/openai.svg' },
    { name: 'Claude', logo: '/anthropic.svg' },
    { name: 'Grok', logo: '/xai.svg' },
    { name: 'DeepSeek', logo: '/deepseek-color.svg' },
    { name: 'Llama', logo: '/meta-color.svg' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-center">
          <nav className="flex items-center space-x-10">
            {models.map((model, index) => (
              <Link 
                key={model.name}
                href={`/?model=${index}`}
                className={`flex flex-col items-center justify-center transition-all ${
                  selectedIndex === index 
                    ? 'scale-110 text-blue-600' 
                    : 'text-gray-600 hover:scale-105'
                }`}
              >
                <div className={`p-1.5 rounded-full ${selectedIndex === index ? 'bg-blue-50' : ''}`}>
                  <Image
                    src={model.logo}
                    alt={`${model.name} logo`}
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <span className="mt-1 text-xs">{model.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
} 