import React from 'react';
import { Card, CardContent } from './ui/card';
import { FileText, UserPlus, CheckCircle, Play } from 'lucide-react';

const JoinCircle = () => {
  const steps = [
    {
      number: '01',
      icon: FileText,
      title: 'Get your referral code',
      description: 'Reach out to us or request a referral code through our platform.',
    },
    {
      number: '02',
      icon: UserPlus,
      title: 'Register on Amrutam',
      description: 'Create your professional profile with your credentials and specializations.',
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Complete KYC',
      description: 'Submit required documents for verification to ensure platform authenticity.',
    },
    {
      number: '04',
      icon: Play,
      title: 'Start consulting',
      description: 'Begin accepting patients and growing your practice immediately.',
    },
  ];

  return (
    <section id="join-circle" className="py-20 lg:py-28 bg-secondary/30">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Join Our Circle of Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Becoming a part of Amrutam is simple.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-primary/20" style={{ transform: 'translateY(-50%)' }}></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="relative border-2 border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 group bg-card"
              >
                <CardContent className="p-6 space-y-4 flex flex-col h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-medium">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JoinCircle;