// components/Hero.tsx
import React from 'react';
import Background from '../public/images/abc.jpg'

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen bg-cover bg-center z-10" style={{ backgroundImage: `url(${Background.src})`}}>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> */}
      <div className="absolute top-0 left-0 w-full px-8 py-4 flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Hepta</h1>
        {/* <button className="text-white focus:outline-none">
        </button> */}
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">About Us</h2>
      </div>
    </header>
  );
};

export default Hero;
