import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import WorkshopsSection from "./components/WorkshopsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import DisclaimerModal from "./components/DisclaimerModal";
import "./App.css";

function App() {
  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Disclaimer Modal */}
      <DisclaimerModal />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Workshops Section */}
      <WorkshopsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

export default App;
