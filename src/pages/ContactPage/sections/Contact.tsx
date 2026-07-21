import React, { useState } from 'react';
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import { sendContactEmail } from "@/lib/api/email";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await sendContactEmail({ formData });
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      alert("Message sent successfully!");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" data-webild-section="contact" data-section="contact" className="py-20">
      <div className="w-content-width mx-auto max-w-3xl">
        <ScrollReveal variant="fade-blur">
          <div className="p-6 md:p-10 card rounded">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
                  text="Have a project in mind or need a quote for materials? Fill out the form below and our construction experts will get back to you shortly."
                  variant="fade-blur"
                  gradientText={false}
                  tag="p"
                  className="text-lg md:text-xl leading-snug text-balance mt-2"
                />
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none card rounded border border-border"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none card rounded border border-border"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none card rounded border border-border"
                />
                <input
                  type="text"
                  placeholder="Company Name (Optional)"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none card rounded border border-border"
                />
                <textarea
                  placeholder="Tell us about your project or material needs..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none card rounded border border-border resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 mt-2 primary-button rounded font-medium disabled:opacity-70"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
