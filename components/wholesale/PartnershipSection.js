import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { companyInfo, partnershipSectionContent } from '../../lib/aboutCompanyData';
import BenefitItem from '../shared/BenefitItem';

export default function PartnershipSection() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} id="partnership" className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <img src="/images/brand/logo-main.svg" alt="Emu Oil Naturally Logo" className="w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold wholesale-section-title">
              {partnershipSectionContent.title}
            </h2>
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-lg md:text-xl wholesale-section-subtitle leading-relaxed mb-4">
              We're <span className="font-bold">Nature Sanctuary Pte Ltd</span>, the exclusive distributor of Emu Tracks products in Singapore & Malaysia.
            </p>
            <p className="text-lg wholesale-section-title font-semibold">
              Here's what you get with us:
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {companyInfo.partnership.benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                benefit={benefit}
                index={index}
                isInView={sectionInView}
                theme="wholesale"
                variant="card"
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
} 