import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { educationData } from '../../data/education';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A brief overview of my professional journey, qualifications, and passions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="order-2 lg:order-1">
            <h3 className="flex items-center text-xl font-bold text-gray-900 dark:text-white mb-6">
              <Briefcase size={20} className="mr-2 text-blue-600" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {experienceData.map((item, index) => (
                <div 
                  key={index}
                  className="relative pl-8 pb-8 border-l border-gray-200 dark:border-gray-800"
                >
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="mb-1 text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {item.period}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {item.title} • {item.company}
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Interests */}
          <div className="order-1 lg:order-2">
            {/* Education */}
            <div className="mb-12">
              <h3 className="flex items-center text-xl font-bold text-gray-900 dark:text-white mb-6">
                <GraduationCap size={20} className="mr-2 text-blue-600" />
                Education
              </h3>
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <div 
                    key={index}
                    className="relative pl-8 pb-8 border-l border-gray-200 dark:border-gray-800"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="mb-1 text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {item.period}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.degree} • {item.institution}
                    </h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular Interests */}
            <div>
              <h3 className="flex items-center text-xl font-bold text-gray-900 dark:text-white mb-3">
                <Award size={20} className="mr-2 text-blue-600" />
                Extracurricular Interests
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Beyond engineering, here are a few things I’m passionate about:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg shadow hover:shadow-md transition">
                  ✈️ <span className="text-gray-900 dark:text-white font-medium">Plane Enthusiast</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg shadow hover:shadow-md transition">
                  🔥 <span className="text-gray-900 dark:text-white font-medium">Avid Calgary Flames Fan</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg shadow hover:shadow-md transition">
                  🏎️ <span className="text-gray-900 dark:text-white font-medium">F1 Racing</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg shadow hover:shadow-md transition">
                  ⛷️ <span className="text-gray-900 dark:text-white font-medium">Downhill Skiing</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg shadow hover:shadow-md transition">
                  ♟️ <span className="text-gray-900 dark:text-white font-medium">Mediocre Chess Player</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg shadow hover:shadow-md transition">
                  😄 <span className="text-gray-900 dark:text-white font-medium">Dad Jokes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
