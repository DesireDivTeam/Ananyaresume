import React from 'react';
import Wrapper from './Wrapper';

const Education = () => {
  const educationData = [
    {
        institution: "B.TECH (Computer Engineering) – 3rd year",
        year: "2022-2026",
        score: "7.535 CGPA",
        details: "Delhi Technological University, New Delhi"
      },
    {
      institution: "High School (Class XII)",
      year: "2022",
      score: "96%",
      details: "Amity Pushp Vihar, New Delhi"
    },
    {
      institution: "Secondary School (Class X)",
      year: "2020",
      score: "95.6%",
     details: "Delhi Public School, Gurgaon"
    }
  ];

  return (
      <section className="space-y-8">
        {/* Introduction Section */}
        <div>
          <h1 className="font-semibold md:text-5xl text-4xl mb-4">Introduction</h1>
          <div className="text-justify font-extralight space-y-4">
            <p>
              Excelled in academics in my school time and was awarded a Blue Badge
              Holder for consistent performance. Secured 95.6% in Class X boards
              with 100/100 in the subject Information and Technology.
              Additionally, I got 96% in Class XII boards.
            </p>
            <p>
              I was always in the top percentile of my class and always eager to
              learn and explore. I am extremely hardworking and believe in a
              can-do attitude.
            </p>
            <p>
              I am perseverant and dedicated towards my goal and will put my
              heart and soul into achieving my goal.
            </p>
            <p>
              I am not afraid of making mistakes, when I make a mistake, I will
              learn from it and try not to repeat it. The best way for
              self-growth and self-learning is by making mistakes and learning
              from them.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h1 className="font-semibold md:text-5xl text-4xl mb-6">Education</h1>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="border-l-4 border-gray-800 pl-4 space-y-2"
              >
                <h3 className="text-xl ">{edu.institution}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{edu.year}</span>
                  <span className="font-medium text-gray-300">{edu.score}</span>
                </div>
                {edu.details && (
                  <p className="text-gray-300">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Education;