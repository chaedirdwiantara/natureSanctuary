import Link from 'next/link';
import Image from 'next/image';
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
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

  return (
    <footer className={`${colors.bg} ${colors.text}`}>
      {/* Trust Signals Bar */}
      <div className={`border-b ${colors.border} py-8`}>
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sharedContent.trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Image
                    src={signal.icon}
                    alt={signal.title}
                    width={24}
                    height={24}
                    className="opacity-90"
                  />
                </div>
                <div>
                  <h4 className={`font-semibold text-sm ${colors.text}`}>
                    {signal.title}
                  </h4>
                  <p className={`text-xs ${colors.accent}`}>
                    {signal.description}
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/brand/logo-white.svg"
                    alt="Emu Oil Naturally"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className={`font-serif font-bold ${colors.text}`}>
                    {sharedContent.brand.name}
                  </h3>
                  <p className={`text-sm ${colors.accent}`}>
                    {sharedContent.brand.tagline}
                  </p>
                </div>
              </Link>
              
              <p className={`${colors.accent} text-sm mb-6 leading-relaxed`}>
                Australia's premium emu oil supplier. 100% natural, ethically sourced, 
                and manufactured to the highest quality standards.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href={sharedContent.contact.social.facebook}
                  className={`${colors.accent} hover:${colors.text} transition-colors duration-300`}
                  aria-label="Facebook"
                >
                  <FiFacebook className="w-5 h-5" />
                </a>
                <a
                  href={sharedContent.contact.social.instagram}
                  className={`${colors.accent} hover:${colors.text} transition-colors duration-300`}
                  aria-label="Instagram"
                >
                  <FiInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            {sharedContent.navigation.footer.map((section, index) => (
              <div key={index}>
                <h4 className={`font-semibold ${colors.text} mb-4`}>
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`${colors.accent} hover:${colors.text} transition-colors duration-300 text-sm`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
                <FiPhone className="w-4 h-4" />
                <span className="text-sm">{sharedContent.contact.phone}</span>
              </a>
              
              <a
                href={`mailto:${sharedContent.contact.email}`}
                className={`flex items-center space-x-2 ${colors.accent} hover:${colors.text} transition-colors duration-300`}
              >
                <FiMail className="w-4 h-4" />
                <span className="text-sm">{sharedContent.contact.email}</span>
              </a>
              
              <div className={`flex items-center space-x-2 ${colors.accent}`}>
                <FiMapPin className="w-4 h-4" />
                <span className="text-sm">{sharedContent.contact.address}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="/images/trust/australian-made-badge.png"
                alt="Australian Made"
                width={60}
                height={40}
                className="opacity-80"
              />

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