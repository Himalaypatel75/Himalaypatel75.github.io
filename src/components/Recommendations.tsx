
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const recommendations = [
  {
    name: "Shayan Shaikh",
    role: "Blockchain Developer | Smart Contracts | DApps | Solidity | Bitcoin | Ethereum | Solana | Web 3.0",
    relationship: "Worked with Himalay but on different teams",
    date: "December 24, 2024",
    content: "Himalay is an exceptional Python developer with over 5 years of experience in AI, ML, Django, and NLP. Their expertise in building robust AI-driven applications and leveraging natural language processing to solve complex problems is remarkable. A dedicated professional with a proven track record of delivering innovative solutions, Himalay is a valuable asset to any team. Highly recommended!"
  },
  {
    name: "Parita Vyas",
    role: "Blockchain specialist | Full stack developer | MERN | Solidity | Web3.js | Ethers.js | Smart contract | Decentralized Application",
    relationship: "Worked with Himalay but on different teams",
    date: "December 24, 2024",
    content: "It has been an absolute pleasure working with Himalay Patel, and I am continually impressed by the depth and versatility of their skill set as a Python full-stack developer. With a strong foundation in Python, they excel not only in backend development but also in crafting intuitive, responsive user interfaces. Himalay Patel seamlessly integrates both frontend and backend technologies, building robust and scalable systems that are both functional and user-friendly."
  },
  {
    name: "Fermin Lopez",
    role: "Student at Goa University",
    relationship: "Worked with Himalay on the same team",
    date: "December 24, 2024",
    content: "I have had the distinct pleasure of working alongside Himalay Patel, and I am continually impressed by the breadth and depth of their expertise across various domains. As a Python developer specializing in AI/ML, Himalay Patel demonstrates a profound understanding of complex algorithms and machine learning models. Their ability to translate intricate data patterns into actionable insights is unparalleled."
  },
  {
    name: "Abhishek Tiwari",
    role: "@Adani|Senior Software Engineer|Python|Data Enthusiast",
    relationship: "Himalay was senior to Abhishek but didn't manage directly",
    date: "October 31, 2023",
    content: "I'm delighted to write a LinkedIn recommendation for Himalaya. They have been an invaluable team member, consistently providing me with their expertise and support. Himalaya is not only exceptionally skilled in problem-solving with Python but also possesses a remarkable ability to quickly adapt to new technologies. Their dedication and willingness to assist others make them a true asset to any team. I highly recommend himalaya for their outstanding technical prowess and collaborative spirit."
  },
  {
    name: "Nisarg Munjpara",
    role: "Java | Spring Boot | Microservices | Restful APIs | Kafka | Angular | Azure | CI/CD | Agile Methodologies",
    relationship: "Worked with Himalay on the same team",
    date: "September 17, 2023",
    content: "He is dedicated towards his work and always keep learning new things and that makes him a very mature developer who is always ready to take challenging task and make sure to deliver it."
  }
];

const Recommendations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recommendations.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="recommendations" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-gradient">Recommendations</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          What colleagues and clients say about my work
        </p>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden py-8">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {recommendations.map((rec, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-8"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 relative">
                    <div className="absolute -top-4 -left-2 text-purple-200">
                      <Quote size={48} />
                    </div>
                    
                    <div className="relative z-10">
                      <p className="text-gray-700 mb-6 italic">{rec.content}</p>
                      
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="font-bold text-gray-800">{rec.name}</h4>
                        <p className="text-sm text-gray-600 mb-1">{rec.role}</p>
                        <p className="text-xs text-gray-500">
                          {rec.relationship} • {rec.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
