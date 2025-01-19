import React from 'react';

export default function Education() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="w-2.5 h-2.5 mt-2.5 rounded-full bg-purple-400" />
        <div>
          <h3 className="text-xl text-white font-medium">Delhi Technological University</h3>
          <p className="text-gray-400 text-base mt-1">B.Tech in Computer Science • 2022-2026</p>
          <p className="text-purple-400 text-base mt-1">CGPA: 7.6</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4">
        <div className="w-2.5 h-2.5 mt-2.5 rounded-full bg-purple-400" />
        <div>
          <h3 className="text-xl text-white font-medium">Delhi Public School</h3>
          <p className="text-gray-400 text-base mt-1">Class XII • CBSE Board • 2022</p>
          <p className="text-purple-400 text-base mt-1">Percentage: 95%</p>
        </div>
      </div>
    </div>
  );
}