'use client'
import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi"; 
import { BsLightbulb, BsFlagFill } from "react-icons/bs";

const sections = [
  {
    Icon: BiBookOpen,
    title: "Overview",
    content: "This case study explores trends in Sustainable fashion and H&M's approach towards it and future trends for industry. The research delves into how H&M is implementing sustainable practices while maintaining its fast-fashion business model."
  },
  {
    Icon: BsLightbulb,
    title: "Key Findings",
    bullets: [
      "Sustainable fashion is becoming increasingly important as consumers prioritize environmental consciousness.",
      "H&M has implemented various initiatives including recycling programs and sustainable material sourcing.",
      "The future of fashion industry lies in circular economy and sustainable practices."
    ]
  },
  {
    Icon: BsFlagFill,
    title: "Conclusion",
    content: "Sustainable fashion is not just a trend, but a necessary evolution of the industry. As consumers continue to prioritize sustainability in their fashion choices, companies like H&M are adapting their business models to meet these changing demands while maintaining profitability."
  }
];

export default function CaseStudyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-4">
          Case Study
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Sustainable Fashion: H&M Approach and Future Trends
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700/30 rounded-xl p-8 hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <section.Icon className="text-purple-400" size={24} />
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            </div>
            {section.content ? (
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>{section.content}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {section.bullets?.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                    <p className="text-gray-300 leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Read More Link */}
        <div className="flex justify-center pt-4">
          <Link 
            href="https://medium.com/@ananyabh09/case-study-d740e01a73de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors hover:scale-105 transform duration-200 bg-gray-800/50 px-6 py-3 rounded-full"
          >
            <span>Read Full Case Study</span>
            <FaExternalLinkAlt size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}