import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { companyInfo, aboutSectionContent } from '../../lib/aboutCompanyData';

export default function AboutSection() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <img src="/images/brand/logo-main.svg" alt="Emu Tracks Logo" className="w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold wholesale-section-title">
              {aboutSectionContent.title}
            </h2>
          </div>
          <p className="text-xl wholesale-section-subtitle max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold">{aboutSectionContent.subtitle}</span>
          </p>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-lg md:text-xl wholesale-section-subtitle leading-relaxed">
              <span className="text-red-600 font-semibold">Our products are</span> developed with 
              over 25 years of research and <span className="text-red-600 font-semibold">Pure Emu Oil</span> is <span className="font-bold">TGA-listed</span> in 
              Australia as a therapeutic grade oil.
            </p>
          </motion.div>


        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-wholesale-light rounded-2xl p-8 md:p-12 max-w-3xl mx-auto border border-wholesale-primary/10">
            <h3 className="text-2xl md:text-3xl font-bold wholesale-section-title mb-4">
              Trusted by Healthcare Professionals Worldwide
            </h3>
            <p className="text-lg md:text-xl wholesale-section-subtitle leading-relaxed">
              Over 25 years of research and development has made Emu Tracks the go-to choice for pain management professionals across Australia and beyond.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 