'use client';

import React, { useEffect, useRef } from 'react';

// 优化的背景粒子效果
const ClientParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // 设置canvas大小为视窗大小
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    // 粒子系统
    const particles: {
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
      blinkSpeed: number; // 添加闪烁速度属性
    }[] = [];
    
    // 优化粒子颜色 - 使用更鲜明的颜色
    const colors = [
      'rgba(79, 70, 229, 0.4)',  // 更亮的靛蓝色
      'rgba(96, 165, 250, 0.4)', // 更亮的蓝色
      'rgba(52, 211, 153, 0.4)', // 更亮的绿色
      'rgba(124, 58, 237, 0.4)', // 紫色
      'rgba(248, 113, 113, 0.3)' // 红色（稍微透明一些）
    ];
    
    // 增加粒子数量，但保持性能优化
    const particleCount = Math.min(80, Math.floor(window.innerWidth * window.innerHeight / 15000));
    
    // 创建粒子
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1, // 略微增大粒子尺寸
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.3 - 0.15, // 适当增加速度
        speedY: Math.random() * 0.3 - 0.15, // 适当增加速度
        opacity: Math.random() * 0.3 + 0.2, // 增加基础透明度
        blinkSpeed: Math.random() * 0.01 + 0.003 // 随机闪烁速度
      });
    }
    
    let frameCount = 0;
    // 渲染循环
    const render = () => {
      // 清空canvas - 使用半透明清除产生拖尾效果
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      frameCount++;
      
      // 绘制所有粒子
      for (const particle of particles) {
        // 使粒子闪烁
        const flickerOpacity = particle.opacity * (0.7 + 0.3 * Math.sin(frameCount * particle.blinkSpeed));
        
        ctx.globalAlpha = flickerOpacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // 添加发光效果
        if (particle.size > 1.5) {
          ctx.globalAlpha = flickerOpacity * 0.3;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // 更新粒子位置
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // 边界检查 - 使用循环边界而不是反弹
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      }
      
      requestAnimationFrame(render);
    };
    
    const animationId = requestAnimationFrame(render);
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ 
        background: 'linear-gradient(to bottom right, rgba(248, 250, 252, 0.2), rgba(241, 245, 249, 0.1))'
      }}
    />
  );
};

export default ClientParticles; 