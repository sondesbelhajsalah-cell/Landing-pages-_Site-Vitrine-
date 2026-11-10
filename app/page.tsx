import Hero from "./components/Hero";
import Services from "./components/Services";
import Collaborative from "./components/Collaborative";
import Portals from "./components/Portals";
import Why from "./components/Why";
import Pricing from "./components/Pricing";
import Multiplatform from "./components/Multiplatform";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <main id="contenu">
      <Hero />
      <Services />
      <Collaborative />
      <Portals />
      <Why />
      <Pricing />
      <Multiplatform />
      <Testimonials />
      <Faq />
    </main>
  );
}
