import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ReachOutSection() {
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleReachOutClick = () => {
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
    <section ref={sectionRef} className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div 
            onClick={handleReachOutClick}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-soft hover:shadow-card border border-gray-100 cursor-pointer transition-all duration-300 hover:scale-[1.02] group"
          >
            <div className="text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-wholesale-light rounded-full mb-6 group-hover:bg-wholesale-primary group-hover:text-white transition-all duration-300"
              >
                <svg className="w-8 h-8 text-wholesale-primary group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold wholesale-section-title mb-4 group-hover:text-wholesale-primary transition-colors duration-300"
              >
                ✋ Let Us Reach Out
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl wholesale-section-subtitle leading-relaxed mb-6"
              >
                Whether you want to explore wholesale, request a sample, or ask questions — we're here to help.
              </motion.p>

              {/* Subtle Call-to-Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex items-center space-x-2 text-wholesale-primary font-semibold group-hover:text-wholesale-accent transition-colors duration-300"
              >
                <span>Click to get in touch</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-8 h-8 text-wholesale-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>

              <div className="absolute bottom-6 left-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg className="w-6 h-6 text-wholesale-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
} 