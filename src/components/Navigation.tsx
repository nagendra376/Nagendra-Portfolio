import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current.children,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Recent Work', path: '/work' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-portfolio-dark/80 backdrop-blur-md border-b border-portfolio-green/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-start space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link text-lg font-mono transition-all duration-300 ${
                location.pathname === item.path 
                  ? 'text-portfolio-green' 
                  : 'text-foreground hover:text-portfolio-green'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;