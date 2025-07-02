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
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Your Wholesale Catalog
              </h2>
              <p className="text-xl text-gray-700 mb-2">
                Request our complete wholesale catalog with pricing, product specs, and partnership details
              </p>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                20% OFF + Free Samples
              </div>
            </div>

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