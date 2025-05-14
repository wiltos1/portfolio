export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const experienceData: Experience[] = [
  {
    title: 'Undergraduate Researcher',
    company: 'University of Calgary',
    period: 'May - Aug 2025',
    description: 'Designed IMU-based systems to measure yaw and roll in high-performance cycling; implemented real-time sensor tracking and mechanical data analysis for performance testing.'
  },
  {
    title: 'Personal Tutor',
    company: 'TutorOcean - McMaster University',
    period: 'Sept 2024 - Present',
    description: 'Mentoring first-year engineering students in core subjects such as calculus, physics, and programming. Focused on strengthening conceptual understanding, building problem-solving skills, and supporting students through assignment preparation and exam review.'
  },
  {
    title: 'Undergraduate Researcher',
    company: 'University of Calgary',
    period: 'May - Aug 2024',
    description: 'Designed and prototype a Bearing Remaining Useful Life test rig. Worked on sensor calibration, data collection, signal processing, and CAD design'
  },
  {
    title: 'Downhill Ski Racing Coach',
    company: 'Westside Alpine',
    period: '2021 - 2024',
    description: 'High performance ski instructor. Worked with athletes of ages 12 - 15 to build strong technical skills as well as a positive attitude towards competition and sport.'
  }
];