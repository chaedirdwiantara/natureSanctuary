import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { effectivenessConditions, effectivenessSectionContent } from '../../lib/effectivenessData';
import ConditionCard from '../shared/ConditionCard';

export default function EffectivenessSection() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} id="effectiveness" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <img src="/images/products/fish-oil.png" alt="Fish Oil Capsule" className="w-12 h-12 mr-3" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold wholesale-section-title">
              {effectivenessSectionContent.title}
            </h2>
          </div>
          <p className="text-xl wholesale-section-subtitle max-w-4xl mx-auto mb-6 leading-relaxed">
            {effectivenessSectionContent.subtitle}
          </p>
          <div className="bg-wholesale-light border border-wholesale-primary/20 rounded-lg p-4 inline-block">
            <p className="text-lg wholesale-section-title font-semibold">
              {effectivenessSectionContent.wholesaleNote}
            </p>
          </div>
        </motion.div>

        {/* Conditions List - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {effectivenessConditions.map((condition, index) => (
            <ConditionCard
              key={index}
              condition={condition}
              index={index}
              isInView={sectionInView}
              theme="wholesale"
            />
          ))}
        </motion.div>

        {/* Bottom Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-wholesale-light rounded-2xl p-8 md:p-12 max-w-4xl mx-auto border border-wholesale-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold wholesale-section-title mb-4">
              Ready to Meet This Demand?
            </h3>
            <p className="text-lg md:text-xl wholesale-section-subtitle mb-6 leading-relaxed">
              These conditions represent significant market opportunities. Partner with us to provide proven solutions that healthcare professionals trust.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl mb-2">📈</div>
                <h4 className="font-semibold wholesale-card-title mb-1">Growing Market</h4>
                <p className="text-sm wholesale-card-text">Pain management industry expanding rapidly</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl mb-2">🏥</div>
                <h4 className="font-semibold wholesale-card-title mb-1">Professional Trust</h4>
                <p className="text-sm wholesale-card-text">Recommended by healthcare providers</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl mb-2">💰</div>
                <h4 className="font-semibold wholesale-card-title mb-1">Premium Pricing</h4>
                <p className="text-sm wholesale-card-text">High-value products with strong margins</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 