"use client";

import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500"] });

export default function Portfolio() {
  return (
    <div
      className={`bg-white text-black min-h-screen flex flex-col items-center justify-center px-8 ${inter.className}`}
    >
      <section className="max-w-2xl mx-auto text-left leading-[1.45]">
        {/* Name & Pronunciation with Business Card Styling */}
        <h1
          className={`text-[26px] tracking-wide ${playfair.className} text-gray-900 font-medium`}
        >
          Sebastian Hareide
        </h1>
        <p className="text-gray-500 text-[14px] italic mt-1">
          [sɛbɑˈstɪɑn ˈhɑːrəɪdə]
        </p>

        {/* Bio */}
        <p className="mt-4 text-[15px] text-gray-600">
          Mathematics & Informatics student interested in quantitative research,
          financial modeling, and algorithmic trading. Passionate about solving
          complex problems through data and computation.
        </p>
        <p className="mt-2 text-[14px] text-gray-500">
          Currently working on independent research projects, developing
          statistical arbitrage models, and exploring high-frequency trading
          strategies.
        </p>
      </section>

      {/* Subtle Divider */}
      <div className="border-t border-gray-200 my-10 w-full max-w-2xl"></div>

      {/* Experience Section */}
      <section className="max-w-2xl mx-auto text-left">
        <h2 className="text-[13px] font-medium text-gray-700 uppercase tracking-wider">
          Experience
        </h2>
        <ul className="mt-3 text-gray-700 space-y-1 text-[14px]">
          <li className="flex justify-between">
            <span>Intern @ Financial Research Lab</span>
            <span className="text-gray-500 text-[13px]">2024</span>
          </li>
          <li className="flex justify-between">
            <span>Software Engineer Intern @ Start-up</span>
            <span className="text-gray-500 text-[13px]">2023</span>
          </li>
          <li className="flex justify-between">
            <span>Research Assistant @ University</span>
            <span className="text-gray-500 text-[13px]">2022</span>
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="max-w-2xl mx-auto text-left mt-8">
        <h2 className="text-[13px] font-medium text-gray-700 uppercase tracking-wider">
          Projects
        </h2>
        <ul className="mt-3 text-gray-700 space-y-1 text-[14px]">
          <li className="flex justify-between">
            <span>Statistical Arbitrage Model</span>
            <span className="text-gray-500 text-[13px]">Ongoing</span>
          </li>
          <li className="flex justify-between">
            <span>High-Frequency Trading Simulation</span>
            <span className="text-gray-500 text-[13px]">2023</span>
          </li>
          <li className="flex justify-between">
            <span>Mathematical Modeling of Market Microstructure</span>
            <span className="text-gray-500 text-[13px]">2022</span>
          </li>
        </ul>
      </section>

      {/* Subtle Divider */}
      <div className="border-t border-gray-200 my-10 w-full max-w-2xl"></div>

      {/* Contact Section */}
      <section className="max-w-2xl mx-auto text-left">
        <h2 className="text-[13px] font-medium text-gray-700 uppercase tracking-wider">
          Contact
        </h2>
        <ul className="mt-3 text-gray-700 space-y-1 text-[14px]">
          <li>
            <a
              href="mailto:your.email@example.com"
              className="hover:underline text-gray-600 transition-opacity hover:opacity-70"
            >
              ¹ Email
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="hover:underline text-gray-600 transition-opacity hover:opacity-70"
            >
              ² LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourgithub"
              className="hover:underline text-gray-600 transition-opacity hover:opacity-70"
            >
              ³ GitHub
            </a>
          </li>
        </ul>
      </section>

      {/* Resume Button */}
      <div className="mt-6">
        <a
          href="/resume.pdf"
          download
          className="text-[14px] font-medium text-gray-700 hover:underline hover:opacity-70 transition-opacity"
        >
          Download Resume →
        </a>
      </div>
    </div>
  );
}
