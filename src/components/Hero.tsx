
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="top" className="min-h-screen pt-20 flex flex-col items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 py-12">
        <div className="flex flex-col justify-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Himalay Patel</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Python AI/ML Developer
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mb-6">
            Experienced developer specializing in Python and AI technologies with 
            expertise in LLMs, NLP, and RAG implementations. Focus on building 
            intelligent systems and agentic workflows using modern frameworks.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h3 className="font-semibold text-purple-800 mb-2">Technical Expertise:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Building intelligent systems with LangChain and LlamaIndex</li>
                <li>Django REST framework for robust API development</li>
                <li>FastAPI for high-performance applications</li>
                <li>Natural Language Processing with advanced frameworks</li>
                <li>Multi-tenant architectures with Django</li>
                <li>Asynchronous task processing with Celery</li>
                <li>Event-driven architectures with Kafka</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <a href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          
          <div className="flex mt-8 space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-purple-600 transition-colors">
              <Github />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-purple-600 transition-colors">
              <Linkedin />
            </a>
            <a href="mailto:himalaypatel75@gmail.com" 
               className="hover:text-purple-600 transition-colors">
              <Mail />
            </a>
            <a href="tel:9624788668" 
               className="hover:text-purple-600 transition-colors">
              <Phone />
            </a>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-30 blur-2xl"></div>
            <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Himalay Patel" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
