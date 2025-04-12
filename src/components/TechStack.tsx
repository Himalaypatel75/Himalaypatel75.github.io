import { useState } from 'react';

const technologies = [
  { name: 'Django REST', category: 'framework', description: 'Building robust APIs' },
  { name: 'FastAPI', category: 'framework', description: 'Lightning-fast API development' },
  { name: 'LangChain', category: 'ai', description: 'For LLM applications' },
  { name: 'LangGraph', category: 'ai', description: 'Agentic flow orchestration' },
  { name: 'Pydantic AI', category: 'ai', description: 'Data validation for AI' },
  { name: 'N8N Flow', category: 'workflow', description: 'Workflow automation' },
  { name: 'Agentic Flow', category: 'ai', description: 'Autonomous AI agents' },
  { name: 'NLP Solutions', category: 'ai', description: 'Natural language processing' },
  { name: 'LlamaIndex', category: 'ai', description: 'Data framework for LLM apps' },
  { name: 'Python', category: 'language', description: 'Primary programming language' },
  { name: 'Docker', category: 'devops', description: 'Containerization' },
  { name: 'Jenkins', category: 'devops', description: 'CI/CD automation' },
  { name: 'Kubernetes', category: 'devops', description: 'Container orchestration' },
  { name: 'Microservices', category: 'architecture', description: 'Distributed system design' },
  { name: 'Kafka', category: 'messaging', description: 'Event streaming platform' },
  { name: 'Redis', category: 'database', description: 'In-memory data store' },
  { name: 'Celery', category: 'framework', description: 'Distributed task queue' },
  { name: 'TensorFlow', category: 'ai', description: 'Machine learning framework' },
  { name: 'OpenCV', category: 'ai', description: 'Computer vision library' },
  { name: 'YOLO', category: 'ai', description: 'Real-time object detection' },
  { name: 'PostgreSQL', category: 'database', description: 'Relational database' },
];

const categoryColors: Record<string, string> = {
  ai: 'bg-purple-100 border-purple-300 hover:bg-purple-200',
  framework: 'bg-blue-100 border-blue-300 hover:bg-blue-200',
  language: 'bg-green-100 border-green-300 hover:bg-green-200',
  devops: 'bg-red-100 border-red-300 hover:bg-red-200',
  workflow: 'bg-yellow-100 border-yellow-300 hover:bg-yellow-200',
  messaging: 'bg-orange-100 border-orange-300 hover:bg-orange-200',
  database: 'bg-cyan-100 border-cyan-300 hover:bg-cyan-200',
  architecture: 'bg-indigo-100 border-indigo-300 hover:bg-indigo-200',
};

const categoryLabels: Record<string, string> = {
  ai: 'AI/ML',
  framework: 'Frameworks',
  language: 'Languages',
  devops: 'DevOps',
  workflow: 'Workflow',
  messaging: 'Messaging',
  database: 'Database',
  architecture: 'Architecture',
};

const TechStack = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const categories = Array.from(new Set(technologies.map(tech => tech.category)));
  
  const filteredTech = filter 
    ? technologies.filter(tech => tech.category === filter)
    : technologies;
    
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-gradient">Technical Skills</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Languages, frameworks and technologies I work with
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${!filter ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            All
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                        ${filter === category 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTech.map((tech, index) => (
            <div
              key={tech.name}
              className={`relative rounded-lg border p-4 transition-all duration-300 ${categoryColors[tech.category]} hover-scale
                         ${hoveredItem === tech.name ? 'z-10 shadow-lg scale-105' : 'z-0'}`}
              onMouseEnter={() => setHoveredItem(tech.name)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col h-full">
                <h3 className="font-bold text-gray-800">{tech.name}</h3>
                <span className="text-xs text-gray-500 mb-2">{categoryLabels[tech.category]}</span>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
