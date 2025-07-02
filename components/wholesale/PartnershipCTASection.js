import { motion } from 'framer-motion';
import Button from '../shared/Button';

export default function PartnershipCTASection() {
  return (
    <section className="py-16 md:py-20 bg-wholesale-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Become a Partner?
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Join Australia's premier emu oil wholesale network. Get access to premium products, 
              competitive pricing, and dedicated support to grow your business.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-3">What You Get:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-wholesale-primary">✓</span>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-wholesale-primary">✓</span>
                    <span>Marketing materials & support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-wholesale-primary">✓</span>
                    <span>Product training & education</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-wholesale-primary">✓</span>
                    <span>Flexible payment terms</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Requirements:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-wholesale-primary">•</span>
                    <span>Valid business registration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-wholesale-primary">•</span>
                    <span>Minimum order commitment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-wholesale-primary">•</span>
                    <span>Appropriate business category</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-wholesale-primary">•</span>
                    <span>Professional references</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button
              variant="primary"
              theme="wholesale"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="shadow-glow-blue"
            >
              Request Wholesale Application
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 