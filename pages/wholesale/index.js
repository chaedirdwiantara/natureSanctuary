import Layout from '../../components/shared/Layout';
import { landingPageContent } from '../../lib/content';
import { wholesaleFormFields, carouselImages } from '../../lib/wholesaleData';

// Wholesale-specific components
import HeroSection from '../../components/wholesale/HeroSection';
import BenefitsSection from '../../components/wholesale/BenefitsSection';
import EffectivenessSection from '../../components/wholesale/EffectivenessSection';
import TestimonialsSection from '../../components/wholesale/TestimonialsSection';
import ReachOutSection from '../../components/wholesale/ReachOutSection';
import AboutSection from '../../components/wholesale/AboutSection';
import PartnershipSection from '../../components/wholesale/PartnershipSection';
import ReadyToHelpSection from '../../components/wholesale/ReadyToHelpSection';
import ContactSection from '../../components/wholesale/ContactSection';

export default function WholesaleLanding() {
  const content = landingPageContent.wholesale;

  // Custom navigation for wholesale page (removing Products and Professional Feedback)
  const wholesaleNavigation = [
    { name: 'Effectiveness', href: '#effectiveness' },
    { name: 'About', href: '#about' },
    { name: 'Partnership', href: '#partnership' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <Layout 
      theme="wholesale" 
      meta={content.meta}
      customNavigation={wholesaleNavigation}
      customCTATarget="#contact"
    >
      <HeroSection 
        carouselImages={carouselImages}
      />
      
      <BenefitsSection />
      
      <EffectivenessSection />
      
      <TestimonialsSection testimonials={content.testimonials} />
      
      <ReachOutSection />
      
      <AboutSection />
      
      <PartnershipSection />
      
      <ReadyToHelpSection />
      
      <ContactSection formFields={wholesaleFormFields} />
    </Layout>
  );
}
 