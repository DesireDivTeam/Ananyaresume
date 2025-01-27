'use client'
import React, { useState } from "react";
import Education from "@/app/_components/Education";
import Wrapper from "@/app/_components/Wrapper";
import { FaChevronDown, FaGraduationCap, FaLaptopCode, FaUserTie, FaTools, FaStar, FaFileAlt, FaCertificate } from "react-icons/fa";
import Certificates from "@/app/_components/Certificates";

const introPoints = [
  "Pursuing B.Tech in Computer Science (3rd Year) at Delhi Technological University",
  "Strong foundation in DSA, OOPS, C++ and Mathematics",
  "Ranked in top 1.75 percentile in JEE examination",
  "Solved 379+ Questions on Leetcode and 663+ on Code Studios",
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
    title: 'Academic Expertise',
    icon: <FaLaptopCode className="w-6 h-6" />,
    content: [
      "Projects including Portfolio Website and Data Analysis Tools",
      {
        text: 'Published research paper "Role of Technology in finding Planned Defaulters" - International Journal of Advance Research, Ideas and Innovations in Technology (Volume 10, Issue 1 - V10I1-1192)',
        link: 'https://www.ijariit.com/manuscript/role-of-technology-in-finding-planned-defaulters/',
        linkText: 'Read Paper'
      },
      "Documentary creator - Role of Technology in online payments trends, Risks & how to leverage technology to find planned defaulters",
      {
        text: "Case study author - 'Sustainable Fashion: H&M's Approach and Industry Trends'",
        link: "https://medium.com/@ananyabh09/case-study-d740e01a73de",
        linkText: "Read on Medium"
      },
      "Expertise in Data Structures and Algorithms using C++",
      "Object Oriented Programming & Advanced C++ concepts",
      "Python development with libraries like Selenium, BeautifulSoup",
      "Web Development using HTML, CSS, JavaScript",
     
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership & Extracurricular Activities',
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
  },
  {
    id: 'certificates',
    title: 'Academic and Extracurricular Certificates',
    icon: <FaCertificate className="w-6 h-6" />,
    component: <Certificates />
  }
];

export default function ResumePage() {
  const [expandedSection, setExpandedSection] = useState('');

  const toggleSection = (sectionId) => {
    setExpandedSection(prev => (prev === sectionId ? null : sectionId));
  };

  const renderContent = (item) => {
    if (typeof item === 'string') {
      return <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors">{item}</p>;
    }
    return (
      <div className="space-y-2">
        <p className="text-base md:text-lg text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors">
          {item.text}
        </p>
        <a 
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-purple-400 hover:text-purple-300 transition-colors text-sm"
        >
          {item.linkText} →
        </a>
      </div>
    );
  };

  return (
    <Wrapper className="py-7">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Resume
          </h1>
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-purple-400 hover:text-purple-300 border border-purple-400 hover:border-purple-300 rounded-full transition-colors"
          >
            <FaFileAlt className="w-4 h-4" />
            Read Full CV
          </a>
        </div>

        {/* Introduction Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/30 rounded-xl p-3 md:p-4 mb-4 hover:border-purple-500/30 transition-all duration-300">
          <div className="flex flex-wrap gap-3">
            {introPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 group">
                <FaStar className="w-4 h-4 mt-1 text-purple-400 group-hover:text-purple-300 flex-shrink-0" />
                <p className="text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {point}{idx === introPoints.length - 1 ? '.' : ';'}
                </p>
              </div>
            ))}
          </div>
        </div>
         {/* Accordion Sections */}
         <div className="space-y-3">
          {resumeSections.map((section) => (
            <div 
              key={section.id} 
              className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/30 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex justify-between items-center p-3 hover:bg-gray-800/50 transition-colors"
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
                      {section.content.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 group/item">
                          <div className="w-2.5 h-2.5 mt-2.5 rounded-full bg-purple-400" />
                          {renderContent(item)}
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