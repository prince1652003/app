// features-section.tsx
import React from 'react';
import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Trusted By Influencers',
      desc: 'A trusted platform for influencers to grow and earn.',
      image: '/d.png',  // Treat this like any other image now
      type: 'icon'  // Change this to 'icon' to match other features
    },
    {
      title: 'Secured Data',
      desc: 'Advanced security measures to protect your valuable data',
      image: '/c.png',
      type: 'icon'
    },
    {
      title: 'Authentic Payment Partner',
      desc: 'Reliable, fast, and secure payments you can trust',
      image: '/c.png',
      type: 'icon'
    },
    {
      title: 'Monetize Your Influence',
      desc: 'Seamlessly turn your influence into consistent revenue',
      image: '/a.png',
      type: 'icon'
    }
  ];

  return (
    <section className="container mx-auto p-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <h2 className="text-4xl font-bold md:col-span-1">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-800">
            From Creation to Monetization: Vyb Store Has It All
          </span>
          
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2">
          {features.map((feature, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.desc}</p>
              <Image src={feature.image} alt={feature.title} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
