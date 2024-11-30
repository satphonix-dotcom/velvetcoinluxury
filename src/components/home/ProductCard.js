import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="product-card bg-luxury-charcoal h-full flex flex-col"
    >
      <div className="relative aspect-[3/4] w-full">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover product-card-image"
        />
        <div className="product-card-overlay">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <Link
              to={`/product/${product.id}`}
              className="btn-luxury w-full text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl text-luxury-cream mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-luxury-gray-400 mb-2 line-clamp-2">
            {product.brand}
          </p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-luxury-gold font-medium">
            {product.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}
          </span>
          <span className="text-luxury-gray-400 text-sm">
            {product.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;