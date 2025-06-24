import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiPhone, FiCheck, FiLoader } from 'react-icons/fi';
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
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would integrate with your email service
      console.log('Form submitted:', data);
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
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
          🎉 Your discount code: NATURAL15
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