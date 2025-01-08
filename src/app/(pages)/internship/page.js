import React from "react";
import Wrapper from "@/app/_components/Wrapper";
import { Building2, Calendar, LineChart } from "lucide-react";

export default function Page() {
  return (
    <Wrapper className="lg:border-2 lg:rounded-2xl lg:mt-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Section */}
        <div>
          <h1 className="font-light text-4xl md:text-5xl lg:text-6xl text-white/90">
            Internship
          </h1>
        </div>

        {/* Company Info */}
        <div className="flex flex-col md:flex-row gap-6 text-gray-400">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            <span>Haleon</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>1 Month</span>
          </div>
          <div className="flex items-center gap-2">
            <LineChart className="w-4 h-4" />
            <span>Data Analytics</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div className="text-gray-300 leading-relaxed">
            During my time at Haleon (London and Bangalore), I focused on Business Intelligence Data Analytics, specifically working with PowerBI to create comprehensive reports and visualizations. This experience enhanced my understanding of data integration and visualization techniques.
          </div>
          
          <div className="border-l border-gray-700 pl-6 space-y-6">
            <div className="text-gray-300">
              Developed expertise in connecting multiple data sources and creating intuitive visualizations that facilitate effective decision-making.
            </div>
            <div className="text-gray-300">
              Gained practical experience in translating complex data sets into user-friendly PowerBI reports, supporting data-driven business strategies.
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}