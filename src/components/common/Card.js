import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children,
  hover = true,
  className = '',
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`card-luxury ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;