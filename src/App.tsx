import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import WorkshopsSection from "./components/WorkshopsSection";
import ContactSection from "./components/ContactSection";
import { events } from "./data/events";
import { workshops } from "./data/workshops";
import "./App.css";

function App() {


  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Hero Section */}
      <HeroSection/>

      {/* About Section */}
      <AboutSection/>

      {/* Experience Section */}
      <ExperienceSection events={events} />

      {/* Workshops Section */}
      <WorkshopsSection workshops={workshops} />

      {/* Contact Section */}
      <ContactSection/>
    </div>
  );
}

export default App;
