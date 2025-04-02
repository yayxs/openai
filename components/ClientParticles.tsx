'use client';

import React from 'react';
import Particles from '@/components/Particles/Particles';

const ClientParticles: React.FC = () => {
  return (
    <div className='fixed inset-0 z-0'>
      <Particles
        particleColors={['#4F46E5', '#60A5FA', '#34D399']}
        particleCount={250}
        particleSpread={12}
        speed={0.08}
        particleBaseSize={120}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />
    </div>
  );
};

export default ClientParticles; 