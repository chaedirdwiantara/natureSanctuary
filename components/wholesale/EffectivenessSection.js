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
            <span className="text-4xl mr-3">💪</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold wholesale-section-title">
              {effectivenessSectionContent.title}
            </h2>
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


      </div>
    </section>
  );
} 