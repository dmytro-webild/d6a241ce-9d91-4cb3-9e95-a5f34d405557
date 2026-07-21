import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Contact",
    "href": "/contact"
  },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },

];

  return (
    <StyleProvider buttonVariant="bubble" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="Powery & Asociados"
      ctaButton={{
        text: "Get a Quote",
        href: "/contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Powery & Asociados"
      columns={[
        {
          title: "Information",
          items: [
            {
              label: "About Us",
              href: "/about",
            },
            {
              label: "Materials",
              href: "/#materials",
            },
            {
              label: "Services",
              href: "/#services",
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
      copyright="© 2024 Powery & Asociados Construction. All rights reserved."
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
