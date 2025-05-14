import hologramImg from '../assets/projects/hologram.jpg';
import chessImg from '../assets/projects/chess.jpg';
import spikeballImg from '../assets/projects/spikeball.jpg';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Interactive Holographic Display on LCD',
    description: 'Programmed an STM32 microcontroller to display interactive 3D wireframe models on a transparent screen. Used Python to generate 3D meshes from 2D image topography for real-time holographic rendering.',
    image: hologramImg,
    technologies: ['STM32', 'Python', 'Embedded System', 'Digital Communication'],
  },
  {
    id: 2,
    title: 'Interactive Chess Trainer',
    description: 'Developed a web-based chess training platform that analyzes users\' past games to detect key mistakes and generate targeted quizzes. Frontend in React, backend in Flask with persistent user data and mistake tracking.',
    image: chessImg,
    technologies: ['Python', 'Flask', 'JavaScript', 'Stockfish'],
  },
  {
    id: 3,
    title: 'Spikeball Rim Detection System (Work in Progress)',
    description: 'Redesign of Spikeball game to incorporate piezo disc and LED response for user-friendly distinction between a pocket and a rim hit.',
    image: spikeballImg,
    technologies: ['SolidWorks', 'Embedded Systems', 'Piezo Sensors'],
  }
];
