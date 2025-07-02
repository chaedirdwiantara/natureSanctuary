import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { getProductImage } from '../../lib/wholesaleData';

// ProductCard Component
function ProductCard({ item, category }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <Image
          src={getProductImage(category, item.size)}
          alt={`${category} ${item.size}`}
          width={120}
          height={120}
          className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto"
        />
      </div>
      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.size}</h4>
      <p className="text-sm text-gray-600 mb-3">Min Order: {item.minOrder} units</p>
      <div className="text-2xl font-bold text-wholesale-primary mb-2">
        ${item.wholesalePrice}
      </div>
      <p className="text-xs text-gray-500">per unit (ex GST)</p>
      <div className="mt-4 text-sm text-gray-600">
        <p>Retail RRP: ${(item.wholesalePrice * 2.5).toFixed(2)}</p>
        <p className="text-wholesale-primary font-semibold">
          Your margin: {Math.round(((2.5 - 1) / 2.5) * 100)}%
        </p>
      </div>
    </div>
  );
}

// Volume Discount Component
function VolumeDiscountTiers() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      viewport={{ once: true }}
      className="text-center mt-12"
    >
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Volume Discount Tiers</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-wholesale-light p-4 rounded-lg">
            <p className="font-semibold text-wholesale-primary">Tier 1: $1,000+ order</p>
            <p className="text-gray-600">5% additional discount</p>
          </div>
          <div className="bg-wholesale-light p-4 rounded-lg">
            <p className="font-semibold text-wholesale-primary">Tier 2: $2,500+ order</p>
            <p className="text-gray-600">10% additional discount</p>
          </div>
          <div className="bg-wholesale-light p-4 rounded-lg">
            <p className="font-semibold text-wholesale-primary">Tier 3: $5,000+ order</p>
            <p className="text-gray-600">15% additional discount</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsSection({ products }) {
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={productsRef} id="products" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={productsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Wholesale Product Range & Pricing
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Premium Australian emu oil products with competitive wholesale pricing and excellent margins
          </p>
        </motion.div>

        <div className="space-y-12">
          {products.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={productsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-wholesale-light rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <ProductCard 
                    key={itemIndex}
                    item={item}
                    category={category.category}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <VolumeDiscountTiers />
      </div>
    </section>
  );
} 