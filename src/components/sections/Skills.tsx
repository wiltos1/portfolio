import React from 'react';
import { skillsData, SkillCategory } from '../../data/skills';

const Skills: React.FC = () => {
  const categories = Object.keys(skillsData) as SkillCategory[];

  const skillLabels: Record<SkillCategory, string> = {
    programmingLanguages: 'Programming Languages',
    softwares: 'Softwares',
    hardwareAndSystems: 'Hardware & Systems',
    tools: 'Tool Skills'
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {skillLabels[category]}
              </h3>
              <div className="space-y-4">
                {skillsData[category]?.map((skill) => (
                  <div key={skill.name} className="flex justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 capitalize">
                      {skill.level}
                    </span>
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
