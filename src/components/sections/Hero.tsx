import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import heroBg from '../../assets/sam-bg2.jpg';

const Hero: React.FC = () => {
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const nameElement = nameRef.current;
    if (!nameElement) return;

    const text = nameElement.innerText;
    nameElement.innerHTML = '';

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        nameElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    setTimeout(() => {
      typeWriter();
    }, 500);
  }, []);

  const scrollToNextSection = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row h-screen pt-24 px-6 md:px-20 gap-8 relative"
    >
      {/* Left: text content */}
      <div className="w-full lg:w-6/12 flex flex-col justify-center space-y-6">
        <p className="text-gray-900 dark:text-white text-xl md:text-2xl font-medium">
          Hello, I’m
        </p>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white drop-shadow-md">
          <span ref={nameRef}>Sam Wilton</span>
        </h1>
        <h2 className="text-xl text-gray-700 dark:text-gray-200">
          Mechatronics. Creativity. Innovation.
        </h2>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border border-gray-900 dark:border-white text-gray-900 dark:text-white hover:border-blue-400 rounded-lg transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right: responsive image */}
      <div className="w-full lg:w-6/12 h-72 sm:h-96 lg:h-full relative">
        <img
          src={heroBg}
          alt="Sam Wilton"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      {/* Scroll arrow */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 z-10"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-gray-900 dark:text-white" size={24} />
      </button>
    </section>
  );
};

export default Hero;
