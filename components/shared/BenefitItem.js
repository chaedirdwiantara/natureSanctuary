import { motion } from 'framer-motion';

export default function BenefitItem({ 
  benefit, 
  index = 0,
  isInView,
  theme = "wholesale",
  variant = "list" 
}) {
  const getThemeColors = () => {
    switch (theme) {
      case 'skincare':
        return {
          primary: 'text-skincare-primary',
          accent: 'text-skincare-accent'
        };
      case 'painrelief':
        return {
          primary: 'text-painrelief-primary',
          accent: 'text-painrelief-accent'
        };
      case 'wholesale':
      default:
        return {
          primary: 'text-wholesale-primary',
          accent: 'text-wholesale-accent'
        };
    }
  };

  const colors = getThemeColors();

  if (variant === "card") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
      >
        <div className="flex items-start space-x-3">
          <span className="text-lg">{benefit.icon}</span>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default list variant
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start space-x-3 group"
    >
      <span className={`${colors.primary} text-lg group-hover:scale-110 transition-transform duration-300`}>
        {benefit.icon}
      </span>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors duration-300">
          {benefit.title}
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
} 