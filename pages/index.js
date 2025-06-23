import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Layout from '../components/shared/Layout';
import Button from '../components/shared/Button';

export default function Home() {
  const landingPages = [
    {
      title: 'Skin Care Solutions',
      description: 'Natural relief for eczema, psoriasis, and chronic skin conditions',
      href: '/skin-care',
      theme: 'skincare',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Pain Relief',
      description: 'Fast-acting joint and muscle pain relief without steroids',
      href: '/pain-relief',
      theme: 'painrelief',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Wholesale Partners',
      description: 'Premium emu oil supplier with bulk pricing and private labeling',
      href: '/wholesale',
      theme: 'wholesale',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  return (
    <Layout
      meta={{
        title: 'Emu Oil Naturally - Premium Australian Emu Oil Products',
        description: 'Premium Australian emu oil for natural health, skincare, and pain relief. 100% natural, ethically sourced, pharmaceutical grade quality.'
      }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-cream to-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-6">
                Premium Australian{' '}
                <span className="text-gradient-skincare">Emu Oil</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                One oil, multiple benefits. Discover natural relief for skin conditions, 
                joint pain, and muscle soreness with our pharmaceutical-grade emu oil products.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-soft">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">100% Australian Made</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-soft">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">All Natural</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-soft">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Quality Assured</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Landing Pages Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Find Your Perfect Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're dealing with skin conditions, joint pain, or looking for 
              wholesale opportunities, we have the right emu oil solution for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {landingPages.map((page, index) => (
              <motion.div
                key={page.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <Link href={page.href}>
                  <div className="bg-white rounded-xl shadow-card hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={page.image}
                        alt={page.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${page.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3">
                        {page.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {page.description}
                      </p>
                      
                      <Button
                        variant="primary"
                        theme={page.theme}
                        className="w-full"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-8">
              Trusted by Thousands of Customers Worldwide
            </h3>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <Image
                src="/images/trust/australian-made-badge.png"
                alt="Australian Made"
                width={120}
                height={80}
                className="grayscale"
              />
              <Image
                src="/images/trust/natural-ingredients-badge.png"
                alt="Natural Ingredients"
                width={120}
                height={80}
                className="grayscale"
              />
              <Image
                src="/images/trust/money-back-guarantee.png"
                alt="Money Back Guarantee"
                width={120}
                height={80}
                className="grayscale"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
} 