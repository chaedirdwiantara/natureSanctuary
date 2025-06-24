import Link from 'next/link';
import Image from 'next/image';
// Removed react-icons import to fix component error
import { sharedContent } from '../../lib/content';

export default function Footer({ theme = 'default' }) {
  const getThemeColors = () => {
    switch (theme) {
      case 'skincare':
        return {
          bg: 'bg-skincare-accent',
          text: 'text-white',
          accent: 'text-skincare-light',
          border: 'border-skincare-light'
        };
      case 'painrelief':
        return {
          bg: 'bg-painrelief-accent',
          text: 'text-white',
          accent: 'text-painrelief-light',
          border: 'border-painrelief-light'
        };
      case 'wholesale':
        return {
          bg: 'bg-wholesale-accent',
          text: 'text-white',
          accent: 'text-wholesale-light',
          border: 'border-wholesale-light'
        };
      default:
        return {
          bg: 'bg-gray-800',
          text: 'text-white',
          accent: 'text-gray-300',
          border: 'border-gray-600'
        };
    }
  };

  const colors = getThemeColors();

  // Function to get appropriate icon for trust badges
  const getTrustIcon = (badgeName) => {
    switch (badgeName.toLowerCase()) {
      case 'australian made':
        return <div className="w-6 h-6 bg-white bg-opacity-20 rounded flex items-center justify-center text-white text-xs font-bold">AU</div>;
      case 'natural ingredients':
        return <div className="w-6 h-6 bg-white bg-opacity-20 rounded flex items-center justify-center text-white text-xs font-bold">🌿</div>;
      case 'money back guarantee':
        return <div className="w-6 h-6 bg-white bg-opacity-20 rounded flex items-center justify-center text-white text-xs font-bold">✓</div>;
      default:
        return <div className="w-6 h-6 bg-white bg-opacity-20 rounded flex items-center justify-center text-white text-xs font-bold">★</div>;
    }
  };

  return (
    <footer className={`${colors.bg} ${colors.text}`}>
      {/* Trust Signals Bar */}
      <div className={`border-b ${colors.border} py-8`}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {sharedContent.trust.badges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                  {getTrustIcon(badge.name)}
                </div>
                <div>
                  <h4 className={`font-semibold text-sm ${colors.text}`}>
                    {badge.name}
                  </h4>
                  <p className={`text-xs ${colors.accent}`}>
                    {badge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container-custom">
          <div className="text-center">
            {/* Company Info */}
            <Link href="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/brand/logo-white.svg"
                  alt="Emu Oil Naturally"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className={`font-serif font-bold text-xl ${colors.text}`}>
                  {sharedContent.brand.name}
                </h3>
                <p className={`text-sm ${colors.accent}`}>
                  {sharedContent.brand.tagline}
                </p>
              </div>
            </Link>
            
            <p className={`${colors.accent} text-sm mb-8 leading-relaxed max-w-2xl mx-auto`}>
              Australia's premium emu oil supplier. 100% natural, ethically sourced, 
              and manufactured to the highest quality standards.
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <a
                href={sharedContent.contact.socialMedia.facebook}
                className={`${colors.accent} hover:${colors.text} transition-colors duration-300`}
                aria-label="Facebook"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg text-white text-sm flex items-center justify-center font-bold hover:bg-blue-700 transition-colors">f</div>
              </a>
              <a
                href={sharedContent.contact.socialMedia.instagram}
                className={`${colors.accent} hover:${colors.text} transition-colors duration-300`}
                aria-label="Instagram"
              >
                <div className="w-8 h-8 bg-pink-600 rounded-lg text-white text-sm flex items-center justify-center font-bold hover:bg-pink-700 transition-colors">ig</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className={`border-t ${colors.border} py-6`}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
              <a
                href={`tel:${sharedContent.contact.phone}`}
                className={`flex items-center space-x-2 ${colors.accent} hover:${colors.text} transition-colors duration-300`}
              >
                <div className="w-4 h-4 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">📞</div>
                <span className="text-sm">{sharedContent.contact.phone}</span>
              </a>
              
              <a
                href={`mailto:${sharedContent.contact.email}`}
                className={`flex items-center space-x-2 ${colors.accent} hover:${colors.text} transition-colors duration-300`}
              >
                <div className="w-4 h-4 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">✉</div>
                <span className="text-sm">{sharedContent.contact.email}</span>
              </a>
              
              <div className={`flex items-center space-x-2 ${colors.accent}`}>
                <div className="w-4 h-4 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">📍</div>
                <span className="text-sm">{sharedContent.contact.address}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 px-3 py-2 rounded-lg">
                <div className="w-5 h-5 bg-white bg-opacity-20 rounded flex items-center justify-center text-white text-xs font-bold">★</div>
                <span className="text-sm font-semibold text-white">Australian Made</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={`border-t ${colors.border} py-4`}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm">
            <p className={colors.accent}>
              © {new Date().getFullYear()} {sharedContent.brand.name}. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link href="/privacy" className={`${colors.accent} hover:${colors.text} transition-colors duration-300`}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={`${colors.accent} hover:${colors.text} transition-colors duration-300`}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 