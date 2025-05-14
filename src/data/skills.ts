export type SkillCategory = 'programmingLanguages' | 'softwares' | 'hardwareAndSystems' | 'spokenLanguages';

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillsData {
  [key in SkillCategory]: Skill[];
}

export const skillsData: SkillsData = {
  programmingLanguages: [
    { name: 'C/C++', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'MATLAB', level: 70 },
    { name: 'Maple', level: 70 },
  ],
  softwares: [
    { name: 'SolidWorks (FEA experience)', level: 90 },
    { name: 'Autodesk Inventor', level: 85 },
    { name: 'NI LabVIEW', level: 80 },
    { name: 'Microsoft Office Suite', level: 80 }
  ],
  hardwareAndSystems: [
    { name: 'Microcontrollers: ESP32, STM32, Arduino )', level: 90 },
    { name: 'Woodworking', level: 90 },
    { name: 'Embedded C Programming', level: 85 },
    { name: '3D Printing', level: 80 },
    { name: 'UART, I2C, SPI Protocols', level: 70 }
  ],
  spokenLanguages: [
    { name: 'English', level: 100 },
    { name: 'French', level: 100 }
  ]
};
