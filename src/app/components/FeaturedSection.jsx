import React from 'react';

const FeaturedSection = () => {
  const logos = [
    { name: 'YOURSTORY', color: 'text-foreground' },
    { name: 'Traveler', color: 'text-foreground' },
    { name: 'Livingetc', color: 'text-foreground' },
    { name: 'GQ', color: 'text-foreground' },
    { name: 'VOGUE', color: 'text-foreground' },
  ];

  return (
    <section className="py-16 bg-secondary/50">
      <div className="section-container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Featured</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognized and celebrated by leading publications - Amrutam in the spotlight!
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <p className={`text-xl lg:text-2xl font-bold ${logo.color} opacity-60 group-hover:opacity-100 transition-opacity`}>
                {logo.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;