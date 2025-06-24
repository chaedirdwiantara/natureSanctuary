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
import { developmentImages } from '../../lib/imageRequirements';

export default function SkinCareLanding() {
  const content = landingPageContent.skinCare;
  const images = developmentImages.skinCare;

  // Carousel images
  const carouselImages = [
    {
      src: '/images/hero/muscle-hero.jpg',
      alt: 'Muscle pain relief with emu oil',
      title: 'Muscle Pain Relief'
    },
    {
      src: '/images/hero/painrelief-hero.jpg', 
      alt: 'Natural pain relief solution',
      title: 'Pain Relief'
    },
    {
      src: '/images/hero/skincare-hero.jpg',
      alt: 'Natural skin care with emu oil',
      title: 'Skin Care'
    }
  ];

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change every 4 seconds

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
      theme="skincare"
      meta={content.meta}
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] md:min-h-screen flex items-center gradient-skincare overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-skincare-primary to-skincare-accent"></div>
        </div>

        <div className="container-custom relative z-10 py-8 md:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Discount Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4 md:mb-6"
              >
                <div className="bg-skincare-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-glow-green">
                  <span className="font-bold text-sm md:text-lg">🎉 {content.hero.discount} {content.hero.discountText}</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-skincare-accent mb-4 md:mb-6 leading-tight"
              >
                {content.hero.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-skincare-accent opacity-80 mb-6 md:mb-8 leading-relaxed"
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
                  theme="skincare"
                  size="lg"
                  href="#products"
                  className="shadow-glow-green w-full sm:w-auto"
                >
                  {content.hero.cta} →
                </Button>
                <Button
                  variant="secondary"
                  theme="skincare"
                  size="lg"
                  href="#testimonials"
                  className="w-full sm:w-auto"
                >
                  Read Success Stories
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 text-sm text-skincare-accent opacity-70"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-skincare-primary">✓</span>
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-skincare-primary">✓</span>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-skincare-primary">✓</span>
                  <span>Australian Made</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                {/* Carousel Images - Full Width Auto Height */}
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

                {/* Navigation Arrows */}
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

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white shadow-lg' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
              About 
              <span className="text-gradient-skincare"> Emu Oil Naturally</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Australia's trusted emu oil supplier, providing 100% natural, pharmaceutical-grade emu oil 
              for comprehensive skin care and pain relief solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={images.lifestyle[1]}
                  alt="Australian emu farm"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-gray-800">
                  One Oil, Multiple Benefits
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In a world filled with synthetic skincare products and pharmaceutical solutions, 
                  Emu Oil stands out as a natural wonder with countless benefits. This remarkable oil, 
                  derived from the fat of the Australian emu bird, has been used for centuries by 
                  indigenous people and is now gaining global recognition for its exceptional properties.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-skincare-light rounded-xl p-4">
                  <h4 className="font-bold text-skincare-accent mb-2">🇦🇺 100% Australian Made</h4>
                  <p className="text-sm text-gray-600">Farmed and manufactured in Australia to the highest quality standards.</p>
                </div>
                <div className="bg-skincare-light rounded-xl p-4">
                  <h4 className="font-bold text-skincare-accent mb-2">🌿 All Natural</h4>
                  <p className="text-sm text-gray-600">No chemicals, additives, or synthetic ingredients.</p>
                </div>
                <div className="bg-skincare-light rounded-xl p-4">
                  <h4 className="font-bold text-skincare-accent mb-2">🛡️ Non-Steroidal</h4>
                  <p className="text-sm text-gray-600">Safe alternative without the side effects of steroids.</p>
                </div>
                <div className="bg-skincare-light rounded-xl p-4">
                  <h4 className="font-bold text-skincare-accent mb-2">💰 Cost Effective</h4>
                  <p className="text-sm text-gray-600">One product for multiple health and beauty concerns.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section ref={problemsRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={problemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
              Are You Struggling With These 
              <span className="text-gradient-skincare"> Health Problems</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You're not alone. Thousands of people suffer from chronic skin conditions and pain 
              that conventional treatments can't seem to fix.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={problemsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:shadow-card transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{problem.icon}</div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-3 text-center">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" ref={solutionsRef} className="section-padding gradient-skincare">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-skincare-accent mb-6">
              Therapeutic Qualities &
              <span className="text-skincare-primary"> Natural Benefits</span>
            </h2>
            <p className="text-xl text-skincare-accent opacity-80 max-w-3xl mx-auto leading-relaxed">
              What sets emu oil apart is its ability to penetrate deeply into the skin, delivering nutrients 
              where they are needed most for complete healing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{solution.icon}</div>
                <h3 className="text-xl font-serif font-bold text-skincare-accent mb-3 text-center">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center leading-relaxed">
                  {solution.description}
                </p>
                <div className="bg-skincare-light rounded-lg p-3 text-center">
                  <span className="text-sm font-medium text-skincare-accent">
                    ✨ {solution.benefit}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} id="testimonials" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
              Real People, Real
              <span className="text-gradient-skincare"> Healing Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From skin transformation to pain relief - here's what our customers are saying 
              about their complete healing journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="testimonial-card"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={images.testimonials[index]}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-skincare-primary font-medium">{testimonial.condition}</p>
                    <div className="flex text-yellow-400 text-sm">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                {testimonial.verified && (
                  <div className="mt-4 flex items-center text-xs text-skincare-primary">
                    <span className="mr-1">✓</span>
                    <span>Verified Customer</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section-padding gradient-skincare">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-skincare-accent mb-6">
              Complete Natural Healing
              <span className="text-skincare-primary"> Solutions</span>
            </h2>
            <p className="text-xl text-skincare-accent opacity-80 max-w-4xl mx-auto leading-relaxed mb-8">
              From skin conditions to pain relief - all products work together for comprehensive healing.
            </p>
            
            {/* Category Tabs */}
            <div className="flex justify-center space-x-4 mb-12">
              <div className="bg-skincare-primary text-white px-6 py-3 rounded-full">
                <span className="font-semibold">🌿 Skin Care Products</span>
              </div>
              <div className="bg-skincare-accent text-white px-6 py-3 rounded-full">
                <span className="font-semibold">💪 Pain Relief Products</span>
              </div>
            </div>
          </motion.div>

          {/* Skin Care Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-skincare-accent mb-8 text-center">
              🌿 For Skin Conditions (Eczema, Psoriasis, Dry Skin)
            </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.products.filter(product => product.category === 'skin' || product.category === 'both').map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="product-card relative"
                >
                  <div className="p-6">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <h4 className="text-lg font-serif font-bold text-gray-800 mb-2 text-center">
                      {product.name}
                    </h4>

                    <div className="text-center mb-3">
                      <span className="text-xl font-bold text-skincare-primary">
                        ${product.salePrice}
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${product.price}
                      </span>
                    </div>

                    <p className="text-xs text-skincare-accent text-center mb-3 font-medium">
                      {product.bestFor}
                    </p>

                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-600">
                          <span className="text-skincare-primary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pain Relief Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif font-bold text-skincare-accent mb-8 text-center">
              💪 For Pain Relief (Arthritis, Joint Pain, Muscle Pain)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.products.filter(product => product.category === 'pain' || product.category === 'both').map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="product-card relative"
                >
                  <div className="p-6">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <h4 className="text-lg font-serif font-bold text-gray-800 mb-2 text-center">
                      {product.name}
                    </h4>

                    <div className="text-center mb-3">
                      <span className="text-xl font-bold text-skincare-primary">
                        ${product.salePrice}
                      </span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        ${product.price}
                      </span>
                    </div>

                    <p className="text-xs text-skincare-accent text-center mb-3 font-medium">
                      {product.bestFor}
                    </p>

                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-600">
                          <span className="text-skincare-primary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Combination Recommendation */}
          <div className="bg-white bg-opacity-20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-skincare-accent mb-4">
              💡 Recommended Combinations
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-30 rounded-xl p-6">
                <h4 className="font-bold text-skincare-accent mb-2">Skin Care Starter</h4>
                <p className="text-sm text-skincare-accent opacity-80 mb-3">Pure Emu Oil 100ml + Balm 50g</p>
                <p className="text-lg font-bold text-skincare-primary">Save $8.50</p>
              </div>
              <div className="bg-white bg-opacity-30 rounded-xl p-6">
                <h4 className="font-bold text-skincare-accent mb-2">Pain Relief Combo</h4>
                <p className="text-sm text-skincare-accent opacity-80 mb-3">Liniment + Capsules</p>
                <p className="text-lg font-bold text-skincare-primary">Save $12.00</p>
              </div>
              <div className="bg-white bg-opacity-30 rounded-xl p-6">
                <h4 className="font-bold text-skincare-accent mb-2">Complete Healing</h4>
                <p className="text-sm text-skincare-accent opacity-80 mb-3">Oil 250ml + Liniment + Capsules</p>
                <p className="text-lg font-bold text-skincare-primary">Save $25.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
                Get Your Free 
                <span className="text-gradient-skincare">Complete Healing Guide</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Download our comprehensive guide on natural healing with emu oil and get 10% off your first order. 
                Learn the secrets to healthier skin AND pain-free living that thousands have already discovered.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-skincare-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">5-day skin healing protocol</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-skincare-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Natural pain relief techniques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-skincare-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Complete daily healing routine</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-skincare-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Product combination guide</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <LeadCaptureForm
                theme="skincare"
                title="Get Your Free Complete Healing Guide"
                subtitle="Join 50,000+ people who've transformed their health naturally"
                offerText="10% OFF + Free Shipping"
                ctaText="Get My Free Healing Guide Now"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 