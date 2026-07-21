import React from 'react';
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  return (
    <div id="contact" data-webild-section="contact" data-section="contact" className="py-20">
      <div className="w-content-width mx-auto max-w-3xl">
        <ScrollReveal variant="fade-blur">
          <div className="p-6 md:p-10 card rounded">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                  <p>Get in Touch</p>
                </div>
                <TextAnimation
                  text="Let's build something great together"
                  variant="fade-blur"
                  gradientText={true}
                  tag="h2"
                  className="text-4xl md:text-5xl leading-[1.15] font-semibold text-balance"
                />
                <TextAnimation
                  text="Have a project in mind or need a quote for materials? Click the button below to chat with our construction experts on WhatsApp."
                  variant="fade-blur"
                  gradientText={false}
                  tag="p"
                  className="text-lg md:text-xl leading-snug text-balance mt-2"
                />
              </div>

              <div className="flex flex-col gap-3 mt-4 items-center">
                <a
                  href="https://wa.me/50495070946"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 mt-2 bg-[#25D366] text-white hover:bg-[#20bd5a] rounded font-medium text-center transition-colors flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
