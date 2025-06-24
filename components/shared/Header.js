import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { sharedContent } from '../../lib/content';

export default function Header({ theme = 'default', hideNavigation = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getThemeColors = () => {
    switch (theme) {
      case 'skincare':
        return {
          bg: 'bg-skincare-bg',
          text: 'text-skincare-accent',
          textHover: 'hover:text-skincare-primary',
          button: 'bg-skincare-primary hover:bg-skincare-accent text-white',
          accent: 'text-skincare-primary'
        };
      case 'painrelief':
        return {
          bg: 'bg-painrelief-bg',
          text: 'text-painrelief-accent',
          textHover: 'hover:text-painrelief-primary',
          button: 'bg-painrelief-primary hover:bg-painrelief-accent text-white',
          accent: 'text-painrelief-primary'
        };
      case 'wholesale':
        return {
          bg: 'bg-wholesale-bg',
          text: 'text-wholesale-accent',
          textHover: 'hover:text-wholesale-primary',
          button: 'bg-wholesale-primary hover:bg-wholesale-accent text-white',
          accent: 'text-wholesale-primary'
        };
      default:
        return {
          bg: 'bg-white',
          text: 'text-gray-800',
          textHover: 'hover:text-brand-gold',
          button: 'bg-brand-gold text-white hover:bg-yellow-600',
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
  const handleScrollTo = (href) => {
    // Close mobile menu first
    setIsMenuOpen(false);
    
    // Wait a bit for menu to close, then scroll
    setTimeout(() => {
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 100);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          {!hideNavigation && (
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScrollTo(item.href)}
                  className={`${colors.text} ${colors.textHover} transition-colors duration-300 font-medium cursor-pointer`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          )}

          {/* Contact & CTA */}
          {!hideNavigation && (
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${sharedContent.contact.phone}`}
                className={`flex items-center space-x-2 ${colors.text} ${colors.textHover} transition-colors duration-300`}
              >
                <FiPhone className="w-4 h-4" />
                <span className="font-medium">{sharedContent.contact.phone}</span>
              </a>
              
              <button
                onClick={() => handleScrollTo('#products')}
                className={`${colors.button} px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                Get Quote
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {!hideNavigation && (
            <button
              type="button"
              className={`lg:hidden ${colors.text} p-2 z-60 relative`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          )}
        </div>

        {/* Mobile Menu - Simplified without Framer Motion */}
        {!hideNavigation && isMenuOpen && (
          <div className={`lg:hidden border-t border-gray-200 ${colors.bg} overflow-hidden transition-all duration-300 ease-in-out`}>
            <div className="py-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleScrollTo(item.href)}
                  className={`block w-full text-left px-0 py-3 ${colors.text} ${colors.textHover} transition-colors duration-300 font-medium cursor-pointer border-0 bg-transparent`}
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <a
                  href={`tel:${sharedContent.contact.phone}`}
                  className={`flex items-center space-x-2 ${colors.text} py-2`}
                >
                  <FiPhone className="w-4 h-4" />
                  <span>{sharedContent.contact.phone}</span>
                </a>
                
                <button
                  type="button"
                  onClick={() => handleScrollTo('#products')}
                  className={`${colors.button} px-6 py-2 rounded-lg font-semibold mt-2 cursor-pointer transition-all duration-300`}
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 