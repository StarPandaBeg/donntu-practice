import "./App.scss";
import ApplySection from "./components/ApplySection";
import CasesSection from "./components/CasesSection";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import PartnersSection from "./components/PartnersSection";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import SnapshotSection from "./components/SnapshotSection";
import TracksSection from "./components/TracksSection";

function App() {
  const loginUrl = import.meta.env.VITE_LOGIN_URL || "#";

  return (
    <div className="page-shell">
      <Header loginUrl={loginUrl} />

      <main id="top">
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <TracksSection />
        <CasesSection />
        <SnapshotSection />
        <ProcessSection />
        <PartnersSection />
        <ApplySection />
      </main>

      <FooterSection />
    </div>
  );
}

export default App;
