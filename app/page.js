// import styles from "./page.module.css";

import CompanyLogos from "@/components/company-logos";
import Hero from "@/components/hero";
import InfoSection from "@/components/info-section";
import InnovatingSection from "@/components/innovating-section";
import WelcomeMessage from "@/components/welcome-message";
import LatestNews from "@/components/latest-news";

export default function Home() {
  return (
    <main className="pb-5">
      <Hero />
      <InfoSection />
      <WelcomeMessage />
      <CompanyLogos />
      <InnovatingSection />
      <LatestNews />
    </main>
  );
}
