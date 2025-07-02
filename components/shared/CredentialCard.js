import { motion } from 'framer-motion';

export default function CredentialCard({ 
  credential, 
  index = 0,
  isInView,
  theme = "wholesale",
  variant = "default" 
}) {
  const getThemeColors = () => {
    switch (theme) {
      case 'skincare':
        return {
          primary: 'text-skincare-primary',
          light: 'bg-skincare-light',
          border: 'border-skincare-primary/20',
          accent: 'text-skincare-accent'
        };
      case 'painrelief':
        return {
          primary: 'text-painrelief-primary',
          light: 'bg-painrelief-light', 
          border: 'border-painrelief-primary/20',
          accent: 'text-painrelief-accent'
        };
      case 'wholesale':
      default:
        return {
          primary: 'text-wholesale-primary',
          light: 'bg-wholesale-light',
          border: 'border-wholesale-primary/20',
          accent: 'text-wholesale-accent'
        };
    }
  };

  const colors = getThemeColors();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex items-start space-x-4 p-4 md:p-6 rounded-xl border ${colors.border} bg-white hover:${colors.light} transition-all duration-300 group`}
    >
      <div className="flex-shrink-0">
        <div className="text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
          {credential.icon}
        </div>
      </div>
      
      <div className="flex-grow min-w-0">
        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight">
          {credential.title}
        </h4>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {credential.description}
        </p>
      </div>

      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className={`${colors.primary} text-sm font-semibold`}>✓</span>
      </div>
    </motion.div>
  );
} 