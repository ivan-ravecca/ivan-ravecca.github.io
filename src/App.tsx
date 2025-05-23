import React, { useState, useEffect } from "react";
import { Link as LinkReact } from "react-router-dom";
import {
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Link,
} from "lucide-react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Sample data - replace with your information
  const personalInfo = {
    name: "Iván Sánchez Ravecca",
    title: "Software Engineer",
    email: "ivan.ravecca@gmail.com",
    phone: "+598 99 272 545",
    location: "Montevideo, Uruguay",
    github: "https://github.com/ivan-ravecca",
    linkedin: "https://www.linkedin.com/in/ivansr/",
    summary: [
      `I am a proactive, self-taught IT professional with 17+ years of experience, combining strong emotional intelligence with critical thinking. I thrive in team environments, fostering talent, and helping others grow.`,
      `Over the past 5 years, I’ve led account management, talent scouting, project onboarding, and deliverable quality assurance. I collaborate with clients to align technical solutions with business goals and contribute to organizational strategies and process improvements.`,
      `With 13+ years of development experience, I’ve specialized in agile environments, leveraging Angular, React, and AWS ecosystem. My expertise includes architectural enhancements, performance optimization, code reviews, and implementing industry best practices.`,
      `As a Certified Scrum Master, I’ve managed sprints, backlogs, and incident prioritization while aligning team objectives with business needs.`,
      `For 6 years, I was instrumental in the talent selection process, conducting technical interviews, refining methodologies, and mentoring new hires. I also facilitated project onboarding, boot camps, and training programs to support career growth and organizational success.`,
    ],
  };

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Node.js",
    "AWS",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "CI/CD",
  ];

  const experience = [
    {
      company: "Teros",
      position: "Head of Engineering",
      period: "2025 - Present",
      location: "Remote",
      achievements: ["xxxxxx", "yyyy", "zzzzz"],
    },
    {
      company: "Globant",
      position: "Technical Director",
      period: "2011 - 2024",
      location: "Montevideo, Uruguay",
      achievements: ["xxxx", "yyyy", "zzzzz"],
    },
  ];

  const projects = [
    {
      name: "Project 1",
      description: "Some desc",
      tech: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/ivan-ravecca/",
      demo: "https://somesite.com",
    },
    {
      name: "Project 2",
      description: "Some desc",
      tech: ["React", "Socket.io", "MongoDB", "Express"],
      github: "https://github.com/ivan-ravecca/",
      demo: "https://somesite.com",
    },
  ];

  const education = [
    {
      degree: "IT Analyst",
      school: "ORT Uruguay",
      period: "2008 - 2012",
      location: "Montevideo, Uruguay",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header with Dark Mode Toggle */}
        <div className="flex justify-end mb-8">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Hero Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 transition-colors duration-300">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4">
              {personalInfo.title}
            </h2>

            {personalInfo?.summary?.map((line, index) => (
              <p
                className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
                key={index}
              >
                {line}
                {index < personalInfo.summary.length - 1 && <br />}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Mail className="w-4 h-4" />
              <LinkReact
                to={`mailto:${personalInfo.email}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {personalInfo.email}
              </LinkReact>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <Phone className="w-4 h-4" />
              <LinkReact
                to="https://wa.me/59899272545?text=Hello%20Iván%20I%20would%20like%20to%20contact%20you"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{personalInfo.phone}</span>
              </LinkReact>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin className="w-4 h-4" />
              <LinkReact
                to="https://maps.app.goo.gl/9XZFU4DxJeZ59uPr8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{personalInfo.location}</span>
              </LinkReact>
            </div>
            <div className="flex items-center gap-2">
              <LinkReact
                to={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </LinkReact>
            </div>
            <div className="flex items-center gap-2">
              <LinkReact
                to={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </LinkReact>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {job.position}
                  </h4>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {job.period}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h5 className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                    {job.company}
                  </h5>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {job.location}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-300 flex items-start"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <LinkReact
                    to={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </LinkReact>
                  <LinkReact
                    to={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </LinkReact>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h4>
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  {edu.period}
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h5 className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  {edu.school}
                </h5>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {edu.location}
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default App;
