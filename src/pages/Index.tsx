
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Recommendations from '@/components/Recommendations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <Certifications />
      <Recommendations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
