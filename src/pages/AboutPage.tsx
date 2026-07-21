import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import AboutTextSplit from "@/components/sections/about/AboutTextSplit";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Powery Ebanks"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Contact Us", href: "/contact" }}
      />
      
      <main className="flex-grow pt-24">
        <AboutTextSplit
          title="A Legacy of Trust in the Bay Islands"
          descriptions={[
            "For over 15 years, Powery Ebanks has been a trusted family-run company serving Guanaja and the Bay Islands with dedication, integrity, and pride.",
            "What began as a local venture has grown into a cornerstone of the community, providing essential products and services that support both everyday life and long-term development.",
            "With a reputation built on experience and trust, we bring technical expertise and a personal touch to every project. At Powery Ebanks, we are more than a company—we are a family committed to strengthening our community, one project at a time."
          ]}
          textAnimation="fade-blur"
        />

        <AboutFeaturesSplit
          tag="Our Operations"
          title="Essential Services for Our Community"
          description="We provide the foundational materials and services needed for growth and daily life in the Bay Islands."
          items={[
            {
              icon: "Hammer",
              title: "Construction Materials",
              description: "Supplying high-quality materials that builders and homeowners rely on to bring projects to life."
            },
            {
              icon: "Droplet",
              title: "Ice Production",
              description: "Delivering reliable ice services that keep businesses and families cool and refreshed."
            },
            {
              icon: "Map",
              title: "Constructora Powery",
              description: "Our specialized branch for professional building, site planning, and land surveys."
            }
          ]}
          imageSrc="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
          textAnimation="slide-up"
        />

        <ContactCta
          tag="Work With Us"
          text="Ready to build the future of our community together?"
          primaryButton={{ text: "Get in Touch", href: "/contact" }}
          secondaryButton={{ text: "Learn More", href: "/" }}
          textAnimation="fade-blur"
        />
      </main>

      <FooterMinimal
        brand="Powery Ebanks"
        copyright="© 2024 Powery Ebanks. All rights reserved."
      />
    </div>
  );
}