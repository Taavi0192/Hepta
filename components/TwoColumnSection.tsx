// components/TwoColumnSection.tsx
import React from 'react';
import Image from 'next/image';
import ImageAbc from '../public/images/abc.jpg'

const TwoColumnSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className={`container mx-auto flex flex-col md:flex-row items-center`}>
        {/* Image Section */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <Image src={ImageAbc} alt="title" width="3000" height="3000"/>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">title</h2>
          <p className="text-gray-600">content</p>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;
