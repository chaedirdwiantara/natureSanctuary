import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { sharedContent } from '../../lib/content';

export default function Header({ theme = 'default' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getThemeColors = () => {
    switch (theme) {
      case 'skincare':
        return {
          bg: 'bg-skincare-bg',
          text: 'text-skincare-accent',
          button: 'btn-skincare',
          accent: 'text-skincare-primary'
        };
      case 'painrelief':
        return {
          bg: 'bg-painrelief-bg',
          text: 'text-painrelief-accent',
          button: 'btn-painrelief',
          accent: 'text-painrelief-primary'
        };
      case 'wholesale':
        return {
          bg: 'bg-wholesale-bg',
          text: 'text-wholesale-accent',
          button: 'btn-wholesale',
          accent: 'text-wholesale-primary'
        };
      default:
        return {
          bg: 'bg-white',
          text: 'text-gray-800',
          button: 'bg-brand-gold text-white',
          accent: 'text-brand-gold'
        };
    }
  };

  const colors = getThemeColors();

  // Navigation items for single page scrolling
  const navigationItems = [
    { name: 'Products', href: '#products' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  // Smooth scroll function
  const handleScrollTo = (href, event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 80; // Height of sticky header
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className={`${colors.bg} shadow-soft sticky top-0 z-50 transition-all duration-300`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/brand/logo-main.svg"
                alt="Emu Oil Naturally"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-serif font-bold ${colors.text}`}>
                {sharedContent.brand.name}
              </h1>
              <p className={`text-sm ${colors.accent} font-medium`}>
                {sharedContent.brand.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(item.href, e)}
                className={`${colors.text} hover:${colors.accent} transition-colors duration-300 font-medium cursor-pointer`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${sharedContent.contact.phone}`}
              className={`flex items-center space-x-2 ${colors.text} hover:${colors.accent} transition-colors duration-300`}
            >
              <FiPhone className="w-4 h-4" />
              <span className="font-medium">{sharedContent.contact.phone}</span>
            </a>
            
            <a
              href="#products"
              onClick={(e) => handleScrollTo('#products', e)}
              className={`${colors.button} px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer`}
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${colors.text} p-2`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden border-t border-gray-200 ${colors.bg}`}
            >
              <div className="py-4 space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollTo(item.href, e)}
                    className={`block ${colors.text} hover:${colors.accent} transition-colors duration-300 font-medium py-2 cursor-pointer`}
                  >
                    {item.name}
                  </a>
                ))}
                
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href={`tel:${sharedContent.contact.phone}`}
                    className={`flex items-center space-x-2 ${colors.text} py-2`}
                  >
                    <FiPhone className="w-4 h-4" />
                    <span>{sharedContent.contact.phone}</span>
                  </a>
                  
                  <a
                    href="#products"
                    onClick={(e) => handleScrollTo('#products', e)}
                    className={`${colors.button} inline-block px-6 py-2 rounded-lg font-semibold mt-2 cursor-pointer`}
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 