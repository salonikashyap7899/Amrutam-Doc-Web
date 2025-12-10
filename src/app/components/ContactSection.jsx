import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    inquiry: 'doctor',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.contact || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    // Mock submission
    toast.success('Message sent successfully! Our team will contact you soon.');
    
    // Reset form
    setFormData({
      name: '',
      contact: '',
      email: '',
      inquiry: 'doctor',
      message: '',
    });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/30">
      <div className="section-container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We&apos;re here to help you on your wellness journey. Reach out to us for any questions, product inquiries, or personalized advice.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border shadow-large">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact">Your Contact Number *</Label>
                  <Input
                    id="contact"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.contact}
                    onChange={(e) => handleChange('contact', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inquiry">Inquiry Type</Label>
                  <Select
                    value={formData.inquiry}
                    onValueChange={(value) => handleChange('inquiry', value)}
                  >
                    <SelectTrigger id="inquiry">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="doctor">I want to On-board as a Doctor</SelectItem>
                      <SelectItem value="patient">Patient Inquiry</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-large">
              <img
                src="https://images.unsplash.com/photo-1730977806288-96b82f795008?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxBeXVydmVkaWMlMjBoZXJic3xlbnwwfHx8fDE3NjQ5OTYxMzJ8MA&ixlib=rb-4.1.0&q=85"
                alt="Ayurvedic herbs and natural ingredients"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;