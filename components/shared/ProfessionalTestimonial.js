import { motion } from 'framer-motion';

export default function ProfessionalTestimonial({ 
  testimonial, 
  index = 0,
  isInView,
  theme = "wholesale",
  className = "" 
}) {
  const getThemeColors = () => {
    switch (theme) {
      case 'skincare':
        return {
          gradient: 'from-skincare-primary/10 to-skincare-accent/10',
          border: 'border-skincare-primary/20',
          accent: 'text-skincare-primary'
        };
      case 'painrelief':
        return {
          gradient: 'from-painrelief-primary/10 to-painrelief-accent/10', 
          border: 'border-painrelief-primary/20',
          accent: 'text-painrelief-primary'
        };
      case 'wholesale':
      default:
        return {
          gradient: 'from-wholesale-primary/10 to-wholesale-accent/10',
          border: 'border-wholesale-primary/20', 
          accent: 'text-wholesale-primary'
        };
    }
  };

  const colors = getThemeColors();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-gradient-to-br ${colors.gradient} rounded-2xl p-6 md:p-8 border ${colors.border} relative ${className}`}
    >
      {/* Quote Icon */}
      <div className="absolute top-4 left-4 text-4xl opacity-20">
        "
      </div>

      {/* Quote Text */}
      <div className="relative z-10">
        <p className="text-gray-700 leading-relaxed text-lg italic mb-6 pl-6">
          {testimonial.quote}
        </p>
      </div>

      {/* Attribution */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-gray-900 text-base">
            — {testimonial.professional}
          </p>
          <p className={`text-sm ${colors.accent} font-medium`}>
            {testimonial.location}
          </p>
        </div>
        
        {testimonial.verified && (
          <div className="flex items-center space-x-1">
            <span className="text-green-600 text-sm">✓</span>
            <span className="text-xs text-gray-500 font-medium">Verified</span>
          </div>
        )}
      </div>

      {/* Background Pattern */}
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5">
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9Z" />
        </svg>
      </div>
    </motion.div>
  );
} 