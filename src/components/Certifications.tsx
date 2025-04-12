
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "Introduction to LangGraph",
    issuer: "LangChain",
    date: "Jan 2025",
    credentialId: "1wpqjcejvv",
    skills: ["LangChain", "Open AI", "Agentic Framework", "Natural Language Processing (NLP)", "Large Language Models (LLM)"],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    title: "Mathematical Foundations of Machine Learning",
    issuer: "Udemy",
    date: "Jun 2024",
    credentialId: "UC-62e5e60f-80b1-4aec-a856-d69155acfc4b",
    skills: ["Machine Learning", "TensorFlow", "PyTorch", "Mathematical Modeling"],
    image: null
  },
  {
    title: "AZ-204 Developing Solutions for Microsoft Azure",
    issuer: "Udemy",
    date: "Oct 2023",
    credentialId: "UC-3abeff27-2b53-4ee4-9625-44f8533dfe76",
    skills: ["Software Deployment", "VM", "Microsoft Azure"],
    image: null
  },
  {
    title: "Introduction to MongoDB",
    issuer: "MongoDB",
    date: "Oct 2023",
    credentialId: "MDBpebc4t9zo1",
    skills: ["MongoDB"],
    image: null
  },
  {
    title: "LangChain- Develop LLM powered applications with LangChain",
    issuer: "Udemy",
    date: "Sep 2023",
    credentialId: "UC-94ce72ea-1187-488f-a036-e337079318bb",
    skills: ["LangChain", "Open AI", "ChatGPT", "Large Language Models (LLM)"],
    image: null
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "May 2022",
    credentialId: "",
    skills: ["Azure", "Cloud Computing", "Microsoft Services"],
    image: null
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-gradient">Certifications</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Professional certifications and licenses
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
            >
              <div className="bg-purple-600 h-3"></div>
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Award className="text-purple-600" size={20} />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg mb-1">{cert.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {cert.issuer} • {cert.date}
                    </p>
                    
                    {cert.credentialId && (
                      <p className="text-xs text-gray-500 mb-3">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-purple-50 text-purple-800 text-xs px-2 py-0.5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center text-purple-600 text-sm hover:text-purple-800 transition-colors"
                    >
                      Show credential <ExternalLink className="ml-1" size={14} />
                    </a>
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

export default Certifications;
