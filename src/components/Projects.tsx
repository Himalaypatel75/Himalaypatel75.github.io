
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  {
    title: "INVESTING MANAGEMENT TOOL | BACKTESTIING | Microservices | Kafka",
    period: "Oct 2023 - Present",
    company: null,
    description: `A microservices architecture powered by Kafka for seamless communication. Features include parameterized index building for customized investment strategies, rapid backtesting capabilities that process tests in minutes, and scalable infrastructure supporting 250,000+ simultaneous backtests. Includes mobile application for portfolio management.`,
    skills: ["Jenkins", "Python", "Apache Kafka", "Django REST Framework", "Kubernetes"],
    images: ["https://images.unsplash.com/photo-1649972904349-6e44c42644a7", "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"],
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    title: "Talk To my Document LLM Powered ChatBot",
    period: "Mar 2024 - Apr 2024",
    company: null,
    description: `Document interaction system built with Django and LangChain framework. Uses Chroma DB for vector storage and retrieval. Workflow includes document upload, Azure API integration, and natural language querying. Users can ask questions about their documents and receive relevant, context-aware responses based on document content.`,
    skills: ["Django", "Large Language Models (LLM)", "Vector Databases", "LangChain", "Celery", "Open AI", "Pinecone"],
    images: ["https://images.unsplash.com/photo-1649972904349-6e44c42644a7", "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"],
    links: {
      live: "https://example.com",
      github: "https://github.com"
    }
  },
  {
    title: "PETROLEUM CHAIN | CARDS | SURVEY",
    period: "Aug 2023 - Oct 2023",
    company: null,
    description: `Comprehensive system for petroleum chain company using Python and Django REST. Features card and survey management modules. Implemented with Docker containerization, Celery for background tasks, Postman for API testing, and BitBucket for version control. Streamlined operations and enhanced data management.`,
    skills: ["Docker", "Celery", "Python", "Django REST Framework"],
    images: ["https://images.unsplash.com/photo-1649972904349-6e44c42644a7", "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"],
    links: {
      live: "https://example.com",
      github: null
    }
  },
  {
    title: "ALGO TRADING SOFTWARE",
    period: "Feb 2023 - Sep 2023",
    company: "Skylink Infosolutions™",
    description: `Algorithmic trading software that automates securities trading in financial markets. Analyzes market data using predefined algorithms to identify trading opportunities and execute trades based on rule-based strategies. Built with Python, FastAPI, Django REST Framework, and PostgreSQL.`,
    skills: ["Python", "FastAPI", "Django REST Framework", "PostgreSQL"],
    images: ["https://images.unsplash.com/photo-1649972904349-6e44c42644a7", "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"],
    links: {
      live: null,
      github: "https://github.com"
    }
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Some of my recent work and contributions
        </p>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto relative max-w-5xl"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-4/5 lg:basis-4/5">
                <div 
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 h-full"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                    <ScrollArea className="p-6 lg:p-8 max-h-[500px]">
                      <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                      
                      <div className="text-sm text-gray-500 mb-4">
                        <span>{project.period}</span>
                        {project.company && (
                          <span> • {project.company}</span>
                        )}
                      </div>
                      
                      <div className="text-gray-700 mb-6 whitespace-pre-line text-sm">
                        {project.description}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-purple-50 text-purple-800 text-xs px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        {project.links.live && (
                          <a 
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                          >
                            View Project <ExternalLink className="ml-1" size={16} />
                          </a>
                        )}
                        
                        {project.links.github && (
                          <a 
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors"
                          >
                            GitHub <Github className="ml-1" size={16} />
                          </a>
                        )}
                      </div>
                    </ScrollArea>
                    
                    <div className="bg-gray-100 p-4 flex items-center justify-center">
                      <div className="relative w-full h-64 overflow-hidden rounded-lg">
                        {project.images.length > 0 && (
                          <>
                            <img 
                              src={project.images[activeProject === index ? (activeProject % project.images.length) : 0]} 
                              alt={project.title}
                              className="w-full h-full object-cover transition-opacity duration-500"
                            />
                            
                            {project.images.length > 1 && (
                              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                                <div className="flex space-x-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                                  {project.images.map((_, imgIndex) => (
                                    <button
                                      key={imgIndex}
                                      onClick={() => setActiveProject(index)}
                                      className={`w-2 h-2 rounded-full ${
                                        activeProject === index && (activeProject % project.images.length) === imgIndex
                                          ? 'bg-white'
                                          : 'bg-white/50'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-8">
            <CarouselPrevious className="relative static left-0 translate-y-0 mr-4" />
            <div className="flex space-x-2">
              {projects.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full ${
                    activeProject === idx ? "bg-purple-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <CarouselNext className="relative static right-0 translate-y-0 ml-4" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
