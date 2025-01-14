import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Wrapper from '@/app/_components/Wrapper';

const projects = [
  {
    title: "Snake and Ladder Game",
    description: "Developed a console-based Snake and Ladder game using C++, implementing data structures like graphs, queues, and arrays. Features include multiplayer support and dynamic board generation.",
    tech: ["C++", "Data Structures", "Algorithms"],
    github: "https://github.com/yourusername/snake-ladder",
    image: "/images/snake-ladder.jpg"
  },
  {
    title: "Web Scraper",
    description: "Created a Python-based web scraper using BeautifulSoup and Selenium to extract movie titles and information. Implemented automated data collection and CSV export functionality.",
    tech: ["Python", "BeautifulSoup", "Selenium"],
    github: "https://github.com/yourusername/web-scraper",
    image: "/images/web-scraper.jpg"
  },
  {
    title: "Tic-Tac-Toe Game",
    description: "Built an interactive Tic-Tac-Toe game with Python, featuring an AI opponent using the minimax algorithm and a graphical user interface.",
    tech: ["Python", "Tkinter", "Algorithms"],
    github: "https://github.com/yourusername/tic-tac-toe",
    image: "/images/tic-tac-toe.jpg"
  }
];

export default function ProjectPage() {
  return (
    <Wrapper>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-4">
            Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects and implementations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-700/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="pt-4 flex items-center gap-4">
                  <Link 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    <FaGithub size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}