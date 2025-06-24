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

export default function PainReliefLanding() {
  const content = landingPageContent.painRelief;

  // Carousel images
  const carouselImages = [
    {
      src: '/images/hero/painrelief-hero.jpg',
      alt: 'Natural pain relief with emu oil',
      title: 'Pain Relief'
    },
    {
      src: '/images/hero/muscle-hero.jpg', 
      alt: 'Muscle pain relief solution',
      title: 'Muscle Relief'
    },
    {
      src: '/images/lifestyle/athlete-using-oil.jpg',
      alt: 'Athlete using emu oil for recovery',
      title: 'Sports Recovery'
    }
  ];

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Manual navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Animation hooks
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [problemsRef, problemsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [solutionsRef, solutionsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Layout
      theme="painrelief"
      meta={content.meta}
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] md:min-h-screen flex items-center gradient-painrelief overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-painrelief-primary to-painrelief-accent"></div>
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
                <div className="bg-painrelief-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-glow-orange">
                  <span className="font-bold text-sm md:text-lg">🔥 {content.hero.discount} {content.hero.discountText}</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-painrelief-accent mb-4 md:mb-6 leading-tight"
              >
                {content.hero.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-painrelief-accent opacity-80 mb-6 md:mb-8 leading-relaxed"
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
                  theme="painrelief"
                  size="lg"
                  href="#products"
                  className="shadow-glow-orange w-full sm:w-auto"
                >
                  {content.hero.cta} →
                </Button>
                <Button
                  variant="secondary"
                  theme="painrelief"
                  size="lg"
                  href="#testimonials"
                  className="w-full sm:w-auto"
                >
                  Read Success Stories
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm text-painrelief-accent opacity-70"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-painrelief-primary">✓</span>
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-painrelief-primary">✓</span>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-painrelief-primary">✓</span>
                  <span>Fast-Acting Relief</span>
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
                    alt="Emu Oil Liniment"
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

      {/* Problems Section */}
      <section ref={problemsRef} className="py-16 md:py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={problemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Are You Tired of Living With Pain?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Millions of Australians struggle with chronic pain that limits their quality of life
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {content.problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={problemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-700 leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section ref={solutionsRef} className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              The Natural Solution That Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Australian emu oil provides fast-acting, long-lasting pain relief without harmful side effects
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {content.solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-painrelief-primary to-painrelief-accent text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow-orange">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">{solution.description}</p>
                <p className="text-painrelief-primary font-semibold">{solution.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-20 bg-painrelief-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Choose Your Pain Relief Solution
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional-grade emu oil products designed for maximum pain relief and mobility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {content.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${
                  product.popular ? 'border-painrelief-primary ring-4 ring-painrelief-primary/20' : 'border-gray-100'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-painrelief-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                {product.savings && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {product.savings}
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto mb-6"
                  />

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.bestFor}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center justify-center space-x-2 text-sm text-gray-700">
                        <span className="text-painrelief-primary">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-lg text-gray-500 line-through">${product.price}</span>
                      <span className="text-2xl md:text-3xl font-bold text-painrelief-primary">${product.salePrice}</span>
                    </div>
                    <p className="text-sm text-painrelief-primary font-semibold mt-1">
                      Save ${(product.price - product.salePrice).toFixed(2)} (20% OFF)
                    </p>
                  </div>

                  <Button
                    variant="primary"
                    theme="painrelief"
                    size="lg"
                    className="w-full shadow-glow-orange"
                  >
                    Order Now - Free Shipping
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Free Mobility Guide Included</h3>
              <p className="text-gray-700 mb-4">
                Get our comprehensive "7-Day Pain-Free Living Guide" with every order - a $29 value, absolutely free!
              </p>
              <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center space-x-1">
                  <span className="text-painrelief-primary">✓</span>
                  <span>Exercise routines</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="text-painrelief-primary">✓</span>
                  <span>Lifestyle tips</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="text-painrelief-primary">✓</span>
                  <span>Application guide</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} id="testimonials" className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Real Results From Real People
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Join thousands of Australians who've found lasting pain relief with our emu oil
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
                    <p className="text-sm text-painrelief-primary">{testimonial.condition}</p>
                  </div>
                  {testimonial.verified && (
                    <div className="ml-auto">
                      <span className="bg-painrelief-primary text-white px-2 py-1 rounded-full text-xs font-bold">
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

      {/* Guarantee Section */}
      <section className="py-16 md:py-20 bg-painrelief-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto">
              <Image
                src="/images/trust/money-back-guarantee.png"
                alt="30-Day Money Back Guarantee"
                width={100}
                height={100}
                className="w-20 h-20 mx-auto mb-6"
              />
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                30-Day Money-Back Guarantee
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We're so confident you'll experience significant pain relief within 30 days that we offer a full money-back guarantee. 
                If you're not completely satisfied, return the products for a full refund - no questions asked.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-painrelief-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">✓</span>
                  </div>
                  <p className="font-semibold">Full Refund</p>
                </div>
                <div className="text-center">
                  <div className="bg-painrelief-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">✓</span>
                  </div>
                  <p className="font-semibold">No Questions Asked</p>
                </div>
                <div className="text-center">
                  <div className="bg-painrelief-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">✓</span>
                  </div>
                  <p className="font-semibold">Keep Free Guide</p>
                </div>
              </div>

              <Button
                variant="primary"
                theme="painrelief"
                size="lg"
                href="#products"
                className="shadow-glow-orange"
              >
                Try Risk-Free Today
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <LeadCaptureForm 
        theme="painrelief"
        title="Get Your Free Pain Relief Guide"
        description="Download '7 Natural Ways to Reduce Joint Pain' plus get exclusive offers and pain management tips."
        buttonText="Get My Free Guide"
        placeholder="Enter your email for free guide..."
      />
    </Layout>
  );
}
