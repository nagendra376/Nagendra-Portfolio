import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Twitter, Instagram, Github, Code } from 'lucide-react';
import Navigation from '../components/Navigation';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(linksRef.current?.children || [],
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.3 }
    )
    .fromTo(footerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    );
  }, []);

  const contactLinks = [
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:nagendraswsah@pm.me',
      color: 'text-portfolio-green' 
    },
    { 
      name: 'X', 
      icon: Twitter, 
      href: 'https://x.com/nagendra92407',
      color: 'text-portfolio-green' 
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://www.instagram.com/drippxesthetic_/',
      color: 'text-portfolio-green' 
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/nagendra376',
      color: 'text-portfolio-green' 
    },
    { 
      name: 'Leetcode', 
      icon: Code, 
      href: 'https://leetcode.com/nDX2IJ9Ehk/',
      color: 'text-portfolio-green' 
    }
  ];

  return (
    <div ref={contactRef} className="min-h-screen bg-portfolio-dark flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex flex-col justify-between pt-24 pb-8">
        <div className="container mx-auto px-6">
          <div ref={linksRef} className="max-w-2xl space-y-8">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="group block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center space-x-4 text-4xl md:text-6xl font-mono font-bold hover:translate-x-4 transition-transform duration-300">
                    <Icon className={`w-8 h-8 md:w-12 md:h-12 ${link.color} group-hover:animate-pulse`} />
                    <span className={`${link.color} group-hover:text-portfolio-green-hover transition-colors`}>
                      {link.name}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div 
          ref={footerRef}
          className="container mx-auto px-6"
        >
          <div className="border-t border-portfolio-green/30 pt-8">
            <p className="text-center text-lg font-mono text-muted-foreground">
              ©2025, Nagendra Dwivedi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;