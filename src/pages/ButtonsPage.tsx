import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBrand from "@/components/sections/hero/HeroBrand";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";

import Button from "@/components/ui/Button";
import ButtonArrow from "@/components/ui/ButtonArrow";
import ButtonBounce from "@/components/ui/ButtonBounce";
import ButtonBubble from "@/components/ui/ButtonBubble";
import ButtonElastic from "@/components/ui/ButtonElastic";
import ButtonExpand from "@/components/ui/ButtonExpand";
import ButtonFlip from "@/components/ui/ButtonFlip";
import ButtonMagnetic from "@/components/ui/ButtonMagnetic";

export default function ButtonsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />

      <main className="flex-grow">
        <HeroBrand
          brand="UI Buttons"
          description="A curated collection of interactive button primitives designed for modern web applications."
          primaryButton={{ text: "Explore Components", href: "#showcase" }}
          secondaryButton={{ text: "Back to Home", href: "/" }}
          textAnimation="fade-blur"
        />

        <section id="showcase" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex flex-col items-center justify-center gap-6 p-10 rounded-3xl bg-card border border-border">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Standard</span>
              <Button text="Click Me" />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 p-10 rounded-3xl bg-card border border-border">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Arrow</span>
              <ButtonArrow text="Continue" />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 p-10 rounded-3xl bg-card border border-border">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Bounce</span>
              <ButtonBounce text="Submit" />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 p-10 rounded-3xl bg-card border border-border">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Bubble</span>
              <ButtonBubble text="Hover Me" />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 p-10 rounded-3xl bg-card border border-border">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Elastic</span>
              <ButtonElastic text="Stretch" />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 p-10 rounded-3xl bg-card border border-border">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Expand</span>
              <ButtonExpand text="Discover" />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 p-10 rounded-3xl bg-card border border-border">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Flip</span>
              <ButtonFlip text="Reveal" />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 p-10 rounded-3xl bg-card border border-border">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Magnetic</span>
              <ButtonMagnetic text="Attract" />
            </div>

          </div>
        </section>
      </main>

      <FooterMinimal
        brand="Webild"
        copyright="© 2024 Webild. All rights reserved."
      />
    </div>
  );
}