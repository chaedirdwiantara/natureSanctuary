import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { painReliefBenefits, synergisticAdvantages, sectionContent } from '../../lib/painReliefData';
import ProductBenefitCard from '../shared/ProductBenefitCard';
import SynergisticSection from '../shared/SynergisticSection';

export default function BenefitsSection() {
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={benefitsRef} className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl mr-3">🌿</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold wholesale-section-title">
              {sectionContent.title}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl wholesale-section-subtitle mb-6 leading-relaxed">
              {sectionContent.subtitle.split('Emu Oil Balm').map((part, index) => 
                index === 1 ? (
                  <span key={index}>
                    <strong>Emu Oil Balm</strong>
                    {part.split('Emu Oil Capsules')[0]}
                    <strong>Emu Oil Capsules</strong>
                    {part.split('Emu Oil Capsules')[1]}
                  </span>
                ) : (
                  <span key={index}>{part}</span>
                )
              )}
            </p>

          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {painReliefBenefits.map((product, index) => (
            <ProductBenefitCard
              key={index}
              product={product}
              index={index}
              isInView={benefitsInView}
              theme="wholesale"
            />
          ))}
        </div>

        <SynergisticSection
          title={sectionContent.synergisticTitle}
          description={sectionContent.synergisticDescription}
          advantages={synergisticAdvantages}
          isInView={benefitsInView}
          theme="wholesale"
          delay={0.6}
        />
      </div>
    </section>
  );
} 