import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    { name: 'Home', path: '/', anchor: '#home' },
    { name: 'About', path: '/', anchor: '#about' },
    { name: 'Education', path: '/', anchor: '#education' },
    { name: 'Experience', path: '/', anchor: '#experience' },
    { name: 'Work', path: '/work' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleClick = (item: typeof navItems[0]) => (e: React.MouseEvent) => {
    if (item.anchor && location.pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(item.anchor);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else if (item.anchor) {
      window.location.href = `/${item.anchor}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-portfolio-dark/80 backdrop-blur-md border-b border-portfolio-green/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleClick(item)}
                className={`nav-link text-lg font-mono transition-all duration-300 cursor-pointer ${
                  (location.pathname === item.path) || (item.anchor && location.pathname === '/')
                    ? 'text-portfolio-green' 
                    : 'text-foreground hover:text-portfolio-green'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleClick(item)}
                className={`block py-2 text-lg font-mono transition-all duration-300 cursor-pointer ${
                  (location.pathname === item.path) || (item.anchor && location.pathname === '/')
                    ? 'text-portfolio-green' 
                    : 'text-foreground hover:text-portfolio-green'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;