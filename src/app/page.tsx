"use client";
import { useEffect, useState } from "react";
import { Sun, Moon, Linkedin, Github, Mail } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    console.log("Stored theme:", storedTheme);

    if (storedTheme === "dark") {
      console.log("Applying dark mode");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else if (storedTheme === "light") {
      console.log("Applying light mode");
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      console.log("System prefers dark mode, applying it");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    console.log("Toggle dark mode called");
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      console.log("Setting dark mode");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      console.log("Setting light mode");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-backgroundLight dark:bg-backgroundDark opacity-0"></div>
    );
  }

  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark min-h-screen transition-colors duration-300">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 p-10 border-r border-borderLight dark:border-borderDark bg-backgroundLight dark:bg-backgroundDark shadow-lg fixed h-full">
          <h1 className="text-4xl font-bold text-textLight dark:text-textDark">
            Sebastian
          </h1>
          <nav className="mt-10 space-y-4 text-lg">
            <a href="#about" className="block hover:underline">
              Om meg
            </a>
            <a href="#projects" className="block hover:underline">
              Prosjekter
            </a>
            <a href="#experience" className="block hover:underline">
              Erfaring
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="ml-64 p-16 flex-1">
          <header className="flex justify-end">
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-borderLight dark:bg-borderDark rounded-full shadow-sm transition-all"
            >
              {darkMode ? (
                <Sun className="text-yellow-400" />
              ) : (
                <Moon className="text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </header>

          <section id="about" className="mt-10">
            <h2 className="text-6xl font-semibold leading-tight text-textLight dark:text-textDark">
              Informatikk, Matematikk & Biologi
            </h2>
            <p className="text-xl mt-4">Bachelorstudent</p>
          </section>

          <section id="projects" className="mt-16">
            <h3 className="text-4xl font-semibold">Prosjekter</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-cardLight dark:bg-cardDark p-6 rounded-xl shadow-lg border border-borderLight dark:border-borderDark">
                <h4 className="text-2xl font-medium">
                  AI-basert analyseverktøy
                </h4>
                <p className="mt-2">
                  Et prosjekt for å analysere store datasett med maskinlæring.
                </p>
              </div>
              <div className="bg-cardLight dark:bg-cardDark p-6 rounded-xl shadow-lg border border-borderLight dark:border-borderDark">
                <h4 className="text-2xl font-medium">
                  Simulering av biologiske systemer
                </h4>
                <p className="mt-2">
                  Modellering av biologiske nettverk for forskning.
                </p>
              </div>
            </div>
          </section>

          <section id="experience" className="mt-16">
            <h3 className="text-4xl font-semibold">Erfaring</h3>
            <ul className="mt-4 space-y-3">
              <li className="border-l-4 border-borderLight dark:border-borderDark pl-4">
                Softwareutvikler @ [Tidligere Jobb]
              </li>
              <li className="border-l-4 border-borderLight dark:border-borderDark pl-4">
                Forskningassistent @ [Biologi Lab]
              </li>
            </ul>
          </section>

          <footer className="mt-20 flex space-x-6">
            <a href="https://linkedin.com/in/dittnavn" target="_blank">
              <Linkedin
                size={30}
                className="hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://github.com/dittbrukernavn" target="_blank">
              <Github
                size={30}
                className="hover:scale-110 transition-transform"
              />
            </a>
            <a href="mailto:dinmail@example.com">
              <Mail
                size={30}
                className="hover:scale-110 transition-transform"
              />
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}
