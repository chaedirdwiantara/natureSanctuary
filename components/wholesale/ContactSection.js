import { motion } from 'framer-motion';
import CustomLeadForm from '../shared/CustomLeadForm';

export default function ContactSection({ formFields }) {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-wholesale-primary to-wholesale-accent">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <CustomLeadForm
              theme="wholesale"
              title="Get Your Wholesale Catalog"
              subtitle="Request our complete wholesale catalog with pricing, product specs, and partnership details"
              offerText="20% OFF + Free Samples"
              ctaText="Get Wholesale Catalog"
              fields={formFields}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 