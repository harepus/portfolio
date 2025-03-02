"use client";

import { useState, useEffect } from "react";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1")
        window.location.href = "mailto:your.email@example.com";
      if (event.key === "2")
        window.location.href = "https://linkedin.com/in/yourprofile";
      if (event.key === "3")
        window.location.href = "https://github.com/yourprofile";
      if (event.key === "4") window.location.href = "/resume.pdf";
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-left text-gray-800 font-serif">
      <div className="w-full max-w-2xl px-6">
        <h1 className="text-lg tracking-tight text-gray-700">
          Sebastian Hareide
        </h1>
        <p className="text-sm italic text-gray-500">[sɪˈbæstiːən ˈhɑːræɪdə]</p>

        <p className="text-sm text-gray-600 leading-relaxed max-w-lg mt-2 mb-6">
          Mathematics & Informatics student passionate about biotech, IT
          consulting, and software engineering.
        </p>

        <hr className="border-gray-200 w-full mb-6" />

        <div className="grid grid-cols-[1fr_auto_1fr] w-full gap-8 text-sm items-start">
          {/* Experience & Projects */}
          <div>
            <h2 className="text-xs tracking-wide text-gray-500 uppercase mb-4">
              EXPERIENCE & PROJECTS [1]
            </h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="inline-block w-2 h-2 bg-[#A7C7E7] mr-2"></span>
                Instagram Marketer @ SiO
                <span className="ml-auto text-gray-400">2022</span>
              </p>
              <p className="flex items-center">
                <span className="inline-block w-2 h-2 bg-[#FFADAD] mr-2"></span>
                Student Ambassador & Recruiter @ UiO
                <span className="ml-auto text-gray-400">2021</span>
              </p>
              <p className="flex items-center">
                <span className="inline-block w-2 h-2 bg-[#A0E7A0] mr-2"></span>
                Teacher in Programming (High School)
                <span className="ml-auto text-gray-400">2020</span>
              </p>
              <p className="flex items-center">
                <span className="inline-block w-2 h-2 bg-[#F9E79F] mr-2"></span>
                Vannplaning App – Kotlin (IN2000, UiO)
                <span className="ml-auto text-gray-400">2021</span>
              </p>
              <p className="text-gray-600 text-xs ml-5">
                Built a weather-based hydroplaning alert system in Kotlin.
              </p>
            </div>
          </div>

          {/* Sentrert loddrett separator-linje */}
          <div className="w-px bg-gray-300 h-16 mx-auto"></div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xs tracking-wide text-gray-500 uppercase mb-4">
              CONTACT [2]
            </h2>
            <div className="space-y-1">
              <p>
                <span className="text-gray-400">[1]</span>
                <a
                  href="mailto:your.email@example.com"
                  className="hover:underline"
                >
                  {" "}
                  Email ↗
                </a>
              </p>
              <p>
                <span className="text-gray-400">[2]</span>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="hover:underline"
                >
                  {" "}
                  LinkedIn ↗
                </a>
              </p>
              <p>
                <span className="text-gray-400">[3]</span>
                <a
                  href="https://github.com/yourprofile"
                  className="hover:underline"
                >
                  {" "}
                  GitHub ↗
                </a>
              </p>
              <p>
                <span className="text-gray-400">[4]</span>
                <a href="/resume.pdf" className="hover:underline">
                  {" "}
                  resume.pdf ↗
                </a>
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-500 text-left">
          New portfolio coming soon.
        </p>
      </div>
    </div>
  );
}
