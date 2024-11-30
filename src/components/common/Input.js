import React from 'react';
import { motion } from 'framer-motion';

const Input = ({ 
  label,
  error,
  icon: Icon,
  className = '',
  ...props 
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-luxury-cream">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-luxury-gray-400" />
          </div>
        )}
        <motion.input
          whileFocus={{ scale: 1.01 }}
          className={`
            input-luxury w-full
            ${Icon ? 'pl-10' : 'pl-4'}
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input;