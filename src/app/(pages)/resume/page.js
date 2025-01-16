'use client'
import React, { useState } from "react";
import Education from "@/app/_components/Education";
import Wrapper from "@/app/_components/Wrapper";
import { FaChevronDown } from "react-icons/fa";

const resumeSections = [
  {
    id: 'education',
    title: 'Education',
    component: <Education />
  },
  {
    id: 'specialization',
    title: 'Specialization & Academics',
    content: [
      "In my JEE examination, I was among the top 1.75 percentile and have also cleared JEE Advanced.",
      "I am pursuing a B-tech in Computer Science from the prestigious Delhi Technological University. Computer Science has given me exposure to various fields, such as data structures and algorithms, database management systems, operating systems, computer organization and architecture, and many more.",
      "I have gained excellence in Object Oriented Programming (OOPS) and Data Structure and Algorithms (DSA). I have solved over 379 Questions on Leetcode related to DSA and 663 Questions on Code Studios related to DSA and Front-End Web Development.",
      "I have specialized in C, C++ and have DSA and OOPS in C++. I have also made a Snakes and Ladder Project in C language as well using data structures such as graphs, queues, 2D Arrays and 1D arrays.",
      "I have completed an Udemy course in Python, wherein I learned the basics of Python and worked with various libraries such as Selenium, Beautiful Soup, Flask, Numpy, Pandas and many more. In this course, I have done many projects as well, such as Tic-Tac-Toe, snakes and Ladder, and web scraper for movie titles, to name a few.",
      "Apart from Computer Science, I have always been really interested in the subject of mathematics. Maths has always been one of my strong subjects. So, whenever a bit of technology is used in Mathematics, that would intrigue me."
    ]
  },
  {
    id: 'leadership',
    title: 'Extra curricular activities & Leadership',
    content: [
      "I also have my heart in dance. I have learnt Kathak, an Indian Classical Dance form and have passed two stages of the Kathak dance exam. I am also a part of an Indian Dance Society Club Nrityangana and have performed in various events of the college and have represented my college for the same in IIT Kanpur, IIT Bombay and IIT Roorkee.",
      "Currently, I am Public Relation Head and member of the senior council of Nrityangana (DTU dance club). I currently perform as well manage additional responsibilities regarding funds, events and files to name a few.",
      "Member of IEEE club where I am a content coordinator.",
      "I have also been part of the 'Desh Ke Mentor' Programme, a government-initiated program Where-in we were assigned four mentees. I used to check up on them every week and provide them tips regarding time management, how to study their career options, and much more in detail.",
      "I have also taken part in tech events of my college like VIHAAN and INVICTUS. In INVICTUS, I was a part of the PR and Corporate department.",
      "I helped in forming questions for a few events for INVICTUS, like guestimates, Matheletics (Maths quiz event), as well as rules and was also a part of the team that was conducting the events.",
      "I was in the PR department for VIHAAN(hackathon) wherein I spread awareness about the event.",
      "My college has given me good exposure to public speaking. I have improved my speaking skills and can, without hesitation, speak to any number of people about a topic."
    ]
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    content: [
      "C, C++, OOPS, Data Structures and Algorithms in C and C++.",
      "HTML, CSS, Python, Web Scraping using BeautifulSoup and Selenium"
    ]
  }
];

export default function ResumePage() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(prev => (prev === sectionId ? null : sectionId));
  };

  return (
    <Wrapper>
      {/* Header Section */}
      <div className="text-center mb-12 pt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-4">
          Resume
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my educational background, technical expertise, and professional experiences
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 pb-12 px-4">
        {resumeSections.map((section, index) => (
          <div 
            key={section.id} 
            className="group bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/30 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex justify-between items-center p-6 hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-purple-400/50 text-lg font-mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-xl md:text-2xl font-medium text-start text-white group-hover:text-purple-200 transition-colors">
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
                ? 'max-h-[2000px] opacity-100' 
                : 'max-h-0 opacity-0'
            } overflow-hidden backdrop-blur-sm`}>
              <div className="p-6 border-t border-gray-700/30 bg-gray-900/30">
                {section.component ? (
                  section.component
                ) : (
                  <div className="space-y-4">
                    {section.content.map((text, idx) => (
                      <p key={idx} className="text-gray-300 text-justify leading-relaxed hover:text-gray-200 transition-colors">
                        {text}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}