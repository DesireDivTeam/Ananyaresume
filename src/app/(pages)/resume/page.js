'use client'
import React, { useState } from "react";
import Education from "@/app/_components/Education";
import Wrapper from "@/app/_components/Wrapper";
import { FaChevronDown, FaGraduationCap, FaLaptopCode, FaUserTie, FaTools, FaStar } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

const introPoints = [
  "Pursuing B.Tech in Computer Science at Delhi Technological University",
  "Ranked in top 1.75 percentile in JEE examination",
  "Solved 379+ Questions on Leetcode and 663+ on Code Studios",
  "Strong foundation in DSA, OOPS, and Mathematics",
  "Active member of IEEE club and Dance Society"
];

const resumeSections = [
  {
    id: 'education',
    title: 'Education',
    icon: <FaGraduationCap className="w-6 h-6" />,
    component: <Education />
  },
  {
    id: 'specialization',
    title: 'Technical Expertise',
    icon: <FaLaptopCode className="w-6 h-6" />,
    content: [
      "Expertise in Data Structures and Algorithms using C++",
      "Object Oriented Programming & Advanced C++ concepts",
      "Python development with libraries like Selenium, BeautifulSoup",
      "Web Development using HTML, CSS, JavaScript",
      "Projects including Snakes & Ladder, Web Scrapers, etc."
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership & Activities',
    icon: <FaUserTie className="w-6 h-6" />,
    content: [
      "Public Relations Head - Nrityangana (DTU Dance Club)",
      "Content Coordinator - IEEE Club DTU",
      "Mentor - 'Desh Ke Mentor' Government Program",
      "Event Coordinator - VIHAAN & INVICTUS Tech Events",
      "Kathak Dancer with performances at IITs"
    ]
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    icon: <FaTools className="w-6 h-6" />,
    content: [
      "C/C++: DSA, OOPS, Problem Solving",
      "Python: Web Scraping, Data Analysis",
      "Web: HTML, CSS, JavaScript",
      "Tools: Git, VS Code, Linux",
    ]
  }
];

export default function ResumePage() {
  const [expandedSection, setExpandedSection] = useState('');

  const toggleSection = (sectionId) => {
    setExpandedSection(prev => (prev === sectionId ? null : sectionId));
  };

  return (
    <Wrapper className="py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-4">
            Resume
          </h1>
        </div>

        {/* Introduction Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/30 rounded-xl p-6 md:p-8 mb-4 hover:border-purple-500/30 transition-all duration-300">
          <div className="grid gap-4">
            {introPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <FaStar className="w-5 h-5 mt-1 text-purple-400 group-hover:text-purple-300 flex-shrink-0" />
                <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-4">
          {resumeSections.map((section) => (
            <div 
              key={section.id} 
              className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/30 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center p-6 hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-purple-400 p-2.5 rounded-lg bg-purple-400/10">
                    {section.icon}
                  </span>
                  <h2 className="text-xl font-medium text-white group-hover:text-purple-200 transition-colors">
                    {section.title}
                  </h2>
                </div>
                <FaChevronDown 
                  className={`text-purple-400 transform transition-transform duration-300 ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  } group-hover:text-purple-300`}
                  size={16}
                />
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                expandedSection === section.id 
                  ? 'max-h-[1000px] opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="p-6 border-t border-gray-700/30 bg-gray-900/30">
                  {section.component ? (
                    section.component
                  ) : (
                    <div className="grid gap-4">
                      {section.content.map((text, idx) => (
                        <div key={idx} className="flex items-start gap-4 group/item">
                          <BsCheck2Circle className="w-6 h-6 mt-0.5 text-purple-400 group-hover/item:text-purple-300 flex-shrink-0" />
                          <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}