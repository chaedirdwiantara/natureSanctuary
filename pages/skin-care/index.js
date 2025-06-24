import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Layout from '../../components/shared/Layout';
import Button from '../../components/shared/Button';
import LeadCaptureForm from '../../components/shared/LeadCaptureForm';
import { Icons, FeatureIcons } from '../../components/shared/Icons';
import { landingPageContent } from '../../lib/content';
import { developmentImages } from '../../lib/imageRequirements';

export default function SkinCareLanding() {
  const content = landingPageContent.skinCare;
  const images = developmentImages.skinCare;

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
      <section ref={heroRef} className="relative min-h-screen flex items-center gradient-skincare overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-skincare-primary to-skincare-accent"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                className="inline-block mb-6"
              >
                <div className="bg-skincare-primary text-white px-6 py-3 rounded-full shadow-glow-green">
                  <span className="font-bold text-lg">🎉 {content.hero.discount} {content.hero.discountText}</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-skincare-accent mb-6 leading-tight"
              >
                {content.hero.headline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-skincare-accent opacity-80 mb-8 leading-relaxed"
              >
                {content.hero.subheading}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  variant="primary"
                  theme="skincare"
                  size="lg"
                  href="#products"
                  className="shadow-glow-green"
                >
                  {content.hero.cta} →
                </Button>
                <Button
                  variant="secondary"
                  theme="skincare"
                  size="lg"
                  href="#testimonials"
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

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={images.hero.main}
                  alt="Natural skin care with emu oil"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
                
                {/* Floating Product Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute -bottom-8 -right-8 w-32 h-32 bg-white rounded-full shadow-2xl p-4"
                >
                  <Image
                    src={images.hero.product}
                    alt="Pure Emu Oil"
                    fill
                    className="object-contain p-2"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section ref={problemsRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={problemsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
              Are You Struggling With These 
              <span className="text-gradient-skincare"> Skin Problems</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You're not alone. Thousands of people suffer from chronic skin conditions 
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
                className="bg-gray-50 rounded-xl p-6 hover:shadow-card transition-all duration-300"
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

      {/* Solutions Section */}
      <section ref={solutionsRef} className="section-padding gradient-skincare">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-skincare-accent mb-6">
              Here's How Emu Oil 
              <span className="text-skincare-primary"> Solves These Problems</span>
            </h2>
            <p className="text-xl text-skincare-accent opacity-80 max-w-3xl mx-auto leading-relaxed">
              Our pharmaceutical-grade emu oil addresses the root causes of skin problems, 
              not just the symptoms.
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
              <span className="text-gradient-skincare"> Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our customers are saying 
              about their skin transformation.
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
              Choose Your 
              <span className="text-skincare-primary"> Skin Care Solution</span>
            </h2>
            <p className="text-xl text-skincare-accent opacity-80 max-w-3xl mx-auto leading-relaxed">
              All products come with our 30-day money-back guarantee and free shipping.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {content.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`product-card relative ${product.popular ? 'ring-2 ring-skincare-primary' : ''}`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-skincare-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-gray-800 mb-2 text-center">
                    {product.name}
                  </h3>

                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-skincare-primary">
                      ${product.salePrice}
                    </span>
                    <span className="text-lg text-gray-500 line-through ml-2">
                      ${product.price}
                    </span>
                  </div>

                  <p className="text-sm text-skincare-accent text-center mb-4 font-medium">
                    {product.bestFor}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-skincare-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="primary"
                    theme="skincare"
                    size="md"
                    className="w-full"
                  >
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
                Get Your Free 
                <span className="text-gradient-skincare">Skin Care Guide</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Download our comprehensive guide on natural skin care and get 15% off your first order. 
                Learn the secrets to healthier skin that thousands have already discovered.
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
                  <span className="text-gray-700">Natural ingredients to avoid</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-skincare-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Daily skincare routine template</span>
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
                title="Get Your Free Skin Care Guide"
                subtitle="Join 50,000+ people who've transformed their skin naturally"
                offerText="15% OFF + Free Shipping"
                ctaText="Get My Free Guide Now"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 