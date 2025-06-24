import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Layout from '../../components/shared/Layout';
import Button from '../../components/shared/Button';
import LeadCaptureForm from '../../components/shared/LeadCaptureForm';
import { Icons } from '../../components/shared/Icons';
import { landingPageContent } from '../../lib/content';

export default function WholesaleLanding() {
  const content = landingPageContent.wholesale;

  // Carousel images - only from hero folder
  const carouselImages = [
    {
      src: '/images/hero/wholesale-hero.jpg',
      alt: 'Wholesale partnership opportunity',
      title: 'Wholesale Partnership'
    },
    {
      src: '/images/hero/skincare-hero.jpg', 
      alt: 'Premium skincare products',
      title: 'Premium Products'
    },
    {
      src: '/images/hero/painrelief-hero.jpg',
      alt: 'Professional pain relief solutions',
      title: 'Professional Solutions'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Layout theme="wholesale" meta={content.meta}>
      <section ref={heroRef} className="relative min-h-[80vh] md:min-h-screen flex items-center gradient-wholesale overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-wholesale-primary to-wholesale-accent"></div>
        </div>

        <div className="container-custom relative z-10 py-8 md:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4 md:mb-6"
              >
                <div className="bg-wholesale-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-glow-blue">
                  <span className="font-bold text-sm md:text-lg">🤝 20% OFF + Free Samples</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-wholesale-accent mb-4 md:mb-6 leading-tight"
              >
                {content.hero.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-wholesale-accent opacity-80 mb-6 md:mb-8 leading-relaxed"
              >
                {content.hero.subheading}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4 sm:space-y-0 sm:flex sm:flex-row sm:gap-4 justify-center lg:justify-start"
              >
                <Button
                  variant="primary"
                  theme="wholesale"
                  size="lg"
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="shadow-glow-blue w-full sm:w-auto"
                >
                  {content.hero.cta} →
                </Button>
                <Button
                  variant="secondary"
                  theme="wholesale"
                  size="lg"
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto"
                >
                  Partner Success Stories
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm text-wholesale-accent opacity-70"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-wholesale-primary">✓</span>
                  <span>Guaranteed Supply</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-wholesale-primary">✓</span>
                  <span>Private Labeling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-wholesale-primary">✓</span>
                  <span>Volume Discounts</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <div className="relative w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 300 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -300 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Image
                        src={carouselImages[currentSlide].src}
                        alt={carouselImages[currentSlide].alt}
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <Image
                    src={content.hero.productImage}
                    alt="Premium Emu Oil"
                    width={60}
                    height={60}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
            {content.benefits.map((benefit, index) => (
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
            {content.products.map((category, categoryIndex) => {
              // Map category to product image
              const getProductImage = (category, size) => {
                if (category === "Pure Emu Oil") {
                  if (size === "50ml") return "/images/products/pure-emu-oil-50ml.png";
                  if (size === "100ml") return "/images/products/pure-emu-oil-100ml.png";
                  if (size === "250ml") return "/images/products/pure-emu-oil-250ml.png";
                }
                if (category === "Emu Oil Balm") {
                  return "/images/products/emu-oil-balm-50g.png";
                }
                if (category === "Emu Oil Liniment") {
                  return "/images/products/emu-oil-liniment-100ml.png";
                }
                return "/images/products/pure-emu-oil-100ml.png"; // fallback
              };

              return (
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
                      <div key={itemIndex} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-4">
                          <Image
                            src={getProductImage(category.category, item.size)}
                            alt={`${category.category} ${item.size}`}
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
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
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
        </div>
      </section>

      <section ref={testimonialsRef} id="testimonials" className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join successful businesses across Australia who trust us as their emu oil supplier
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 relative"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-wholesale-primary">{testimonial.business}</p>
                  </div>
                  {testimonial.verified && (
                    <div className="ml-auto">
                      <span className="bg-wholesale-primary text-white px-2 py-1 rounded-full text-xs font-bold">
                        Verified
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Enhanced Contact Form */}
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

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400">👤</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wholesale-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400">📧</span>
                      </div>
                      <input
                        type="email"
                        placeholder="Enter your business email"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wholesale-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400">🏢</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your business name"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wholesale-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400">📞</span>
                      </div>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wholesale-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  variant="primary"
                  theme="wholesale"
                  size="lg"
                  className="w-full shadow-glow-blue text-lg py-4"
                >
                  Get Wholesale Catalog
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <p>We respect your privacy. Unsubscribe at any time.</p>
                  <p>By submitting, you agree to our <span className="text-wholesale-primary">Privacy Policy</span>.</p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
