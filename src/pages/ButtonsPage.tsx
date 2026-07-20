import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AvatarGroup from "@/components/ui/AvatarGroup";

export default function ButtonsPage() {
  return (
    <>
      <div data-webild-section="HeroBillboard"><section aria-label="Hero section" className="relative pt-25 pb-20 md:pt-30"><HeroBackgroundSlot /><div className="flex flex-col gap-12 md:gap-15 w-content-width mx-auto"><div className="flex flex-col items-center gap-3 text-center"><div className="px-3 py-1 mb-1 text-sm card rounded w-fit"><p>Meet Buttons</p></div><TextAnimation text="The Heart of Constructora Powery" variant="slide-up" gradientText={true} tag="h1" className="md:max-w-8/10 text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-center text-balance" /><TextAnimation text="Whether greeting customers at the lumber yard or keeping morale high on site, we brings true island spirit to every  project." variant="slide-up" gradientText={false} tag="p" className="md:max-w-7/10 text-lg md:text-xl leading-snug text-balance" /><div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3"><Button text="Our Services" href="/services" variant="primary" /><Button text="Meet the Team" href="/team" variant="secondary" animationDelay={0.1} /></div></div><ScrollReveal variant="slide-up" delay={0.2} className="w-full p-2 xl:p-3 2xl:p-4 card rounded overflow-hidden"><ImageOrVideo imageSrc="https://img.freepik.com/free-photo/beautiful-pet-portrait-dog_23-2149218450.jpg" className="aspect-4/5 md:aspect-video" /></ScrollReveal></div></section></div>
      <div data-webild-section="AboutText"><section aria-label="About section" className="py-20"><div className="w-content-width mx-auto flex flex-col gap-2 items-center"><TextAnimation text="Meet Buttons, the Heart of GuanajaBuild" variant="fade-blur" gradientText={false} tag="h2" className="text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance" /><div className="flex flex-wrap gap-3 justify-center mt-2 md:mt-3"><Button text="Meet the Team" href="/team" variant="primary" /><Button text="Our Services" href="/services" variant="secondary" animationDelay={0.1} /></div></div></section></div>
    </>
  );
}
