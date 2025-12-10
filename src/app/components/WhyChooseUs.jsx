import React from 'react';
import { Card, CardContent } from './ui/card';
import { Phone, MessageCircle, Video, Headphones, Wallet, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Phone,
      title: 'Instant FREE 5-Mins Call',
      description: 'Build trust with patients through a complimentary 5-minute consultation before they book.',
      color: 'primary',
    },
    {
      icon: MessageCircle,
      title: 'Forum for Meaningful Connections',
      description: 'Engage with a community of fellow practitioners and patients in our dedicated forum.',
      color: 'accent',
    },
    {
      icon: Video,
      title: 'Choose Your Session Mode',
      description: 'Offer consultations via instant chat, video call, or audio call - whatever works best for you and your patients.',
      color: 'primary',
    },
    {
      icon: Wallet,
      title: 'Smart Wallet',
      description: 'Track your earnings, manage payments, and withdraw funds seamlessly with our integrated wallet system.',
      color: 'accent',
    },
    {
      icon: Clock,
      title: 'Flexible Work Timing',
      description: 'Set your own schedule and availability. Work when it suits you best, maintaining perfect work-life balance.',
      color: 'primary',
    },
  ];

  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Why Doctors Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlock the benefits of Smarter Healthcare Management and Patient Care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-large transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`w-14 h-14 rounded-full ${
                      feature.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                    } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      className={`w-7 h-7 ${
                        feature.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Featured Image */}
        <div className="mt-16 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Experience the Power of Flexibility
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Join thousands of Ayurvedic practitioners who have transformed their practice with Amrutam. Set your hours, choose your consultation modes, and grow your practice on your terms.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-large">
              <img
                src="https://images.unsplash.com/photo-1659353888242-e7c29b331c61?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxBeXVydmVkaWMlMjBkb2N0b3JzfGVufDB8fHx8MTc2NDk5NjEyN3ww&ixlib=rb-4.1.0&q=85"
                alt="Doctor practicing flexibility"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;