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
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-4 md:mb-6"
            >
              <div className="bg-wholesale-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-glow-blue">
                <span className="font-bold text-sm md:text-lg">💥 Discover Your Next Bestsellers</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold wholesale-title mb-3 md:mb-4 leading-tight"
            >
              Emu Oil Balm<br />
              Emu Oil Capsules
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl wholesale-text mb-4 md:mb-5 leading-relaxed"
            >
              Relief that goes skin-deep and beyond.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm md:text-base wholesale-text mb-4 md:mb-5 leading-relaxed"
            >
              Used by clinics, therapists, and eldercare providers, our topical emu oil balm and oral emu oil supplement duo is transforming pain management therapy.
            </motion.p>


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