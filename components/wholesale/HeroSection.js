import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageCarousel from '../shared/ImageCarousel';

export default function HeroSection({ carouselImages }) {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={heroRef} className="relative min-h-[85vh] md:min-h-[90vh] flex items-center gradient-wholesale overflow-hidden pt-0 md:pt-2">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-wholesale-primary to-wholesale-accent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 py-0">
        <div className="grid lg:grid-cols-5 gap-2 lg:gap-4 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4 md:mb-6"
            >
              <div className="bg-wholesale-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-glow-blue">
                <span className="font-bold text-sm md:text-lg">🔥 Discover Your Next Bestseller</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-wholesale-accent mb-3 md:mb-4 leading-tight"
            >
              Emu Oil Pain Relief Balm & Capsules
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-wholesale-accent opacity-80 mb-4 md:mb-5 leading-relaxed"
            >
              Relief that goes skin-deep — and beyond.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm md:text-base text-wholesale-accent opacity-75 mb-4 md:mb-5 leading-relaxed"
            >
              Used by clinics, therapists, and eldercare providers, our topical balm and oral supplement duo is transforming pain management for wholesale partners nationwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-green-50 border border-green-200 rounded-lg p-3 md:p-4 mt-4"
            >
              <div className="flex items-start space-x-3">
                <span className="text-green-600 text-lg mt-0.5">🟢</span>
                <div>
                  <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
                    <strong>No obligation.</strong> Just contact us to receive detailed product information, wholesale pricing, and free samples.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 relative"
          >
            <ImageCarousel
              images={carouselImages}
              autoSlideInterval={4000}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 