/* eslint-disable*/

'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, Plus } from 'lucide-react';

export function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white font-urbanist">
      {/* Header */}
      <header className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <img src="/placeholder.svg?height=40&width=100" alt="VYB Logo" className="h-10" />
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/fav-creators" className="text-blue-400">Fav Creators</Link>
            <Link href="/merchandise" className="text-blue-400">Merchandise</Link>
            <Link href="/brand" className="text-blue-400">Brand</Link>
            <Link href="/digital" className="text-blue-400">Digital</Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Search Creator/Product" className="bg-gray-800 text-white px-4 py-2 rounded-full pr-10" />
              <Search className="absolute right-3 top-2.5 text-gray-400" />
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <ChevronDown />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          <Link href="/fav-creators" className="block py-2 text-blue-400">Fav Creators</Link>
          <Link href="/merchandise" className="block py-2 text-blue-400">Merchandise</Link>
          <Link href="/brand" className="block py-2 text-blue-400">Brand</Link>
          <Link href="/digital" className="block py-2 text-blue-400">Digital</Link>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto p-4 mt-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                One Stop Marketplace For Influencers
              </span>
            </h1>
            <p className="text-xl mb-4">
              "Unleash Your Influence: Sell Itineraries, Build Your Brand, Create Merch, and Share Content – All in One Hub."
            </p>
            <div className="space-x-4">
              <Link href="/demo" className="bg-green-500 text-black px-6 py-2 rounded-full font-bold inline-block">Demo Store</Link>
              <Link href="/waitlist" className="border border-blue-400 text-blue-400 px-6 py-2 rounded-full font-bold inline-block">Join Waitlist</Link>
            </div>
          </div>
          <div className="grid  gap-2">
            {[...Array(7)].map((_, i) => (
              <img key={i} src={`/placeholder.svg?height=150&width=150&text=Influencer${i+1}`} alt={`Influencer ${i + 1}`} className="w-full h-full object-cover rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Travel Section */}
      <section className="container mx-auto p-4 mt-8">
        <div className="flex justify-between mb-4">
          <h2 className="text-3xl font-bold">Travel</h2>
          <div className="flex space-x-2">
            <span className="text-blue-400">1200 Fill</span>
            <span className="text-green-400">651 Hug</span>
          </div>
        </div>
        <div className="relative h-96 mb-8">
          <img src="/placeholder.svg?height=400&width=800&text=Travel" alt="Travel" className="w-full h-full object-cover rounded-lg" />
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
          {['Darjeeling', 'Munnar', 'Delhi', 'Delhi'].map((place, i) => (
            <div key={i} className="relative">
              <img src={`/placeholder.svg?height=200&width=200&text=${place}`} alt={place} className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-lg font-bold">{place} Itinerary</p>
                <div className="flex items-center">
                  <img src="/placeholder.svg?height=20&width=20&text=User" alt="User" className="w-5 h-5 rounded-full mr-2" />
                  <span>Samira Hadid</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to list Section */}
      <section className="container mx-auto p-4 mt-8">
        <h2 className="text-2xl font-bold mb-4">How to list?</h2>
        <div className="relative">
          <img src="/placeholder.svg?height=300&width=800&text=Mountain" alt="Mountain" className="w-full h-72 object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="bg-blue-400 rounded-full p-4 mb-2">
                  <span className="text-2xl font-bold">01</span>
                </div>
                <p>Create Itinerary</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-400 rounded-full p-4 mb-2">
                  <span className="text-2xl font-bold">02</span>
                </div>
                <p>Convert into Travel Package</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-400 rounded-full p-4 mb-2">
                  <span className="text-2xl font-bold">03</span>
                </div>
                <p>Earn by sharing</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-4 text-xl">You Curate Experience, We Make It Happen</p>
      </section>

      {/* Features Section */}
      <section className="container mx-auto p-4 mt-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            From Creation to Monetization: Vyb Store Has It All
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'Trusted By Influencers', desc: 'A trusted platform for influencers to grow and earn.' },
            { title: 'Secured Data', desc: 'Advanced security measures to protect your valuable data' },
            { title: 'Authentic Payment Partner', desc: 'Reliable, fast, and secure payments you can trust' },
            { title: 'Monetize Your Influence', desc: 'Seamlessly turn your influence into consistent revenue' }
          ].map((feature, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg">
              <img src={`/placeholder.svg?height=50&width=50&text=Icon${i+1}`} alt={feature.title} className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Influencers Section */}
      <section className="container mx-auto p-4 mt-8">
        <h2 className="text-3xl font-bold mb-4">Our Influencers</h2>
        <div className="flex justify-center space-x-4">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={`/placeholder.svg?height=100&width=100&text=Influencer${i+1}`} alt={`Influencer ${i + 1}`} className="w-24 h-24 rounded-full" />
          ))}
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="container mx-auto p-4 mt-8">
        <div className="bg-gradient-to-r from-red-500 to-purple-500 rounded-lg p-8">
          <div className="md:flex justify-between items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Sign Up and create your own store hassle-free.</h2>
              <p>Join us to grow your creator empire. Easy and hassle-free process to get started. List your products and start selling now.</p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-black p-4 rounded-lg">
                <button className="w-full bg-white text-black py-2 rounded-lg mb-4">Login with google</button>
                <input type="email" placeholder="Email" className="w-full bg-gray-800 p-2 rounded-lg mb-4" />
                <input type="password" placeholder="Password" className="w-full bg-gray-800 p-2 rounded-lg mb-4" />
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Login</button>
                <p className="text-center mt-4 text-sm">Don't have an account? <Link href="/signup" className="text-blue-400">Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto p-4 mt-8">
        <h2 className="text-3xl font-bold mb-4">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="mb-4">Quick answers to questions you may have. Can't find what you're looking for? Check our full documentation</p>
        {[
          "How much does it cost to set up a store?",
          "What kind of digital products can I sell?",
          "Do I need technical skills to use the platform?",
          "Is there a limit to the number of products I can list?",
          "How do I receive payments for my sales?",
          "Can I sell internationally on this marketplace?",
          "What support and resources are available for sellers?",
          "Is there a review process for uploaded products?"
        ].map((question, index) => (
          <div key={index} className="mb-4">
            <button
              className="flex justify-between items-center w-full text-left p-4 bg-gray-800 rounded-lg"
              onClick={() => toggleFaq(index)}
            >
              <span>{question}</span>
              <Plus className={`transform transition-transform ${expandedFaq === index ? 'rotate-45' : ''}`} />
            </button>
            {expandedFaq === index && (
              <div className="p-4 bg-gray-700 rounded-b-lg mt-2">
                <p>This is a placeholder answer for the question. The actual answer would be provided here.</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
