import React from "react";
import Wrapper from "@/app/_components/Wrapper";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export default function Page() {
  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-lg border border-gray-700/30 rounded-2xl p-8 md:p-12 space-y-10">
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="font-light text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Let&apos;s Connect
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Feel free to reach out for opportunities, collaborations, or just to say hello. I&apos;m always interested in hearing about new projects and possibilities.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <a href="mailto:ananyabh09@gmail.com" className="group">
              <div className="flex items-center gap-4 p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300">
                <div className="bg-purple-900/50 p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-purple-300" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Email</div>
                  <div className="text-lg text-gray-100">ananyabh09@gmail.com</div>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+919354049483" className="group">
              <div className="flex items-center gap-4 p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300">
                <div className="bg-purple-900/50 p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-purple-300" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Phone</div>
                  <div className="text-lg text-gray-100">+91 9354049483</div>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex items-center gap-4 p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300">
                <div className="bg-purple-900/50 p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-6 h-6 text-purple-300" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">LinkedIn</div>
                  <div className="text-lg text-gray-100">Connect with me</div>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="group">
              <div className="flex items-center gap-4 p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300">
                <div className="bg-purple-900/50 p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-purple-300" />
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Location</div>
                  <div className="text-lg text-gray-100">Delhi, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Message */}
          <div className="text-center text-gray-400 pt-6">
            <p>Available for opportunities and collaborations</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}