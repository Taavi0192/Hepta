// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full px-8 py-4 flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Hepta</h1>
        <button className="text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5h14M3 10h14M3 15h14" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">About Us</h2>
        <p className="max-w-lg">A free template by Colorlib. Download and share!</p>
      </div>
    </header>
  );
};

export default Hero;
