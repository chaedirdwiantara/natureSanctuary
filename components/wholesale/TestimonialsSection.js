import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// TestimonialCard Component
function TestimonialCard({ testimonial, index, testimonialsInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-50 rounded-2xl p-6 md:p-8 relative"
    >
      <p className="wholesale-text mb-6 leading-relaxed italic">
        "{testimonial.text}"
      </p>

      <div className="text-right">
        <p className="font-bold wholesale-card-title">— {testimonial.profession}</p>
        <p className="text-sm wholesale-card-text">{testimonial.location}</p>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection({ testimonials }) {
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={testimonialsRef} id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold wholesale-section-title mb-6">
            What Our Partners Say
          </h2>
          <p className="text-xl wholesale-section-subtitle max-w-3xl mx-auto">
            Join successful businesses across Australia who trust us as their emu oil supplier
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              testimonial={testimonial}
              index={index}
              testimonialsInView={testimonialsInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 