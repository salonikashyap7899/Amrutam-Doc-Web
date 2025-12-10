import React from 'react';
import { Button } from '../components/ui/button';
import { Users, Award, ArrowRight } from 'lucide-react';


const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                For Ayurvedic Doctors
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Join Amrutam -<br />
              <span className="text-primary">Grow Your Practice</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Connect with more patients, set your own schedule, and grow your Ayurvedic practice effortlessly.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Doctors Onboarded</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">40+</p>
                  <p className="text-sm text-muted-foreground">Specialties Covered</p>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground group"
              >
                Join Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img
                src="https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxBeXVydmVkaWMlMjBkb2N0b3JzfGVufDB8fHx8MTc2NDk5NjEyN3ww&ixlib=rb-4.1.0&q=85"
                alt="Ayurvedic Doctors"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-large border border-border animate-float">
              <p className="text-sm text-muted-foreground">Trusted by</p>
              <p className="text-xl font-bold text-primary">10,000+ Patients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;