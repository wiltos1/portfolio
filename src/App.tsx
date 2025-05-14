import React from 'react';
import ThemeProvider from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;