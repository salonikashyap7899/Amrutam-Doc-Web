import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Smartphone, Wallet, Phone, TrendingUp } from 'lucide-react';

const AppPromotion = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Build trust and community with Forum',
      color: 'primary',
    },
    {
      icon: Wallet,
      title: 'Earn More with Pay-out through Wallets',
      color: 'accent',
    },
    {
      icon: Phone,
      title: 'Interact patients with 5-minute free Call',
      color: 'primary',
    },
    {
      icon: TrendingUp,
      title: 'Instant Access to your earnings with Wallet',
      color: 'accent',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              {/* Phone Frame Placeholder */}
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] p-4 shadow-large">
                <div className="bg-background rounded-[2.5rem] overflow-hidden border-8 border-foreground/10">
                  <div className="aspect-[9/19] bg-secondary/50 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                        <Smartphone className="w-10 h-10 text-primary" />
                      </div>
                      <p className="text-lg font-semibold text-foreground">Amrutam App</p>
                      <p className="text-sm text-muted-foreground">Available on iOS & Android</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Get Started Today -<br />
                <span className="text-primary">Download the App Now!</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Simplify consultations, manage patients, and grow your practice - all in one place.
              </p>
            </div>
            
            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg ${
                          feature.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                        } flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            feature.color === 'primary' ? 'text-primary' : 'text-accent'
                          }`}
                        />
                      </div>
                      <p className="text-sm font-medium text-foreground leading-snug">
                        {feature.title}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* App Store Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#"
                className="inline-block"
                aria-label="Get it on Google Play"
              >
                <div className="bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs">GET IT ON</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </div>
              </a>
              
              <a
                href="#"
                className="inline-block"
                aria-label="Download on the App Store"
              >
                <div className="bg-foreground text-background px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;