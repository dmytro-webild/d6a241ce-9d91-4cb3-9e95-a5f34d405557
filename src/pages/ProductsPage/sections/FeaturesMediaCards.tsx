import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";

export default function FeaturesMediaCardsSection(): React.JSX.Element {
  return (
    <div data-webild-section="features-media-cards" id="features-media-cards">
      <section aria-label="Features section" className="py-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center w-content-width mx-auto gap-2">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>Product Catalog</p>
            </div>
            <TextAnimation text="Professional Building Materials" variant="fade-blur" gradientText={true} tag="h2" className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance" />
            <TextAnimation text="Browse our comprehensive selection of high-quality tools, fasteners, and building materials designed for contractors and DIY builders." variant="fade-blur" gradientText={false} tag="p" className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance" />
            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              <p className="text-lg font-medium text-accent">Contact us for more info</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
