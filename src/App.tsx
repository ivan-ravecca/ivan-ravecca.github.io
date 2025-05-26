import { useState, useEffect } from "react";
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
    title: "IT Analyst",
    email: {
      display: "ivan.ravecca@gmail.com",
      link: "ivan.ravecca+githubcontact@gmail.com",
    },
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

  const languages = [
    { language: "Spanish", level: "Native", code: "C2" },
    { language: "English", level: "Proficiency", code: "C2" },
    { language: "Portuguese", level: "Beginner", code: "A1" },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Node.js",
    "PHP",
    "AWS",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "CI/CD",
    "Automated tests",
  ];

  const softSkills = [
    "Leadership",
    "Teamwork",
    "Communication",
    "Problem-solving",
    "Adaptability",
    "Emotional intelligence",
    "Mentoring",
    "Agile methodologies",
    "Time management",
    "Conflict resolution",
    "Decision making",
    "Collaboration",
    "Empathy",
    "Negotiation",
    "Strategic thinking",
    "Analytical skills",
    "Project management",
    "Customer focus",
    "Continuous learning",
    "Resilience",
    "Coaching",
    "Facilitation",
    "Active listening",
    "Conflict management",
    "Interpersonal skills",
    "Trust building",
  ];

  const experience = [
    {
      company: "Teros",
      position: "Head of Engineering",
      period: "2025 - Present",
      location: "Remote",
      achievements: [
        "Contributed to the delivery of the Amoeb.ai product by ensuring a smooth and efficient rollout of new features and bug fixes.",
        "Actively participated in the formation of the core development team, including screening candidates, conducting interviews, onboarding new team members, and providing ongoing mentorship and technical guidance.",
        "Supported the company's efforts toward SOC 2 certification by helping implement required changes, drafting internal documentation, and ensuring compliance with relevant security policies and procedures. Collaborated closely with cross-functional teams to promote best practices and maintain a high standard of operational excellence.",
      ],
    },
    {
      company: "Globant",
      position: "Technical Director",
      period: "2011 - 2024",
      location: "Montevideo, Uruguay",
      achievements: [
        "Led multiple client accounts, contributing to team formation, talent acquisition, and project onboarding. Oversaw the delivery of high-quality solutions by aligning technical execution with client objectives. Actively engaged with stakeholders to propose and implement technical strategies that addressed business needs.",
        "Supported the business unit through organizational improvements and strategic planning, promoting processes aimed at enhancing Globant’s service delivery and client satisfaction.",
        "Served as UI Architect for Autodesk's PLM platform, contributing to front-end architecture using Angular, React, and JavaScript within the AWS ecosystem. Responsibilities included code reviews, architectural design and improvement, performance optimization, risk identification, and the enforcement of coding standards and best practices.",
        "Certified Scrum Master with hands-on experience managing sprint planning, backlog grooming, effort estimation, refinement, and delivery planning. Collaborated with Product Owners to align product goals and delivery timelines. Led incident response efforts, prioritizing and resolving customer issues while maintaining focus on sprint commitments.",
        "Played a key role in Globant’s Gatekeeping process for over 6 years. Conducted technical interviews, helped refine assessment frameworks, and supported talent growth and development. Facilitated onboarding for new teams and led various talent development initiatives, including boot camps and training programs, to foster long-term team capabilities.",
      ],
    },
    {
      company: "Xerox",
      position: "IT Analyst",
      period: "2010 - 2011",
      location: "Montevideo, Uruguay",
      achievements: [
        "Led a three-person development team in the enhancement of an internal CRM system, with a strong focus on improving user experience and system performance. Spearheaded the implementation of new features that increased overall efficiency and supported business operations.",
        ,
      ],
    },
    {
      company: "Crea Labs",
      position: "Fullstack developer",
      period: "2007 - 2010",
      location: "Montevideo, Uruguay",
      achievements: [
        "Worked on multiple projects, including large-scale social networks, service sales platforms, and real estate websites. In the latter part of my time at the company, I managed projects directly with clients and coordinated with other departments—such as design and quality assurance—to ensure deadlines were met and expectations were aligned.",
      ],
    },
  ];

  const projects = [
    {
      name: "Amoeb.ai",
      description:
        "Advanced AI—deep learning, cognitive AI, and neural networks—to deliver tailored, precise insights that empower smarter decisions.",
      tech: ["React", "Typescript", "PostgreSQL", "AWS"],
      github: null,
      demo: "https://www.amoeb.ai/",
    },
    {
      name: "Autodesk PLM Solution (Fusion Manage)",
      description:
        "Is a cloud-based Product Lifecycle Management (PLM) solution that streamlines workflows and enhances collaboration across product development teams and stakeholders. It offers configurable, user-friendly PLM processes, a flexible and scalable cloud platform, and an open API for integration with systems like PDM, ERP, and CRM.",
      tech: ["React", "Typescript", "PostgreSQL", "AWS"],
      github: null,
      demo: "https://www.autodesk.com/latam/products/fusion-manage/overview",
    },
    {
      name: "Escuela de Enfermería",
      description:
        "Institutional website for the school, designed to showcase its various services. It also includes an internal section for managing administrative resources.",
      tech: ["React", "Typescript", "PostgreSQL", "Express"],
      github: "https://github.com/ivan-ravecca/escuela-site",
      demo: "https://escuelaenfermeria.com.uy/",
    },
    {
      name: "El Carnet Plástico",
      description:
        "E-commerce website for selling products related to signage and custom merchandise. The platform is focused on offering personalized items and solutions for visual communication needs.",
      tech: ["React", "Typescript", "PostgreSQL", "Node", "Strapi"],
      github: null,
      demo: "https://elcarnet.com.uy/",
    },
  ];

  const education = [
    {
      degree: "IT Analyst",
      school: "ORT Uruguay",
      period: "2010 - 2014",
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
          </div>
          <div className="text-left mb-6">
            {personalInfo?.summary?.map((line, index) => (
              <p
                className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
                style={{
                  marginBottom:
                    index < personalInfo.summary.length - 1 ? "1.5rem" : "0",
                }}
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
                to={`mailto:${personalInfo.email.link}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {personalInfo.email.display}
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

        {/* Idioms section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Languages
          </h3>
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {lang.language}
                </h4>
                <div className="flex items-center">
                  <span className="text-gray-600 dark:text-gray-400 mr-3">
                    {lang.level}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                    {lang.code}
                  </span>
                </div>
              </div>
            ))}
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

        {/* Soft Skills Section */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
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
                  {/* {project.github && (
                    <LinkReact
                      to={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </LinkReact>
                  )} */}
                  <LinkReact
                    to={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Site
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
