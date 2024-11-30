import React from 'react';
import LuxuryLayout from '../layout/LuxuryLayout';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I make a purchase with cryptocurrency?",
      answer: "Simply select your desired items, proceed to checkout, and choose your preferred cryptocurrency for payment. We currently accept major cryptocurrencies including Bitcoin, Ethereum, and USDC."
    },
    {
      question: "Are all items authentic?",
      answer: "Yes, we guarantee the authenticity of all items. Each product comes with a certificate of authenticity and is sourced directly from authorized dealers or verified sellers."
    },
    {
      question: "What is your shipping policy?",
      answer: "We offer worldwide shipping with full insurance. Free shipping is available on orders over $1,000. Delivery times vary by location and typically range from 3-7 business days."
    },
    {
      question: "How do returns work?",
      answer: "We offer a 30-day return policy for unused items in original condition. Return shipping is free for customers in the United States. Refunds are processed in the same cryptocurrency used for purchase."
    }
  ];

  return (
    <LuxuryLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-serif text-luxury-cream mb-12">Frequently Asked Questions</h1>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-luxury-charcoal p-6 rounded-lg"
            >
              <h2 className="text-xl font-serif text-luxury-gold mb-3">{faq.question}</h2>
              <p className="text-luxury-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </LuxuryLayout>
  );
};

export default FAQ;