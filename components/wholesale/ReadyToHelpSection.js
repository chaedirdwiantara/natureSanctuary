import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { readyToHelpContent } from '../../lib/readyToHelpData';

export default function ReadyToHelpSection() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleStartConversation = () => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      const headerHeight = 80;
      const elementPosition = contactElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div 
            onClick={handleStartConversation}
            className="bg-gradient-to-br from-wholesale-light to-wholesale-primary/5 rounded-3xl p-8 md:p-12 border-2 border-wholesale-primary/10 hover:border-wholesale-primary/30 cursor-pointer transition-all duration-300 hover:scale-[1.02] group shadow-soft hover:shadow-card"
          >
            <div className="text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-8 shadow-md group-hover:shadow-lg transition-all duration-300"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {readyToHelpContent.icon}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 group-hover:text-wholesale-primary transition-colors duration-300"
              >
                {readyToHelpContent.title}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto"
              >
                {readyToHelpContent.subtitle}
              </motion.p>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8"
              >
                {readyToHelpContent.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2 text-wholesale-primary">
                    <span className="text-xl">{highlight.icon}</span>
                    <span className="font-semibold text-gray-700">{highlight.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-3"
              >
                <div className="inline-flex items-center space-x-3 bg-wholesale-primary text-white px-8 py-4 rounded-full font-bold text-lg group-hover:bg-wholesale-accent transition-colors duration-300 shadow-md">
                  <span>{readyToHelpContent.cta.text}</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 italic">
                  {readyToHelpContent.cta.description}
                </p>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-12 h-12 text-wholesale-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
              </div>

              <div className="absolute bottom-8 left-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-10 h-10 text-wholesale-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 