import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiPhone, FiCheck, FiLoader } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import Button from './Button';

export default function LeadCaptureForm({ 
  theme = 'default',
  title = "Get Your Free Guide",
  subtitle = "Join thousands who've found natural relief",
  offerText = "15% OFF + Free Shipping",
  ctaText = "Get My Discount Now",
  className = ''
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // 1. Email ke admin (notification)
      const adminTemplateParams = {
        to_name: 'Emu Oil Naturally Team',
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        landing_page: theme,
        current_url: window.location.href,
        timestamp: new Date().toLocaleString(),
        message: `New lead from ${theme} landing page`,
        reply_to: data.email
      };

      // 2. Email ke client (auto-reply)
      const clientTemplateParams = {
        from_name: data.name,
        from_email: data.email,
        guide_type: theme === 'skincare' ? 'Complete Healing' : 
                   theme === 'painrelief' ? 'Professional Pain Relief' : 
                   'Wholesale Catalog',
        offer_text: theme === 'skincare' ? '10% OFF + Free Shipping' :
                   theme === 'painrelief' ? '15% OFF + Free Shipping' :
                   '20% OFF + Free Samples',
        discount_code: theme === 'skincare' ? 'NATURAL10' :
                      theme === 'painrelief' ? 'RELIEF15' :
                      'WHOLESALE20',
        landing_page: theme
      };

      // Kirim email admin
      const adminResult = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        adminTemplateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      // Kirim email client auto-reply
      if (process.env.NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID,
          clientTemplateParams,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        );
      }

      console.log('Emails sent successfully:', adminResult);
      setIsSubmitted(true);
      reset();
      
      // Optional: Track conversion for analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'Lead Generation',
          event_label: theme,
          value: 1
        });
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getThemeColors = () => {
    switch (theme) {
      case 'skincare':
        return {
          bg: 'bg-white',
          border: 'border-skincare-primary',
          text: 'text-skincare-accent',
          accent: 'text-skincare-primary',
          focus: 'focus:ring-skincare-primary focus:border-skincare-primary'
        };
      case 'painrelief':
        return {
          bg: 'bg-white',
          border: 'border-painrelief-primary',
          text: 'text-painrelief-accent',
          accent: 'text-painrelief-primary',
          focus: 'focus:ring-painrelief-primary focus:border-painrelief-primary'
        };
      case 'wholesale':
        return {
          bg: 'bg-white',
          border: 'border-wholesale-primary',
          text: 'text-wholesale-accent',
          accent: 'text-wholesale-primary',
          focus: 'focus:ring-wholesale-primary focus:border-wholesale-primary'
        };
      default:
        return {
          bg: 'bg-white',
          border: 'border-brand-gold',
          text: 'text-gray-700',
          accent: 'text-brand-gold',
          focus: 'focus:ring-brand-gold focus:border-brand-gold'
        };
    }
  };

  const colors = getThemeColors();

  if (isSubmitted) {
    const discountCode = theme === 'skincare' ? 'NATURAL10' :
                        theme === 'painrelief' ? 'RELIEF15' :
                        theme === 'wholesale' ? 'WHOLESALE20' : 'NATURAL15';

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`${colors.bg} rounded-xl shadow-card p-8 text-center ${className}`}
      >
        <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.accent} bg-opacity-10 rounded-full mb-4`}>
          <FiCheck className={`w-8 h-8 ${colors.accent}`} />
        </div>
        <h3 className={`text-2xl font-serif font-bold ${colors.text} mb-2`}>
          Thank You!
        </h3>
        <p className={`${colors.text} mb-4`}>
          Check your email for your discount code and free guide.
        </p>
        <p className={`text-sm ${colors.accent} font-medium`}>
          🎉 Your discount code: {discountCode}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${colors.bg} rounded-xl shadow-card p-8 ${className}`}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className={`text-2xl font-serif font-bold ${colors.text} mb-2`}>
          {title}
        </h3>
        <p className={`${colors.text} opacity-80`}>
          {subtitle}
        </p>
        {offerText && (
          <div className={`inline-block ${colors.accent} bg-opacity-10 px-4 py-2 rounded-lg mt-3`}>
            <span className={`font-bold ${colors.accent}`}>
              {offerText}
            </span>
          </div>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className={`block text-sm font-medium ${colors.text} mb-1`}>
            Full Name *
          </label>
          <div className="relative">
            <FiUser className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${colors.accent} w-5 h-5`} />
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              id="name"
              className={`form-input pl-12 ${colors.focus} ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your full name"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className={`block text-sm font-medium ${colors.text} mb-1`}>
            Email Address *
          </label>
          <div className="relative">
            <FiMail className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${colors.accent} w-5 h-5`} />
            <input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              type="email"
              id="email"
              className={`form-input pl-12 ${colors.focus} ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field (Optional) */}
        <div>
          <label htmlFor="phone" className={`block text-sm font-medium ${colors.text} mb-1`}>
            Phone Number (Optional)
          </label>
          <div className="relative">
            <FiPhone className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${colors.accent} w-5 h-5`} />
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className={`form-input pl-12 ${colors.focus} border-gray-300`}
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Submit Button */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-red-700 text-sm">{submitError}</p>
          </div>
        )}
        
        <Button
          type="submit"
          variant="primary"
          theme={theme}
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-2">
              <FiLoader className="w-5 h-5 animate-spin" />
              <span>Processing...</span>
            </div>
          ) : (
            ctaText
          )}
        </Button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center mt-4">
          We respect your privacy. Unsubscribe at any time. 
          <br />
          By submitting, you agree to our{' '}
          <a href="/privacy" className={`${colors.accent} hover:underline`}>
            Privacy Policy
          </a>.
        </p>
      </form>
    </motion.div>
  );
} 