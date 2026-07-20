import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeaturesMediaCards from "@/components/sections/features/FeaturesMediaCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="BuildSupply"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get a Quote", href: "/contact" }}
      />

      <main className="flex-grow">
        <HeroBillboard
          tag="Our Catalog"
          title="Professional Grade Materials"
          description="From heavy-duty structural fasteners to everyday hand tools, explore our comprehensive range of high-quality building supplies designed for professionals and DIYers alike."
          primaryButton={{ text: "Browse Categories", href: "#categories" }}
          secondaryButton={{ text: "Download Catalog", href: "#" }}
          imageSrc="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2070&auto=format&fit=crop"
          textAnimation="fade-blur"
        />

        <div id="categories">
          <FeaturesMediaCards
            tag="Inventory"
            title="Shop by Category"
            description="Find exactly what you need for your next project, organized for quick and easy sourcing."
            items={[
              {
                title: "Screws & Nails",
                description: "Essential fasteners for joining wood, metal, and drywall securely.",
                imageSrc: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Bolts & Nuts",
                description: "Heavy-duty fasteners engineered for structural integrity and high load capacity.",
                imageSrc: "https://images.unsplash.com/photo-1530982011887-3cc11cc85693?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Wall Anchors",
                description: "Reliable mounting solutions specifically designed for hollow drywall and masonry.",
                imageSrc: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Washers",
                description: "Precision-stamped washers for optimal load distribution and surface protection.",
                imageSrc: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Everyday Tools & Safety",
                description: "Professional hand tools, measuring devices, cutting equipment, and safety gear.",
                imageSrc: "https://images.unsplash.com/photo-1581147036324-c17771fd8ac6?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Plumbing & Electrical",
                description: "Durable pipes, fittings, specialized tapes, and essential electrical components.",
                imageSrc: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Adhesives & Sealants",
                description: "Industrial-strength glue, weather-resistant sealants, and mechanical lubricants.",
                imageSrc: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Building Materials & Hardware",
                description: "Premium timber, boards, door/window hardware, heavy chain, and wire.",
                imageSrc: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
              }
            ]}
            textAnimation="fade-blur"
          />
        </div>

        <ContactCta
          tag="Bulk Orders"
          text="Need materials for a large commercial project?"
          primaryButton={{ text: "Contact Sales", href: "/contact" }}
          secondaryButton={{ text: "View Pricing Tiers", href: "/pricing" }}
          textAnimation="fade-blur"
        />
      </main>

      <FooterSimple
        brand="BuildSupply"
        columns={[
          {
            title: "Products",
            items: [
              { label: "Fasteners", href: "#" },
              { label: "Tools", href: "#" },
              { label: "Materials", href: "#" }
            ]
          }
        ]}
        copyright="© 2024 BuildSupply Inc. All rights reserved."
        links={[
          { label: "Terms of Service", href: "#" },
          { label: "Privacy Policy", href: "#" }
        ]}
      />
    </div>
  );
}