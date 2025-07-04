// Wholesale specific data configurations
export const wholesaleFormFields = [
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your full name',
    icon: '👤',
    required: true,
    validation: { required: 'Name is required' }
  },
  {
    name: 'email',
    label: 'Business Email',
    type: 'email',
    placeholder: 'Enter your business email',
    icon: '📧',
    required: true,
    validation: { 
      required: 'Email is required',
      pattern: {
        value: /^\S+@\S+$/i,
        message: 'Please enter a valid email address'
      }
    }
  },
  {
    name: 'businessName',
    label: 'Business Name',
    type: 'text',
    placeholder: 'Enter your business name',
    icon: '🏢',
    required: true,
    validation: { required: 'Business name is required' }
  },
  {
    name: 'phone',
    label: 'Phone Number (Optional)',
    type: 'tel',
    placeholder: 'Enter your phone number',
    icon: '📞',
    required: false
  }
];

export const carouselImages = [
  {
    src: '/images/hero/wholesale-hero.jpg',
    alt: 'Wholesale partnership opportunity',
    title: 'Wholesale Partnership'
  },
  {
    src: '/images/hero/emu-balm.png',
    alt: 'Emu Tracks Emu Oil Balm - Natural solution for muscle and joint pain',
    title: 'Emu Oil Balm'
  },
  {
    src: '/images/hero/emu-capsule.png',
    alt: 'Emu Tracks Emu Oil Capsules - Aids in reducing pain and inflammation',
    title: 'Emu Oil Capsules'
  }
];

export const getProductImage = (category, size) => {
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