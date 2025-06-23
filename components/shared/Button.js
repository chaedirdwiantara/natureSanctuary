import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'primary', 
  theme = 'default', 
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  ...props 
}) {
  const getVariantClasses = () => {
    const baseClasses = 'font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm rounded-md',
      md: 'px-6 py-3 text-base rounded-lg',
      lg: 'px-8 py-4 text-lg rounded-lg',
      xl: 'px-10 py-5 text-xl rounded-xl'
    };

    const variantClasses = {
      primary: {
        skincare: 'btn-skincare focus:ring-skincare-primary',
        painrelief: 'btn-painrelief focus:ring-painrelief-primary',
        wholesale: 'btn-wholesale focus:ring-wholesale-primary',
        default: 'bg-brand-gold text-white hover:bg-yellow-600 shadow-lg hover:shadow-xl focus:ring-brand-gold'
      },
      secondary: {
        skincare: 'btn-skincare-outline focus:ring-skincare-primary',
        painrelief: 'btn-painrelief-outline focus:ring-painrelief-primary',
        wholesale: 'btn-wholesale-outline focus:ring-wholesale-primary',
        default: 'border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white focus:ring-brand-gold'
      },
      ghost: {
        skincare: 'text-skincare-primary hover:bg-skincare-light focus:ring-skincare-primary',
        painrelief: 'text-painrelief-primary hover:bg-painrelief-light focus:ring-painrelief-primary',
        wholesale: 'text-wholesale-primary hover:bg-wholesale-light focus:ring-wholesale-primary',
        default: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500'
      }
    };

    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant][theme] || variantClasses[variant].default} ${className}`;
  };

  const buttonContent = (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={getVariantClasses()}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );

  const linkContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Link href={href} className={getVariantClasses()}>
        {children}
      </Link>
    </motion.div>
  );

  return href ? linkContent : buttonContent;
} 