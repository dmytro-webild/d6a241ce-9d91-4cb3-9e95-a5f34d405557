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
                  text="Let's Connect & Build Together"
                  variant="fade-blur"
                  gradientText={true}
                  tag="h2"
                  className="text-4xl md:text-5xl leading-[1.15] font-semibold text-balance"
                />
                <TextAnimation
                  text="Have a project vision or material inquiry? Select an option below to chat directly with our team on WhatsApp—we'd love to hear from you!"
                  variant="fade-blur"
                  gradientText={false}
                  tag="p"
                  className="text-lg md:text-xl leading-snug text-balance mt-2"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
                <a
                  href="https://wa.me/50495804593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-3 primary-button rounded font-medium text-center transition-colors flex items-center justify-center gap-2"
                >
                  💬 Project Consultations
                </a>
                <a
                  href="https://wa.me/50497152117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-3 secondary-button rounded font-medium text-center transition-colors flex items-center justify-center gap-2"
                >
                  💬 Materials & General Inquiries
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
