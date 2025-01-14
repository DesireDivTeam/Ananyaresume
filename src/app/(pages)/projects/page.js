import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import Wrapper from '@/app/_components/Wrapper';

const projects = [
  {
    title: "Snakes & Ladder",
    description: "Developed a two-player Snakes and Ladders game in C, featuring dice rolls, seamless gameplay, and an algorithm that calculates the shortest path to the destination.",
    tech: ["C", "Data Structures", "Algorithms"],
    github: "https://github.com/AnanyaBhatnagar09/Snakes-and-Ladder.git",
    image: "/images/projects/snake-ladder.jpg"
  },
  {
    title: "Web Scraper for Movie Titles",
    description: "Utilized Python libraries to fetch and parse HTML content, extracting movie titles and implementing data persistence.",
    tech: ["Python", "BeautifulSoup", "Web Scraping"],
    github: "https://github.com/AnanyaBhatnagar09/Top-100-movies-towatch.git",
    image: "/images/projects/web-scraper.jpg"
  }
];

export default function ProjectsPage() {
  return (
    <Wrapper>
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-4">
            Projects
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technical implementations and development work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                
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

                <Link 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <FaGithub size={16} />
                  <span>View Source</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}