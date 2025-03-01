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
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-gray-800 font-serif">
      {/* Navn + fonetisk uttale */}
      <h1 className="text-lg font-semibold tracking-tight text-gray-700 mb-1">
        Sebastian Hareide
      </h1>
      <p className="text-sm italic text-gray-500">[sebaˈstian ˈhɑːræɪdə]</p>

      {/* Beskrivelse - Justert margin for å redusere tomrom */}
      <div className="w-full max-w-md text-left text-sm text-gray-600 leading-relaxed mt-1 mb-3">
        Mathematics & Informatics student passionate about quantitative
        research, financial modeling, and algorithmic trading. Currently
        developing statistical arbitrage models and high-frequency trading
        strategies.
      </div>

      {/* Container for Experience, Projects, Contact - Midtjustert */}
      <div className="w-full max-w-md text-left">
        {/* Erfaring */}
        <hr className="border-gray-300" />
        <div className="flex justify-between mt-3">
          <h2 className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
            EXPERIENCE
          </h2>
          <span className="text-xs text-gray-400">[1]</span>
        </div>
        <div className="mt-1 text-sm text-gray-700 space-y-1">
          <p className="flex justify-between">
            Intern @ Financial Research Lab{" "}
            <span className="text-gray-400">2024</span>
          </p>
          <p className="flex justify-between">
            Software Engineer Intern @ Start-up{" "}
            <span className="text-gray-400">2023</span>
          </p>
          <p className="flex justify-between">
            Research Assistant @ University{" "}
            <span className="text-gray-400">2022</span>
          </p>
        </div>

        {/* Prosjekter */}
        <div className="mt-5">
          <div className="flex justify-between">
            <h2 className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
              PROJECTS
            </h2>
            <span className="text-xs text-gray-400">[2]</span>
          </div>
          <div className="mt-1 text-sm text-gray-700 space-y-1">
            <p className="flex items-center">
              <span className="inline-block w-2 h-2 bg-blue-900 mr-2"></span>
              Statistical Arbitrage Model
              <span className="ml-auto text-gray-400">Ongoing</span>
            </p>
            <p className="flex items-center">
              <span className="inline-block w-2 h-2 bg-red-900 mr-2"></span>
              High-Frequency Trading Simulation
              <span className="ml-auto text-gray-400">2023</span>
            </p>
            <p className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-900 mr-2"></span>
              Mathematical Modeling of Market Microstructure
              <span className="ml-auto text-gray-400">2022</span>
            </p>
          </div>
        </div>

        {/* Kontakt */}
        <div className="mt-5 text-center">
          <div className="flex justify-center">
            <h2 className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
              CONTACT
            </h2>
            <span className="text-xs text-gray-400 ml-2">[3]</span>
          </div>
          <div className="mt-1 text-sm text-gray-700 space-y-1">
            <p>
              <span className="text-gray-400">[1]</span>{" "}
              <a
                href="mailto:your.email@example.com"
                className="hover:underline"
              >
                Email
              </a>
            </p>
            <p>
              <span className="text-gray-400">[2]</span>{" "}
              <a
                href="https://linkedin.com/in/yourprofile"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <span className="text-gray-400">[3]</span>{" "}
              <a
                href="https://github.com/yourprofile"
                className="hover:underline"
              >
                GitHub
              </a>
            </p>
            <p>
              <span className="text-gray-400">[4]</span>{" "}
              <a href="/resume.pdf" className="hover:underline">
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-10 text-xs text-gray-500">New portfolio coming soon.</p>
    </div>
  );
}
