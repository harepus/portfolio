"use client";
import { useEffect, useState } from "react";
import { Sun, Moon, Linkedin, Github, Mail } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  // Sikrer at dark mode hentes riktig fra localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Funksjon for å bytte mellom dark og light mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 p-10 border-r border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            Sebastian
          </h1>
          <nav className="mt-10 space-y-4 text-lg">
            <a
              href="#about"
              className="block text-gray-700 dark:text-gray-300 hover:underline"
            >
              Om meg
            </a>
            <a
              href="#projects"
              className="block text-gray-700 dark:text-gray-300 hover:underline"
            >
              Prosjekter
            </a>
            <a
              href="#experience"
              className="block text-gray-700 dark:text-gray-300 hover:underline"
            >
              Erfaring
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-16">
          <header className="flex justify-end">
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full shadow-sm"
            >
              {darkMode ? (
                <Sun className="text-yellow-400" />
              ) : (
                <Moon className="text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </header>

          <section id="about" className="mt-10">
            <h2 className="text-6xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
              Informatikk, Matematikk & Biologi
            </h2>
            <p className="text-xl mt-4 text-gray-700 dark:text-gray-300">
              Masterstudent i CS: Bioscience
            </p>
          </section>

          <section id="projects" className="mt-16">
            <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
              Prosjekter
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
                <h4 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                  AI-basert analyseverktøy
                </h4>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Et prosjekt for å analysere store datasett med maskinlæring.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
                <h4 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                  Simulering av biologiske systemer
                </h4>
                <p className="mt-2 text-gray-700 dark:text-gray-400">
                  Modellering av biologiske nettverk for forskning.
                </p>
              </div>
            </div>
          </section>

          <section id="experience" className="mt-16">
            <h3 className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
              Erfaring
            </h3>
            <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
              <li className="border-l-4 border-gray-500 pl-4">
                Softwareutvikler @ [Tidligere Jobb]
              </li>
              <li className="border-l-4 border-gray-500 pl-4">
                Forskningassistent @ [Biologi Lab]
              </li>
            </ul>
          </section>

          <footer className="mt-20 flex space-x-6">
            <a
              href="https://linkedin.com/in/dittnavn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                size={30}
                className="text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://github.com/dittbrukernavn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                size={30}
                className="text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform"
              />
            </a>
            <a href="mailto:dinmail@example.com">
              <Mail
                size={30}
                className="text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform"
              />
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}
