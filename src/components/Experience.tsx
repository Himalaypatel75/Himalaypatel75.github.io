import { Briefcase } from 'lucide-react';

const experiences = [
  {
    position: "Sr. Python AI/ML Developer",
    company: "NinjaTech",
    logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    period: "Jul 2024 - Present · 10 mos",
    location: "Ahmedabad, Gujarat, India · Remote",
    description: `Lead developer for intelligent solutions using Django, FastAPI, and microservices. Specialize in LLM integration and agentic workflows with LangChain and LlamaIndex. Implement computer vision systems with YOLO and TensorFlow. Design scalable APIs and optimize performance with Docker and cloud deployment.`,
    skills: ["Python", "Artificial Intelligence (AI)", "Machine Learning", "LLMs"]
  },
  {
    position: "Back End Developer - II",
    company: "Qilin Lab",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    period: "Sep 2023 - Jul 2024 · 11 mos",
    location: "Pune, Maharashtra, India · Remote",
    description: `Developed scalable backend systems using Django and FastAPI. Built and maintained RESTful APIs, managed microservices architecture, and deployed applications using Docker and CI/CD pipelines. Integrated LLM-based features using LangChain for intelligent automation and workflows.`,
    skills: ["Django REST Framework", "Python", "FastAPI", "Docker", "CI/CD", "Cloud Platforms"]
  },
  {
    position: "Senior Lead Software Engineer",
    company: "Skylink Infosolutions™",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    period: "Dec 2022 - Sep 2023 · 10 mos",
    location: "Gandhinagar, Gujarat, India · On-site",
    description: `Developed LLM-based applications with LangChain and Python. Created robust backend services with Django REST Framework. Built high-performance APIs with FastAPI. Implemented dynamic frontend interfaces using Angular and React. Focused on prompt engineering for enhanced user experiences.`,
    skills: ["Django", "REST APIs", "FastAPI", "Angular", "React", "Python", "LangChain", "LLMs"]
  },
  {
    position: "Sr. Full Stack Developer",
    company: "XDuce",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    period: "Oct 2021 - Dec 2022 · 1 yr 3 mos",
    location: "Ahmedabad, Gujarat, India",
    description: `Developed full-stack applications using Python, JavaScript, Django, and React. Created RESTful APIs and implemented database solutions with MongoDB. Managed project lifecycles and collaborated with cross-functional teams to deliver client solutions.`,
    skills: ["Python", "JavaScript", "Django", "React", "Node.js", "MongoDB", "REST APIs", "Full Stack"]
  },
  {
    position: "Jr. Full Stack developer",
    company: "Skylink Infosolutions™",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    period: "May 2020 - Oct 2021 · 1 yr 6 mos",
    location: "Ahmedabad, Gujarat, India · On-site",
    description: `Built web applications using Django, Python, and JavaScript frameworks. Developed user interfaces with React and implemented backend functionality. Created RESTful APIs for system integration and data management.`,
    skills: ["Django", "JavaScript", "React", "Python", "REST APIs"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-gradient">Work Experience</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          My professional journey and roles
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-purple-200"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`mb-12 relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center border-4 border-purple-300 z-10">
                <Briefcase className="text-purple-500" size={20} />
              </div>
              
              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="rounded-full overflow-hidden w-12 h-12 mr-4 bg-gray-100 flex-shrink-0">
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{exp.position}</h3>
                      <div className="text-gray-600">{exp.company}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4 text-sm text-gray-500">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                  
                  {exp.description && (
                    <div className="mb-4 text-gray-700 whitespace-pre-line text-sm">
                      {exp.description}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-purple-50 text-purple-800 text-xs px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
