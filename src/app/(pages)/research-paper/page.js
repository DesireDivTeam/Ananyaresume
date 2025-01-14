import Image from "next/image";
import Wrapper from "@/app/_components/Wrapper";
import Link from "next/link";

export default function ResearchPaperPage() {
  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent pb-4">
            Research Paper
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Role of Technology in finding Planned Defaulters
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Image 1 */}
          <div className="group relative h-[300px] overflow-hidden rounded-xl">
            <Image
              src="/images/research1.jpeg"
              alt="Research methodology visualization"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              quality={95}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Image 2 */}
          <div className="group relative h-[300px] overflow-hidden rounded-xl">
            <Image
              src="/images/research2.jpg"
              alt="Data analysis visualization"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              quality={95}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/30">
            <h2 className="text-2xl font-semibold text-white mb-4">Publication Details</h2>
            <p className="text-gray-300 leading-relaxed">
              Published in International Journal of Advance Research, Ideas and Innovations in Technology 
              (Volume 10, Issue 1 - V10I1-1192) Available online at:{" "}
              <Link 
                href="https://www.ijariit.com" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.ijariit.com
              </Link>
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/30">
            <h2 className="text-2xl font-semibold text-white mb-4">Research Overview</h2>
            <div className="text-gray-300 space-y-4">
              <p className="leading-relaxed">
                In this research paper, I explored the concept of defaulters, their identification methods, 
                and how traditional banking techniques integrated with modern technologies can expedite 
                the detection of planned defaulters.
              </p>
              <p className="leading-relaxed">
                The study incorporates extensive field research, including surveys and interviews with 
                street vendors regarding payment modes and customer behavior. The findings were documented 
                both in written form and through a documentary to raise awareness about fraud prevention.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700/30">
            <h2 className="text-2xl font-semibold text-white mb-4">Methodology & Documentation</h2>
            <div className="text-gray-300 space-y-4">
              <p className="leading-relaxed">
                The research methodology included:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comprehensive literature review of existing banking techniques</li>
                <li>Field surveys with street vendors and small business owners</li>
                <li>Analysis of modern technological solutions in banking</li>
                <li>Documentary creation for public awareness</li>
              </ul>
              <p className="leading-relaxed">
                All research findings were consolidated into a documentary format to generate awareness 
                and help potential victims avoid fraudulent schemes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}