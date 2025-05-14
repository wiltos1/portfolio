import React, { useEffect, useRef } from 'react';
import { skillsData, SkillCategory } from '../../data/skills';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.skill-progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.progress || '0%';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const categories = Object.keys(skillsData) as SkillCategory[];

const skillLabels: Record<SkillCategory, string> = {
  programmingLanguages: 'Programming Languages',
  spokenLanguages: 'Spoken Languages',
  softwares: 'Softwares',
  hardwareAndSystems: 'Hardware & Systems',
};

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My expertise spans across various technologies and tools.
          </p>
        </div>

        <div 
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {categories.map((category) => (
            <div key={category} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {skillLabels[category]}
              </h3>

              <div className="space-y-6">
                {skillsData[category].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="skill-progress-bar h-full bg-blue-600 dark:bg-blue-500 rounded-full w-0 transition-all duration-1000 ease-out"
                        data-progress={`${skill.level}%`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;