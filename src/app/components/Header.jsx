import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'About Us', href: 'why-choose' },
    { label: 'Onboarding', href: 'join-circle' },
    { label: 'FAQ', href: 'faq' },
    { label: 'Testimonials', href: 'testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-background'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl font-bold text-primary tracking-wide">
              AMRUTAM
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-sm"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919826352321"
              className="flex items-center text-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">+91 9826352321</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                <h2 className="text-2xl font-bold text-primary">AMRUTAM</h2>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <a
                    href="tel:+919826352321"
                    className="flex items-center text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">+91 9826352321</span>
                  </a>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
                  >
                    Join Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;