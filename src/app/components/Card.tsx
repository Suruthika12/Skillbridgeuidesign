import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', hoverable = false, onClick }: CardProps) {
  const Component = hoverable ? motion.div : 'div';
  
  return (
    <Component
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-200 ${className} ${
        onClick ? 'cursor-pointer' : ''
      }`}
      whileHover={hoverable ? { y: -4, shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' } : {}}
      onClick={onClick}
    >
      {children}
    </Component>
  );
}