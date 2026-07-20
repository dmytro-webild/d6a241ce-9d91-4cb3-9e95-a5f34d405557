import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import { Truck, Users, Wrench } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlay
      tag="Guanaja's Trusted Supplier"
      title="Guanaja's Premier Hardware & Construction Partner"
      description="Supplying the island with top-quality wood, concrete, roofing, and daily essentials while offering expert residential construction services to build your home from the ground up—reliable, locally stocked, and built for the island climate."
      primaryButton={{
        text: "Request a Quote",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Materials",
        href: "#materials",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/tools-clay-work-sculpting_23-2149986247.jpg?_wi=1"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="materials" data-section="materials">
    <SectionErrorBoundary name="materials">
          <FeaturesImageBento
      tag="Our Inventory"
      title="All-in-One Material Showcase"
      description="From foundation materials to daily essentials, we maintain a comprehensive, island-ready inventory."
      items={[
        {
          title: "Premium Lumber",
          description: "Treated wood for lasting structures.",
          imageSrc: "http://img.b2bpic.net/free-photo/brown-closeup-wooden-texture-macro_1122-1778.jpg",
        },
        {
          title: "Concrete & Aggregates",
          description: "Sand, gravel, and high-strength concrete.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-clay-smudge_23-2148862856.jpg",
        },
        {
          title: "Roofing Systems",
          description: "Weather-resistant, durable roofing solutions.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-new-painted-metal-surface_23-2148394678.jpg",
        },
        {
          title: "Hardware Tools",
          description: "Every tool you need for the job.",
          imageSrc: "http://img.b2bpic.net/free-photo/workshop-with-different-implements_23-2148180525.jpg",
        },
        {
          title: "Construction Services",
          description: "Full-cycle build and management.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-roofers-working-together-with-helmets_23-2149343707.jpg",
        },
        {
          title: "Paints & Sealants",
          description: "Island-grade weather protection.",
          imageSrc: "http://img.b2bpic.net/free-photo/old-fence-s-renovaiting-process-by-worker-he-apply-brown-paint-with-brush-wearing-protective-gloves_613910-17110.jpg",
        },
        {
          title: "Daily Essentials",
          description: "Including ice and basic supplies.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-construction-safety-goggles-blurred-background_169016-17032.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <PricingMediaCards
      tag="Services"
      title="Construction & Delivery"
      description="Professional services tailored for Guanaja residents."
      plans={[
        {
          tag: "Expert",
          price: "Consultation",
          period: "Book Now",
          features: [
            "Site assessment",
            "Material estimation",
            "Structural planning",
          ],
          primaryButton: {
            text: "Book Session",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/architects-looking-plan-front-house_23-2147813107.jpg",
        },
        {
          tag: "Fast",
          price: "Bulk Delivery",
          period: "Daily",
          features: [
            "Sand & Gravel",
            "Full Lumber loads",
            "Priority scheduling",
          ],
          primaryButton: {
            text: "Request Delivery",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/waibaidu-bridge-shanghai_1359-928.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Our Impact"
      title="Serving Guanaja Daily"
      description="Proven results for island construction and supply needs."
      metrics={[
        {
          icon: Wrench,
          title: "Successful Builds",
          value: "150+",
        },
        {
          icon: Truck,
          title: "Deliveries Completed",
          value: "2k+",
        },
        {
          icon: Users,
          title: "Local Clients",
          value: "800+",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeOverlayCards
      tag="Voices"
      title="Trusted by Island Residents"
      description="Hear how we help build and supply the island."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Contractor",
          company: "Island Built",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-male-carpenter-leaning-workbench_23-2147944946.jpg",
        },
        {
          name: "David M.",
          role: "Homeowner",
          company: "West End",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/architect-smiling-safety-equipment_23-2148242954.jpg",
        },
        {
          name: "Elena R.",
          role: "Architect",
          company: "Custom Designs",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-back-view-engineer-architect-supervising-construction_23-2148233787.jpg",
        },
        {
          name: "Marcus V.",
          role: "Business Owner",
          company: "Beachfront",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-shot-beach-with-waves-from-sea-jungle-maldives_181624-3344.jpg",
        },
        {
          name: "Julia P.",
          role: "Homeowner",
          company: "Sandy Bay",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/nature-landscape-hawaii-with-digital-art-style_23-2151793616.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Support"
      title="Common Questions"
      description="Get quick answers about material availability, delivery, and services."
      categories={[
        {
          name: "General",
          items: [
            {
              question: "Do you deliver island-wide?",
              answer: "Yes, our logistics fleet services the entire island daily.",
            },
            {
              question: "Can I order materials online?",
              answer: "Use our request portal for quotes and inventory availability.",
            },
          ],
        },
        {
          name: "Construction",
          items: [
            {
              question: "How do I book a consultation?",
              answer: "Select the Consultation service on our site to schedule a visit.",
            },
            {
              question: "Do you offer construction timelines?",
              answer: "We provide detailed scheduling and status tracking for all projects.",
            },
          ],
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to build?"
      text="Start your next project with Guanaja's most trusted partner. Get your material estimate or book your construction consultation today."
      primaryButton={{
        text: "Contact Us",
        href: "#",
      }}
      secondaryButton={{
        text: "Call Now",
        href: "tel:5555555",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
