"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeLargeTitles"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",          id: "about"},
        {
          name: "Features",          id: "features"},
        {
          name: "Products",          id: "products"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="PouchSolutions"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="PouchSolutions"
      description="Reduce shipping costs and material waste with high-speed, industrial-grade packaging."
      buttons={[
        {
          text: "Get Quote",          href: "#contact"},
        {
          text: "Explore Materials",          href: "#products"},
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/two-brutal-tattooed-roaster-hands-hold-sealed-package-bag-with-tea-coffee-ready-delivery-sale_346278-558.jpg",          imageAlt: "Industrial facility"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/transparent-plastic-bottles-filled-with-yellow-substance_273609-13377.jpg",          imageAlt: "Packaging tech"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-male-barista-coffee-shop_23-2148523047.jpg",          imageAlt: "Advanced materials"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-businesswoman-male-worker-wearing-face-masks-while-examining-reports-wood-factory_637285-11861.jpg",          imageAlt: "Custom production"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pharmaceutical-technician-sterile-environment-working-with-equipment-pharmacy-industry_645730-333.jpg",          imageAlt: "Quality assurance"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/photos-sterile-production-area-with-stainless-steel-machine-production-sorting-pills-medicines_645730-366.jpg",          imageAlt: "Scalable solutions"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Built for Modern Scalability"
      description={[
        "Our process bridges the gap between material innovation and high-volume packaging production. We offer a modern path for businesses seeking reliability and premium quality finish.",        "Leverage our advanced custom pouch configurations to streamline your supply chain and reduce manufacturing friction."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "Advanced Materials",          author: "R&D Team",          description: "High-barrier films tailored for specific product longevity and safety standards.",          tags: [
            "Innovation",            "Durability"],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-metallic-grey-background_23-2148846087.jpg"},
        {
          id: "f2",          title: "High-Speed Automation",          author: "Production",          description: "Optimized assembly lines ensuring consistent quality at scale for every order.",          tags: [
            "Scalability",            "Speed"],
          imageSrc: "http://img.b2bpic.net/free-photo/car-bodies-are-assembly-line-factory-production-cars-modern-automotive-industry-electric-car-factory-conveyor_645730-767.jpg"},
        {
          id: "f3",          title: "Configurator Dashboard",          author: "Tech Lab",          description: "Digitally integrated platform to design and configure your bespoke packaging solutions.",          tags: [
            "Tech",            "Customization"],
          imageSrc: "http://img.b2bpic.net/free-photo/solar-panels-male-worker-analyzing-performance-data-laptop-optimizing-efficiency_482257-135442.jpg"},
      ]}
      title="Industrial Capabilities"
      description="Engineered for high performance across diverse industry applications."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          brand: "Standard",          name: "Stand-Up Pouch",          price: "Custom Pricing",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-oil-painting-tubes_23-2149629997.jpg"},
        {
          id: "p2",          brand: "Durable",          name: "Retort Pouch",          price: "Custom Pricing",          rating: 5,
          reviewCount: "85",          imageSrc: "http://img.b2bpic.net/free-photo/white-paper-package-bottle-liquid_23-2147935421.jpg"},
        {
          id: "p3",          brand: "Eco",          name: "Paper-Barrier Pouch",          price: "Custom Pricing",          rating: 4,
          reviewCount: "210",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-minimal-kitchen-objects_23-2148835348.jpg"},
        {
          id: "p4",          brand: "Custom",          name: "Shape-Specific Pouch",          price: "Custom Pricing",          rating: 5,
          reviewCount: "45",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-toilet-bag-with-products-arrangement_23-2149879992.jpg"},
        {
          id: "p5",          brand: "Barrier",          name: "Multi-Layer Pouch",          price: "Custom Pricing",          rating: 5,
          reviewCount: "150",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-perforated-fabric_23-2149894546.jpg"},
        {
          id: "p6",          brand: "Tech",          name: "Side-Gusset Pouch",          price: "Custom Pricing",          rating: 4,
          reviewCount: "95",          imageSrc: "http://img.b2bpic.net/free-photo/spooky-man-showing-small-tablet_23-2147686731.jpg"},
      ]}
      title="Pouch Solutions Library"
      description="A comprehensive catalog of industrial pouch configurations."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "99.9%",          title: "Production Uptime",          description: "Reliable throughput for enterprise-grade orders.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-admin-office-sing-tablet-design-machine-learning-algorithms_482257-112941.jpg"},
        {
          id: "m2",          value: "150+",          title: "Industry Types",          description: "Proven experience in diverse packaging sectors.",          imageSrc: "http://img.b2bpic.net/free-photo/minimalist-abstract-gradient-green-layers-paper_23-2148793009.jpg"},
        {
          id: "m3",          value: "25%+",          title: "Sustainability Gain",          description: "Reduction in material impact through innovation.",          imageSrc: "http://img.b2bpic.net/free-photo/elevated-view-graph-with-natural-resources-icon-desk_23-2147826559.jpg"},
      ]}
      title="Measured Reliability"
      description="Delivering measurable impact across every deployment."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Sarah J.",          handle: "@procurement",          testimonial: "The configurator dashboard changed our workflow entirely.",          imageSrc: "http://img.b2bpic.net/free-photo/warehouse-supervisor-fulfills-purchases_482257-75304.jpg"},
        {
          id: "t2",          name: "Mark D.",          handle: "@opsmanager",          testimonial: "Unbeatable uptime and consistent quality across all batches.",          imageSrc: "http://img.b2bpic.net/free-photo/businessman-smiling-camera_107420-95907.jpg"},
        {
          id: "t3",          name: "Emily R.",          handle: "@production",          testimonial: "Innovation that feels professional and truly scalable.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-senior-engineer-solar-panels-plant-reading-documentation_482257-120499.jpg"},
        {
          id: "t4",          name: "David K.",          handle: "@designlead",          testimonial: "Exceptional material quality for high-barrier needs.",          imageSrc: "http://img.b2bpic.net/free-photo/goal-oriented-entrepreneur-focuses-his-business-career-development_482257-116941.jpg"},
        {
          id: "t5",          name: "Chris B.",          handle: "@qaexpert",          testimonial: "The precision in their retort pouch manufacturing is unmatched.",          imageSrc: "http://img.b2bpic.net/free-photo/factory-staff-member-overseeing-heavy-tools-near-welding-sparks-using-tablet-using-protective_482257-135636.jpg"},
      ]}
      title="Industry Trusted"
      description="Feedback from production managers and procurement specialists."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "How do I configure my pouch?",          content: "Our dashboard provides an automated step-by-step UI to select materials and dimensions."},
        {
          id: "q2",          title: "What is the lead time?",          content: "Lead times vary by customization level but generally run 4-6 weeks for high-volume orders."},
        {
          id: "q3",          title: "Are you sustainable?",          content: "Yes, we focus on eco-conscious barriers and material-reduction designs across our portfolio."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/call-center-onboarding-specialist-tutoring-intern-how-use-csm-system_482257-117972.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Clear answers to streamline your production decisions."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="Get Started"
      title="Ready to discuss your project?"
      description="Our team of packaging specialists is standing by to assist with custom configurations, material selections, and scaling plans."
      buttons={[
        {
          text: "Schedule Discovery",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",              href: "#about"},
            {
              label: "Capabilities",              href: "#features"},
            {
              label: "Products",              href: "#products"},
          ],
        },
        {
          items: [
            {
              label: "Materials",              href: "#"},
            {
              label: "Sustainability",              href: "#"},
            {
              label: "Legal",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "Support",              href: "#"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
      ]}
      logoText="PouchSolutions"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}