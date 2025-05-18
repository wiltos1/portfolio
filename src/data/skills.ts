export type SkillCategory = 'programmingLanguages' | 'softwares' | 'hardwareAndSystems' | 'tools';

export interface Skill {
  name: string;
  level: 'Beginner' | 'Moderate' | 'Advanced';
}

export interface SkillsData {
  [key in SkillCategory]: Skill[];
}

export const skillsData: SkillsData = {
  programmingLanguages: [
    { name: 'C/C++', level: 'Advanced' },
    { name: 'Python', level: 'Moderate' },
    { name: 'MATLAB', level: 'Moderate' },
    { name: 'Maple', level: 'Moderate' },
  ],
  softwares: [
    { name: 'SolidWorks (FEA experience)', level: 'Advanced' },
    { name: 'Autodesk Inventor', level: 'Advanced' },
    { name: 'Microsoft Office Suite', level: 'Advanced' },
    { name: 'NI LabVIEW', level: 'Moderate' }
  ],
  hardwareAndSystems: [
    { name: 'Microcontrollers: ESP32, STM32, Arduino', level: 'Advanced' },
    { name: 'Embedded C Programming', level: 'Advanced' },
    { name: '3D Printing', level: 'Moderate' },
    { name: 'UART, I2C, SPI Protocols', level: 'Moderate' }
  ],
  tools: [
    { name: 'Power Tools & Woodworking', level: 'Advanced' },
    { name: 'Soldering', level: 'Moderate' },
    { name: 'Machining', level: 'Beginner' }
  ]
};
