import SpecialtiesSpinner from "../components/SpecialtiesSpinner";
import HeroSection from "../components/HeroSection";
import FAQSection from "../components/FAQSection.jsx";
import CTAHome from "../components/CTAHome";

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <SpecialtiesSpinner />
      <FAQSection />
      <CTAHome />
    </div>
  );
}
