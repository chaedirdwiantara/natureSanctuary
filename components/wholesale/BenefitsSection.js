import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function BenefitsSection({ benefits }) {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Why Partner With Us?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join Australia's most trusted emu oil wholesale network and grow your business with premium products
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-wholesale-primary to-wholesale-accent text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow-blue">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">{benefit.description}</p>
              <p className="text-wholesale-primary font-semibold">{benefit.benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 