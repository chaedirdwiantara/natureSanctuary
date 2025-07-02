import { useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ 
  children, 
  theme = 'default', 
  meta, 
  className = '', 
  hideNavigation = false,
  customNavigation = null,
  customCTATarget = '#products'
}) {
  useEffect(() => {
    // Apply theme class to body
    if (theme !== 'default') {
      document.body.className = `theme-${theme}`;
    }
    
    return () => {
      // Cleanup theme class
      document.body.className = '';
    };
  }, [theme]);

  return (
    <>
      <Head>
        <title>{meta?.title || 'Emu Oil Naturally - Premium Australian Emu Oil'}</title>
        <meta name="description" content={meta?.description || 'Premium Australian emu oil products for natural health and skincare.'} />
        <meta name="keywords" content={meta?.keywords || 'emu oil, australian made, natural health, skincare'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta?.title || 'Emu Oil Naturally'} />
        <meta property="og:description" content={meta?.description || 'Premium Australian emu oil products'} />
        <meta property="og:image" content="/images/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta?.title || 'Emu Oil Naturally'} />
        <meta name="twitter:description" content={meta?.description || 'Premium Australian emu oil products'} />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Emu Oil Naturally",
              "url": "https://emuoilnaturally.com",
              "logo": "https://emuoilnaturally.com/images/brand/logo-main.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+61-5-9026-6800",
                "contactType": "customer service"
              }
            })
          }}
        />
      </Head>

      <div className={`min-h-screen flex flex-col ${className}`}>
        <Header 
          theme={theme} 
          hideNavigation={hideNavigation}
          customNavigation={customNavigation}
          customCTATarget={customCTATarget}
        />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer theme={theme} />
      </div>
    </>
  );
} 