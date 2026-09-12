import { useEffect } from "react";
import { initHeroAnimation } from "./animations/hero";
import { initRevealAnimations } from "./animations/reveals";
import { initProjectAnimations } from "./animations/projects";
import { initProjectSectionAnimations } from "./animations/projectSections";


//Components
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

//Sections
// Works
import OluTheMaker from "./sections/OluTheMaker";
import AbegFix from "./sections/AbegFix";
import MotionWorks from "./sections/MotionWorks";
import BizFlow from "./sections/BizFlow";
// Stack
import StackSection from "./sections/StackSection";
// About
import AboutSection from "./sections/AboutSection";
// Contact
import ContactSection from "./sections/ContactSection";


function App() {
  useEffect(() => {
    const heroCleanup = initHeroAnimation();
    const revealCleanup = initRevealAnimations();
    const projectCleanup = initProjectAnimations();
    const projectSectionCleanup = initProjectSectionAnimations();

    return () => {
      heroCleanup?.();
      revealCleanup?.();
      projectCleanup?.();
      projectSectionCleanup?.();
    };
  }, []);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navbar />

      <Hero />

      <section id="work">
        <OluTheMaker />
        <AbegFix />
        <MotionWorks />
        <BizFlow />

        {/* More projects coming here */}
      </section>
      <StackSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

export default App;
