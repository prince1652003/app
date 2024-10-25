/* eslint-disable*/


'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ChevronDown, Plus, User } from 'lucide-react';
import FeaturesSection from '../FeaturesSection';

export default function VYBMarketplace() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prevStep) => (prevStep + 1) % 4);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white font-urbanist">
      {/* Header */}
      <header className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src="/vyblogo.gif" alt="VYB Logo" width={100} height={40} />
          </Link>
          <div className="flex-1 mx-4">
            <div className="relative">
              <input type="text" placeholder="Search Creator/Product" className="w-full bg-gray-800 text-white px-4 py-2 rounded-full pr-10" />
              <Search className="absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/fav-creators" className="text-white hover:text-green-400">Fav Creators</Link>
            <Link href="/merchandise" className="text-white hover:text-green-400">Merchandise</Link>
            <Link href="/brand" className="text-white hover:text-green-400">Brand</Link>
            <Link href="/digital" className="text-white hover:text-green-400">Digital</Link>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <ChevronDown />
          </button>
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center">
              <User className="mr-2" />
              <ChevronDown />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 bg-gray-800 rounded-md shadow-lg z-10">
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-700">Profile</Link>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-700">Dashboard</Link>
                <Link href="/my-store" className="block px-4 py-2 hover:bg-gray-700">My Store</Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          <Link href="/fav-creators" className="block py-2 text-white hover:text-green-400">Fav Creators</Link>
          <Link href="/merchandise" className="block py-2 text-white hover:text-green-400">Merchandise</Link>
          <Link href="/brand" className="block py-2 text-white hover:text-green-400">Brand</Link>
          <Link href="/digital" className="block py-2 text-white hover:text-green-400">Digital</Link>
        </div>
      )}
{/* Hero Section */}
<section className="container mx-auto p-4 mt-8">
  <div className="flex flex-col md:flex-row items-center gap-6">
    
    {/* Text Section */}
    <div className="flex flex-col justify-center max-w-md md:max-w-lg lg:max-w-xl">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-green-400">
          One Stop Marketplace For Influencers
        </span>
      </h1>
      <p className="text-lg md:text-xl mb-4">
        "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content – All in One Hub."
      </p>
      <div className="space-x-4">
        <Link href="/demo" className="bg-green-500 text-black px-6 py-2 rounded-full font-bold inline-block">Demo Store</Link>
        <Link href="/waitlist" className="border border-blue-400 text-blue-400 px-6 py-2 rounded-full font-bold inline-block">Join Waitlist</Link>
      </div>
    </div>
    
    {/* Image Section */}
    <div className="relative w-full md:w-1/2 h-64 md:h-auto rounded-lg overflow-hidden">
      <Image src="/iamge.png" alt="Influencer 1" width={800} height={600} className="w-full h-full object-cover rounded-lg" />
    </div>
  </div>
</section>



      {/* Travel Section */}
      <section className="container mx-auto p-4 mt-8">
      <div className="container mx-auto p-inherit">
  <nav className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
    <Link href="/travel" className="text-green-400 border-b-2 border-green-400 pb-2 px-4">Travel</Link>
    <Link href="/digital" className="text-white hover:text-green-400 px-4">Digital</Link>
    <Link href="/brand" className="text-white hover:text-green-400 px-4">Brand</Link>
    <Link href="/merch" className="text-white hover:text-green-400 px-4">Merch</Link>
  </nav>
</div>


        <div className="relative h-96 mb-10 ">
          <Image src="/pahad.png" alt="Travel" layout="fill" objectFit="cover" className="rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-bold mb-4">TRAVEL</h2>
              <p className="text-xl">
                Turn your travel experience into itinerary, travel package with VYB Store and share it with your true followers.
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4">Explore Our Curated Travel Itineraries</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Darjeeling', state: 'West Bengal', image: '/darjeeling.png' },
            { name: 'Munnar', state: 'Kerala', image: '/munnar.png' },
            { name: 'Delhi', state: 'Delhi', image: '/delhi.png' },
            { name: 'Delhi', state: 'Delhi', image: '/delhi.png' }
          ].map((place, i) => (
            <div key={i} className="relative">
              <Image src={place.image} alt={place.name} width={400} height={400} className="w-full h-auto object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-lg font-bold">{place.name} Itinerary</p>
                <p className="text-sm">{place.state}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
        {/* How to list Section */}
        <section className="container mx-auto p-4 mt-8">
        {/* <h2 className="text-2xl font-bold mb-4">How to list?</h2> */}
        <h2 className="text-2xl font-bold mb-4 text-center">How to list?</h2>

        <div className="relative">
          <Image src="/pahad1.png" alt="Mountain" layout="responsive" width={800} height={300} className="rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center space-x-8">
              {[
                { step: '01', text: 'Create Itinerary' },
                { step: '02', text: 'Convert into Travel Package' },
                { step: '03', text: 'Earn by sharing' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white text-black rounded-full p-4 mb-2">
                    <span className="text-2xl font-bold">{item.step}</span>
                  </div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-xl">You Curate Experience, We Make It Happen</p>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Influencers Section */}
      <section className="container mx-auto p-4 mt-8">
        <h2 className="text-3xl font-bold mb-4">Our Influencers</h2>
        <div className="flex justify-center space-x-4">
          {[1, 2, 3].map((i) => (
            <Image key={i} src={`/infl${i}.png`} alt={`Influencer ${i}`} width={300} height={150} className="rounded-full" />
          ))}
        </div>
      </section>

      {/* Sign Up Section */}
  <section className="container mx-auto p-4 mt-8">
    <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-8">
      <div className="md:flex justify-between items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">How to get started?</h2>
          <div className="relative h-64 bg-black rounded-lg overflow-hidden">
          <div className={`absolute inset-0 transition-opacity duration-100 ${animationStep === 0 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="p-6 text-white">
                
              </div>
              <Image src="/1.png" alt="Store" layout="fill" objectFit="contain" className="p-4" />
          </div>
            <div className={`absolute inset-0 transition-opacity duration-100 ${animationStep === 1 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="p-6 text-white">

              </div>
              <Image src="/2.png" alt="Influencer" layout="fill" objectFit="contain" className="p-4" />
            </div>
            <div className={`absolute inset-0 transition-opacity duration-100 ${animationStep === 2 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="p-6 text-white">
                
              </div>
              <Image src="/3.png" alt="Store" layout="fill" objectFit="contain" className="p-4" />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-100 ${animationStep === 3 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="p-6 text-white">
                
              </div>
              <Image src="/4.png" alt="Store" layout="fill" objectFit="contain" className="p-4" />
          </div>
          </div>
        </div>
        <div className="md:w-1/3">
          <div className="bg-black p-4 rounded-lg">
            <button className="w-full bg-white text-black py-2 rounded-lg mb-4 flex items-center justify-center">
              <Image src="/g.png" alt="Google" width={60} height={20} className="mr-2" />
              Login with Google
            </button>
            <input type="email" placeholder="Email" className="w-full bg-gray-800 p-2 rounded-lg mb-4" />
            <input type="password" placeholder="Password" className="w-full bg-gray-800 p-2 rounded-lg mb-4" />
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Login</button>
            <p className="text-center mt-4 text-sm">Don't have an account? <Link href="/signup" className="text-blue-400">Get Started</Link></p>
          </div>
        </div>
      </div>
    </div>
  </section>


      {/* FAQ Section */}
      <section className="container mx-auto p-4 mt-8">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { question: "How can I sign up?", answer: "Simply click on the Sign-Up button and follow the instructions to create your account." },
            { question: "What products can I sell?", answer: "You can sell merchandise, digital content, and even curated travel itineraries on your store." },
            { question: "How do I promote my store?", answer: "Our platform offers tools for social sharing, as well as promotional features to help your store get noticed." }
          ].map((faq, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4">
              <button onClick={() => toggleFaq(index)} className="flex justify-between items-center w-full text-lg font-bold">
                {faq.question}
                <Plus className={`transform transition-transform ${expandedFaq === index ? 'rotate-45' : 'rotate-0'}`} />
              </button>
              {expandedFaq === index && <p className="mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
