import { motion } from 'framer-motion';
import AdvantageCard from './AdvantageCard';

export default function SynergisticSection({ 
  title,
  description,
  advantages,
  isInView,
  theme = "wholesale",
  delay = 0.6 
}) {
  const getThemeGradient = () => {
    switch (theme) {
      case 'skincare':
        return 'from-skincare-primary to-skincare-accent';
      case 'painrelief':
        return 'from-painrelief-primary to-painrelief-accent';
      case 'wholesale':
      default:
        return null; // Custom gradient for wholesale
    }
  };

  const gradient = getThemeGradient();
  const wholesaleGradientStyle = theme === 'wholesale' ? 
    { background: 'linear-gradient(to right, #cf9a2c, #e6b84a)' } : 
    {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="mt-12 text-center"
    >
      <div 
        className={`${gradient ? `bg-gradient-to-r ${gradient}` : ''} rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto`}
        style={wholesaleGradientStyle}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-lg md:text-xl mb-6 opacity-90 leading-relaxed">
          {description}
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {advantages.map((advantage, index) => (
            <AdvantageCard 
              key={index}
              advantage={advantage}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
} 