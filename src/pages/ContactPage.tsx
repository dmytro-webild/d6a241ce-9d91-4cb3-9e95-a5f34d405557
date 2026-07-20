// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import React from 'react';
import ContactSection from './ContactPage/sections/Contact';
import FaqSection from './ContactPage/sections/Faq';

export default function ContactPage(): React.JSX.Element {
  return (
<div className="flex flex-col">
      <ContactSection />

      <FaqSection />
    </div>
  );
}
