import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FaqSimple from "@/components/sections/faq/FaqSimple";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactSplitForm
        tag="Get in Touch"
        title="Let's build something great together"
        description="Have a project in mind or need a quote for materials? Fill out the form below and our construction experts will get back to you shortly."
        inputs={[
          { name: "name", type: "text", placeholder: "Your Name", required: true },
          { name: "email", type: "email", placeholder: "Your Email", required: true },
          { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
          { name: "company", type: "text", placeholder: "Company Name (Optional)", required: false }
        ]}
        textarea={{ name: "message", placeholder: "Tell us about your project or material needs...", rows: 5, required: true }}
        buttonText="Send Message"
        onSubmit={(data) => console.log("Form submitted:", data)} imageSrc=""
        textAnimation="fade-blur"
      />

      <FaqSimple
        tag="Support"
        title="Frequently Asked Questions"
        description="Quick answers to common inquiries before you reach out."
        items={[
          { 
            question: "How fast do you reply to quote requests?", 
            answer: "We aim to respond to all inquiries and quote requests within 24 hours during regular business days." 
          },
          { 
            question: "Do you deliver building materials to the site?", 
            answer: "Yes, we offer delivery services for all our building materials directly to your construction site. Delivery fees may vary based on location and order size." 
          },
          { 
            question: "Can I schedule a consultation for my project?", 
            answer: "Absolutely. Once you submit the contact form, our team will reach out to schedule a consultation to discuss your project in detail." 
          },
          { 
            question: "Do you handle both residential and commercial projects?", 
            answer: "Yes, Constructora Powery has extensive experience managing and supplying materials for both residential homes and large-scale commercial developments." 
          }
        ]}
        textAnimation="slide-up"
      />
    </div>
  );
}