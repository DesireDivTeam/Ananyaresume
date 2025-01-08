import React from "react";
import Wrapper from "@/app/_components/Wrapper";
import { Mail, Phone } from "lucide-react";

export default function Page() {
  return (
    <Wrapper>
      <div className="max-w-3xl mx-auto">
        <div className="sm:bg-gray-800/50 backdrop-blur-sm sm:border border-gray-700/50 sm:rounded-xl sm:p-8 space-y-8">
          <h1 className="font-light text-4xl md:text-5xl text-white/90">
            Get in Touch
          </h1>

          <div className="group cursor-pointer">
            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300">
              <div className="bg-gray-700/50 p-3 rounded-lg">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  Email
                </div>
                <div className="text-lg">ananyabh09@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300">
              <div className="bg-gray-700/50 p-3 rounded-lg">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-500 uppercase tracking-wider">
                  Phone
                </div>
                <div className="text-lg">+91 9354049483</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
