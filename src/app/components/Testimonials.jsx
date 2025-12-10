import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Priya Sharma',
      specialization: 'Panchakarma Specialist',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxBeXVydmVkaWMlMjBkb2N0b3JzfGVufDB8fHx8MTc2NDk5NjEyN3ww&ixlib=rb-4.1.0&q=85',
      quote: 'Amrutam has transformed my practice completely. The platform is intuitive, and I can now reach patients across the country. The wallet feature makes managing finances incredibly simple.',
    },
    {
      name: 'Dr. Rajesh Kumar',
      specialization: 'Ayurvedic Physician',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxBeXVydmVkaWMlMjBkb2N0b3JzfGVufDB8fHx8MTc2NDk5NjEyN3ww&ixlib=rb-4.1.0&q=85',
      quote: 'The flexibility to set my own schedule and choose consultation modes has been a game-changer. I appreciate the 5-minute free call feature that helps build patient trust.',
    },
    {
      name: 'Dr. Anjali Patel',
      specialization: 'Herbal Medicine Expert',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1659353887907-000c9a92377d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxBeXVydmVkaWMlMjBkb2N0b3JzfGVufDB8fHx8MTc2NDk5NjEyN3ww&ixlib=rb-4.1.0&q=85',
      quote: 'Being part of the Amrutam community has connected me with like-minded practitioners. The forum is an excellent space for knowledge sharing and professional growth.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-secondary/30">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            What other Ayurvedic Doctors are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by experts - Hear what Ayurvedic doctors say about Amrutam.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-large transition-all duration-300 hover:-translate-y-1 group bg-card"
            >
              <CardContent className="p-6 space-y-6 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed flex-1 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                {/* Doctor Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.specialization}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;