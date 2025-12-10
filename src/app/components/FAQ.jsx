import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';

const FAQ = () => {
  const faqCategories = [
    {
      value: 'consultation',
      label: 'Consultation',
      questions: [
        {
          question: 'What is Amrutam?',
          answer: 'Amrutam is a comprehensive Ayurvedic healthcare platform that connects certified Ayurvedic doctors with patients seeking holistic wellness solutions. Our platform enables doctors to grow their practice while maintaining flexibility and control.',
        },
        {
          question: 'How does Amrutam help me grow as a practitioner?',
          answer: 'Amrutam provides you with access to thousands of patients actively seeking Ayurvedic consultations. With features like flexible scheduling, multiple consultation modes, integrated payment systems, and a supportive community forum, you can focus on patient care while we handle the logistics.',
        },
        {
          question: 'How do I become a part of Amrutam Doctor?',
          answer: 'Joining is simple: Request a referral code, register on our platform with your professional credentials, complete the KYC verification process, and start consulting. The entire process typically takes 2-3 business days.',
        },
      ],
    },
    {
      value: 'wallet',
      label: 'Wallet',
      questions: [
        {
          question: 'How does the wallet system work?',
          answer: 'All your consultation earnings are automatically credited to your Amrutam wallet. You can track your balance in real-time and withdraw funds to your bank account at any time with zero transaction fees.',
        },
        {
          question: 'Is there a minimum withdrawal amount?',
          answer: 'Yes, the minimum withdrawal amount is ₹500. This helps us maintain efficient transaction processing while keeping costs low for our doctors.',
        },
      ],
    },
    {
      value: 'forum',
      label: 'Forum',
      questions: [
        {
          question: 'What is the Amrutam Global platform?',
          answer: 'Amrutam Global is our international initiative to connect Ayurvedic practitioners worldwide with patients seeking authentic Ayurvedic care. It includes our mobile apps, web platform, community forum, and educational resources.',
        },
      ],
    },
    {
      value: 'shop',
      label: 'Shop',
      questions: [
        {
          question: 'What documents do I need to provide?',
          answer: 'You will need to provide: Valid medical degree/certification in Ayurveda, Government-issued ID proof, Professional registration certificate, Bank account details for payments, and Recent photograph.',
        },
        {
          question: 'Is there a fee to join Amrutam?',
          answer: 'No, joining Amrutam is completely free. We only charge a small platform fee (15-20%) on successful consultations to maintain and improve our services.',
        },
      ],
    },
  ];

  const [showMore, setShowMore] = useState(false);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find quick answers to common questions to help you navigate the app and its features easily.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="consultation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {faqCategories.map((category) => (
              <TabsContent key={category.value} value={category.value}>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.slice(0, showMore ? category.questions.length : 3).map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
          
          {!showMore && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowMore(true)}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                See More
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;