import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiLoader, FiCheck } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import Button from './Button';

export default function CustomLeadForm({ 
  theme = 'default',
  title,
  subtitle,
  offerText,
  ctaText,
  fields = [],
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
        from_name: data.name || data.fullName,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        business_name: data.businessName || data.clinicName || 'Not provided',
        landing_page: theme,
        current_url: window.location.href,
        timestamp: new Date().toLocaleString(),
        message: `New ${theme} lead from landing page`,
        reply_to: data.email,
        // Include all form data
        form_data: JSON.stringify(data, null, 2)
      };

      // 2. Email ke client (auto-reply)
      const clientTemplateParams = {
        from_name: data.name || data.fullName,
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
      case 'painrelief':
        return {
          accent: 'text-painrelief-primary',
          focus: 'focus:ring-painrelief-primary focus:border-painrelief-primary'
        };
      case 'wholesale':
        return {
          accent: 'wholesale-section-title',
          focus: 'focus:ring-wholesale-primary focus:border-wholesale-primary'
        };
      default:
        return {
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
        className="text-center py-8"
      >
        <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.accent} bg-opacity-10 rounded-full mb-4`}>
          <FiCheck className={`w-8 h-8 ${colors.accent}`} />
        </div>
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
          Thank You!
        </h3>
        <p className="text-gray-700 mb-4">
          We'll send you the information within 24 hours.
        </p>
        <p className={`text-sm ${colors.accent} font-medium`}>
          🎉 Check your email for details
        </p>
      </motion.div>
    );
  }

  return (
    <div className={className}>
      <div className="text-center mb-8">
        <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'wholesale' ? 'wholesale-section-title' : 'text-gray-900'} mb-4`}>
          {title}
        </h2>
        <p className={`text-xl ${theme === 'wholesale' ? 'wholesale-section-subtitle' : 'text-gray-700'} mb-2`}>
          {subtitle}
        </p>
        {offerText && (
          <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
            {offerText}
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {fields.map((field, index) => (
            <div key={field.name} className={field.fullWidth ? 'md:col-span-2' : ''}>
              <label className={`block text-sm font-medium ${theme === 'wholesale' ? 'wholesale-card-text' : 'text-gray-700'} mb-2`}>
                {field.label} {field.required && '*'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">{field.icon}</span>
                </div>
                <input
                  {...register(field.name, field.validation)}
                  type={field.type}
                  placeholder={field.placeholder}
                  className={`block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${colors.focus} ${errors[field.name] ? 'border-red-500' : ''}`}
                />
              </div>
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-1">{errors[field.name].message}</p>
              )}
            </div>
          ))}
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
          className="w-full text-lg py-4"
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

        <div className="text-center text-sm text-gray-600">
          <p>We respect your privacy. Unsubscribe at any time.</p>
          <p>By submitting, you agree to our <span className={colors.accent}>Privacy Policy</span>.</p>
        </div>
      </form>
    </div>
  );
} 