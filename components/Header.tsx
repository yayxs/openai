import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
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
            {models.map((model) => (
              <Link 
                key={model.name}
                href={`#${model.name.toLowerCase()}`}
                className="flex flex-col items-center justify-center transition-all hover:scale-110"
              >
                <Image
                  src={model.logo}
                  alt={`${model.name} logo`}
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
                <span className="mt-1 text-xs text-gray-600">{model.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
} 