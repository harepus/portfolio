"use client";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Portfolio: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "1")
        window.location.href = "mailto:sebastian.s.hareide@gmail.com";
      if (event.key === "2")
        window.location.href =
          "https://www.linkedin.com/in/sebastian-hareide-569722208/";
      if (event.key === "3")
        window.location.href = "https://github.com/yourprofile";
      if (event.key === "4") window.location.href = "/resume.pdf";
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>Sebastian Hareide</title>
        <meta name="description" content="Sebastian Hareide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center min-h-screen">
        <main className="py-12 flex flex-col items-start w-full max-w-2xl">
          <div className="w-full">
            <div className="mb-12">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-xl font-normal text-gray-1000">
                    Sebastian Hareide
                  </h1>
                  <p className="text-sm italic text-gray-700">
                    [sɪˈbæstiːən ˈhɑːræɪdə]
                  </p>
                </div>
                <span className="text-gray-800">[1]</span>
              </div>
              <div className="mb-8">
                <p className="mb-2 text-gray-600">
                  Mathematics & Informatics student passionate about biotech, IT
                  consulting, and software engineering.
                </p>
                <p className="text-gray-600">
                  Currently studying Mathematics at UiO. Finished a bachelor's
                  in Informatics.
                </p>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div className="flex flex-col md:flex-row justify-between mb-16">
              {/* EXPERIENCE Section */}
              <div className="flex-1 md:pr-8 mb-8 md:mb-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-gray-300 mr-2">■</span>
                    <span className="text-gray-800 experience-font">
                      [EXPERIENCE]
                    </span>
                  </div>
                  <div className="text-gray-400">[2]</div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">■</span>
                      <span>Instagram Marketer @ SiO</span>
                    </div>
                    <span className="text-gray-400">Ongoing</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-blue-500 mr-2">■</span>
                      <span>Student Ambassador @ UiO</span>
                    </div>
                    <span className="text-gray-400">Ongoing</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-gray-800 mr-2">■</span>
                      <span>HS: Programming Teacher</span>
                    </div>
                    <span className="text-gray-400">2022/23</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-gray-800 mr-2">■</span>
                      <span>"Vannplaning" App (IN2000, UiO)</span>
                    </div>
                    <span className="text-gray-400">2024</span>
                  </div>
                </div>
              </div>

              {/* CONTACT Section */}
              <div className="flex-1 md:pl-8">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <span className="text-gray-800 mr-2">■</span>
                    <span className="text-gray-800 contact-font">
                      [CONTACT]
                    </span>
                  </div>
                  <div className="text-gray-400">[3]</div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">¹</span>
                      <a
                        href="mailto:sebastian.s.hareide@gmail.com"
                        className="hover:underline"
                      >
                        Email
                      </a>
                    </div>
                    <span className="text-gray-400">↗</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">²</span>
                      <a
                        href="https://www.linkedin.com/in/sebastian-hareide-569722208/"
                        className="hover:underline"
                      >
                        LinkedIn
                      </a>
                    </div>
                    <span className="text-gray-400">↗</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">³</span>
                      <a
                        href="https://github.com/harepus"
                        className="hover:underline"
                      >
                        GitHub
                      </a>
                    </div>
                    <span className="text-gray-400">↗</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">⁴</span>
                      <a href="/resume.pdf" className="hover:underline">
                        resume.pdf
                      </a>
                    </div>
                    <span className="text-gray-400">↗</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  Navigate with numbers [1-4]
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Portfolio;
