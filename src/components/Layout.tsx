import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Materials",
    "href": "#materials"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  { name: "Buttons", href: "/buttons" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },



];

  return (
    <StyleProvider buttonVariant="bubble" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="Constructora Powery"
      ctaButton={{
        text: "Get a Quote",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Constructora Powery"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Materials",
              href: "#materials",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Delivery Tracking",
              href: "#",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
      ]}
      copyright="© 2024 Constructora Powery Construction. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/tools-clay-work-sculpting_23-2149986247.jpg?_wi=2"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
