import React from "react";
import Wrapper from "@/app/_components/Wrapper";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Page() {
  return (
    <Wrapper className="py-5">
      <div className="max-w-4xl mx-auto px-2 md:px-4">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 space-y-10">
          {/* Header Section */}
          <div className="space-y-6 text-center">
            <h1 className="font-semibold text-4xl md:text-5xl bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient">
             Contact Me
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              I specialize in crafting innovative digital solutions and am eager to collaborate on impactful projects. Let&apos;s discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <a href="mailto:ananyabh09@gmail.com" className="group transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4 p-4 md:p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-700/50">
                <div className="bg-purple-900/50 p-4 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-purple-300" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-purple-300 uppercase tracking-wider">Professional Email</div>
                  <div className="text-sm md:text-lg text-gray-100">ananyabh09@gmail.com</div>
                </div>
              </div>
            </a>

            <a href="tel:+919354049483" className="group transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4  p-4 md:p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-700/50">
                <div className="bg-purple-900/50 p-4 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-purple-300" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-purple-300 uppercase tracking-wider">Direct Contact</div>
                  <div className="text-sm md:text-lg text-gray-100">+91 9354049483</div>
                </div>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/ananya-bhatnagar" target="_blank" rel="noopener noreferrer" className="group transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4  p-4 md:p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-700/50">
                <div className="bg-purple-900/50 p-4 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-purple-300" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-purple-300 uppercase tracking-wider">Professional Network</div>
                  <div className="text-sm md:text-lg text-gray-100">LinkedIn Profile</div>
                </div>
              </div>
            </a>

            <a href="https://github.com/AnanyaBhatnagar09" target="_blank" rel="noopener noreferrer" className="group transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-4  p-4 md:p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-700/50">
                <div className="bg-purple-900/50 p-4 rounded-lg group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-purple-300" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-purple-300 uppercase tracking-wider">Code Portfolio</div>
                  <div className="text-sm md:text-lg text-gray-100">GitHub Projects</div>
                </div>
              </div>
            </a>
          </div>

          {/* Footer Message */}
          <div className="text-center text-gray-300 pt-8 border-t border-gray-700/30 mt-8">
            <p className="text-lg font-light">
              Open to discussing innovative projects and collaborative opportunities
            </p>
            <p className="text-sm text-purple-300 mt-2">
              Based in Delhi, India 
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}