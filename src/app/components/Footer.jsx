import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Facebook, Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
    }
  };

  const informationLinks = [
    'About Us',
    'Terms and Conditions',
    'Privacy Policy',
    'Privacy Policy for Mobile Apps',
    'Shipping and Return Policy',
    'International Delivery',
    'For Business, Hotels and Resorts',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">AMRUTAM</h3>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Get in Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="mailto:support@amrutam.global" className="flex items-start gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>support@amrutam.global</span>
                </a>
                <a href="tel:+919826352321" className="flex items-start gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>+91 9826352321</span>
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Amrutam Pharmaceuticals Pvt Ltd.,<br />chitragupt ganj, Naka Hindola,<br />Lucknow, Uttar Pradesh - 226003</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Information */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {informationLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Follow Us */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-semibold text-foreground">Subscribe to our Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to our Newsletter and join Amrutam Family today!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amrutam Pharmaceuticals Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;