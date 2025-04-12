
import { ChevronUp, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Himalay Patel</h2>
            <p className="text-gray-400 max-w-md">
              Python AI/ML Developer specializing in LLMs, NLP, and agentic flows. 
              Building intelligent systems with Django, FastAPI, and modern AI frameworks.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:himalaypatel75@gmail.com"
                 className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:9624788668"
                 className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Phone size={20} />
              </a>
            </div>
            
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Himalay Patel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-center">
          <a 
            href="#top" 
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ChevronUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
