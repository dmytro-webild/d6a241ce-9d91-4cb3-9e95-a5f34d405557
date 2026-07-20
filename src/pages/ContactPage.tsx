import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />
      
      <main className="flex-grow pt-20">
        <ContactSplitForm
          tag="Get in Touch"
          title="Let's start a conversation"
          description="Have a question or want to work together? Fill out the form below and our team will get back to you shortly."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "company", type: "text", placeholder: "Company Name (Optional)", required: false }
          ]}
          textarea={{ name: "message", placeholder: "How can we help you?", rows: 5, required: true }}
          buttonText="Send Message"
          onSubmit={(data) => console.log("Form submitted:", data)}
          imageSrc="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop"
          textAnimation="fade-blur"
        />

        <FaqSimple
          tag="Support"
          title="Frequently Asked Questions"
          description="Quick answers to common inquiries before you reach out."
          items={[
            { 
              question: "How fast do you reply?", 
              answer: "We aim to respond to all inquiries within 24 hours during regular business days." 
            },
            { 
              question: "Can I schedule a discovery call?", 
              answer: "Absolutely. Once you submit the contact form, we will provide a link to book a time that works for you." 
            },
            { 
              question: "Where is your team located?", 
              answer: "We are a fully remote team distributed across multiple time zones to better serve our global clients." 
            },
            { 
              question: "Do you offer custom enterprise plans?", 
              answer: "Yes, we can tailor our services and pricing to meet the specific security and scale requirements of enterprise organizations." 
            }
          ]}
          textAnimation="slide-up"
        />
      </main>

      <FooterSimple
        brand="Webild"
        columns={[
          { 
            title: "Product", 
            items: [
              { label: "Features", href: "/features" }, 
              { label: "Pricing", href: "/pricing" }
            ] 
          },
          { 
            title: "Company", 
            items: [
              { label: "About Us", href: "/about" }, 
              { label: "Contact", href: "/contact" }
            ] 
          }
        ]}
        copyright="© 2024 Webild Inc. All rights reserved."
        links={[
          { label: "Terms of Service", href: "/terms" },
          { label: "Privacy Policy", href: "/privacy" }
        ]}
      />
    </div>
  );
}