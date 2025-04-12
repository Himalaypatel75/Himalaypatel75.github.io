import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { SiPython, SiDjango, SiFastapi, SiLangchain, SiDocker, SiJenkins } from 'react-icons/si'

const App = () => {
  const [activeSection, setActiveSection] = useState('about')

  const sections = {
    about: {
      title: "About Me",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center space-x-4">
            <img
              src="/placeholder.svg"
              alt="Himalay Patel"
              className="w-32 h-32 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold">Himalay Patel</h2>
              <p className="text-gray-600">Senior Python AI/ML Developer</p>
            </div>
          </div>
          <p className="text-lg">
            Experienced Full Stack Developer specializing in AI/ML solutions using Python, LangChain, and Django. 
            Passionate about creating intelligent applications with a focus on NLP, AGENTIC FLOW, and RAG systems.
          </p>
          <div className="flex space-x-4">
            <a href="mailto:himalaypatel75@gmail.com" className="text-blue-600 hover:text-blue-800">
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a href="tel:+919624788668" className="text-blue-600 hover:text-blue-800">
              <FaPhone className="w-6 h-6" />
            </a>
            <a href="https://github.com/Himalaypatel75" className="text-gray-800 hover:text-gray-600">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/himalay-patel-python-dev/" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      )
    },
    experience: {
      title: "Experience",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {[
            {
              title: "Sr. Python AI/ML Developer",
              company: "NinjaTech",
              period: "Jul 2024 - Present",
              description: "Leading development of intelligent solutions using Django, FastAPI, and microservices architecture. Specializing in LLM integration and agentic flows with LangChain and LlamaIndex."
            },
            {
              title: "Back End Developer - II",
              company: "Qilin Lab",
              period: "Sep 2023 - Jul 2024",
              description: "Designing and developing scalable backend systems using Django and FastAPI, building clean APIs, and managing microservices."
            },
            {
              title: "Senior Lead Software Engineer",
              company: "Skylink Infosolutions™",
              period: "Dec 2022 - Sep 2023",
              description: "Developed LangChain's LLM Base Application, utilized Python and Django REST for robust backend services."
            }
          ].map((job, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-gray-600">{job.company} | {job.period}</p>
              <p className="mt-2">{job.description}</p>
            </div>
          ))}
        </motion.div>
      )
    },
    skills: {
      title: "Skills & Technologies",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {[
            { icon: <SiPython />, name: "Python" },
            { icon: <SiDjango />, name: "Django" },
            { icon: <SiFastapi />, name: "FastAPI" },
            { icon: <SiLangchain />, name: "LangChain" },
            { icon: <SiDocker />, name: "Docker" },
            { icon: <SiJenkins />, name: "Jenkins" }
          ].map((skill, index) => (
            <div key={index} className="flex items-center space-x-2 p-4 bg-white rounded-lg shadow">
              <span className="text-2xl">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </motion.div>
      )
    },
    projects: {
      title: "Projects",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              title: "INVESTING MANAGEMENT TOOL",
              description: "Microservices-based architecture with Kafka, featuring parameterized index building and rapid backtesting capabilities.",
              tech: ["Python", "Kafka", "Django REST", "Kubernetes"]
            },
            {
              title: "Talk To My Document LLM ChatBot",
              description: "Document-based chatbot using LangChain and Chroma DB for efficient information retrieval.",
              tech: ["Django", "LangChain", "Chroma DB", "Azure API"]
            },
            {
              title: "PETROLEUM CHAIN | CARDS | SURVEY",
              description: "Comprehensive system for petroleum chain management with card and survey features.",
              tech: ["Django REST", "Docker", "Celery", "Postman"]
            }
          ].map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )
    },
    recommendations: {
      title: "Recommendations",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {[
            {
              name: "Shayan Shaikh",
              role: "Blockchain Developer",
              text: "Himalay is an exceptional Python developer with over 5 years of experience in AI, ML, Django, and NLP. Their expertise in building robust AI-driven applications and leveraging natural language processing to solve complex problems is remarkable."
            },
            {
              name: "Parita Vyas",
              role: "Blockchain specialist | Full stack developer",
              text: "It has been an absolute pleasure working with Himalay Patel. They have a strong foundation in Python and excel in both backend development and crafting intuitive, responsive user interfaces."
            }
          ].map((rec, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold">{rec.name}</h3>
              <p className="text-gray-600 mb-2">{rec.role}</p>
              <p className="text-gray-700">{rec.text}</p>
            </div>
          ))}
        </motion.div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              {Object.entries(sections).map(([key, { title }]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeSection === key
                      ? 'border-blue-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {sections[activeSection as keyof typeof sections].content}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Himalay Patel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
