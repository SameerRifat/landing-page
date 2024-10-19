import Hero from "@/components/hero";
import InfoSection from "@/components/info-section";
import WelcomeMessage from "@/components/welcome-message";
import CompanyLogos from "@/components/company-logos";
import MilestonesSection from "@/components/milestones-section";
import LatestNews from "@/components/latest-news";

export default function Home() {
  return (
    <main className="pb-5">
      <Hero />
      <InfoSection />
      <WelcomeMessage />
      <CompanyLogos />
      <MilestonesSection />
      <LatestNews />
    </main>
  );
}
