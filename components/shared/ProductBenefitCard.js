import { motion } from 'framer-motion';

export default function ProductBenefitCard({ 
  product, 
  index, 
  isInView,
  theme = "wholesale" 
}) {
  const getThemeColors = () => {
    switch (theme) {
      case 'skincare':
        return {
          gradient: 'from-skincare-primary to-skincare-accent',
          light: 'bg-skincare-light',
          primary: 'text-skincare-primary',
          glow: 'shadow-glow-green'
        };
      case 'painrelief':
        return {
          gradient: 'from-painrelief-primary to-painrelief-accent',
          light: 'bg-painrelief-light',
          primary: 'text-painrelief-primary',
          glow: 'shadow-glow-orange'
        };
      case 'wholesale':
      default:
        return {
          gradient: 'from-wholesale-primary to-wholesale-accent',
          light: 'bg-wholesale-light',
          primary: 'text-wholesale-primary',
          glow: 'shadow-glow-blue'
        };
    }
  };

  const colors = getThemeColors();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
    >
      <div className="text-center mb-6">
        <div className={`bg-gradient-to-br ${colors.gradient} text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${colors.glow}`}>
          {product.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
      </div>

      <div className="space-y-4 mb-6">
        {product.features.map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-start space-x-3">
            <span className="text-green-600 mt-1 flex-shrink-0">✓</span>
            <p className="text-gray-700 leading-relaxed">{feature}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className={`${colors.light} rounded-lg p-4`}>
          <p className={`text-sm font-semibold ${colors.primary} mb-1`}>Wholesale Advantage:</p>
          <p className="text-sm text-gray-700">{product.wholesale_benefit}</p>
        </div>
      </div>
    </motion.div>
  );
} 