import Layout from '../../components/shared/Layout';
import { landingPageContent } from '../../lib/content';
import { wholesaleFormFields, carouselImages } from '../../lib/wholesaleData';

// Wholesale-specific components
import HeroSection from '../../components/wholesale/HeroSection';
import BenefitsSection from '../../components/wholesale/BenefitsSection';
import ProductsSection from '../../components/wholesale/ProductsSection';
import TestimonialsSection from '../../components/wholesale/TestimonialsSection';
import PartnershipCTASection from '../../components/wholesale/PartnershipCTASection';
import ContactSection from '../../components/wholesale/ContactSection';

export default function WholesaleLanding() {
  const content = landingPageContent.wholesale;

  return (
    <Layout theme="wholesale" meta={content.meta}>
      <HeroSection 
        carouselImages={carouselImages}
        productImage={content.hero.productImage}
      />
      
      <BenefitsSection />
      
      <ProductsSection products={content.products} />
      
      <TestimonialsSection testimonials={content.testimonials} />
      
      <PartnershipCTASection />
      
      <ContactSection formFields={wholesaleFormFields} />
    </Layout>
  );
}
 