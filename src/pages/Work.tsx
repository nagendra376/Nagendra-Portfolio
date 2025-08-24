import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navigation from '../components/Navigation';

const Work = () => {
  const workRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(projectsRef.current?.children || [],
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  const projects = [
    {
      title: "Ikks x mariniere",
      subtitle: "French luxury clothing store",
      description: "It was quite a big project, i was hired as a freelance contractor via codersh web services to built their mariniere colab collection page. All communications went through slack, it was quite fun to to work with two french founders and in the end it was one of my most memorable experience."
    },
    {
      title: "ReinventU",
      subtitle: "Florida based fitness influencer supplements store",
      description: "A comprehensive e-commerce platform built for a fitness influencer, featuring custom product configurations, subscription management, and integrated payment processing."
    }
  ];

  return (
    // <div ref={workRef} className="min-h-screen bg-portfolio-dark">
    //   <Navigation />
      
    //   <div className="pt-24 pb-16">
    //     <div className="container mx-auto px-6">
    //       <div ref={projectsRef} className="max-w-4xl space-y-16">
    //         {projects.map((project, index) => (
    //           <div 
    //             key={index}
    //             className="border-l-2 border-portfolio-green pl-8 hover:border-portfolio-green-hover transition-colors duration-300"
    //           >
    //             <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4 text-portfolio-green">
    //               {project.title}
    //             </h1>
    //             <h2 className="text-xl md:text-2xl font-mono text-foreground mb-6">
    //               {project.subtitle}
    //             </h2>
    //             <p className="text-lg font-mono text-muted-foreground leading-relaxed">
    //               <span className="text-foreground font-semibold">Thoughts | Role :</span> {project.description}
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='text-4xl md:text-5xl font-mono font-bold mt-4 mb-4 text-portfolio-green text-center'>Updating Soon!</div>
  );
};

export default Work;