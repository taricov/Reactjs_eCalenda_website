import AppStats from "../components/AppStats";
import FeatureCard from "../components/FeatureCard";
import Pricing from "../components/Pricing";
import SectionTitle from "../components/SectionTitle";
import AppHeader from "../layout/AppHeader";
import FeatureSection from "../layout/FeatureSection";
import HeroSection from "./HeroSection";

export default function PageHome() {
  return (
    <>
      {/* <AppHeader /> */}
      <>
        <HeroSection />
        <SectionTitle dataGhost="" title="Features" id="features-section" />
        <FeatureSection>
          <FeatureCard
            title="Audio Unit Hosting"
            desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
            iconName={"dynamic_feed"}
            type="pro"
            votes={242}
          />
          <FeatureCard
            title="Audio Unit Hosting"
            desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
            iconName={"dynamic_feed"}
            type="startup"
            votes={-2}
          />
          <FeatureCard
            title="Audio Unit Hosting"
            desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
            iconName={"dynamic_feed"}
            type="free"
            votes={242}
          />
        </FeatureSection>
        <SectionTitle dataGhost="SOON" title="Coming Soon" id="coming-soon" />
        <FeatureSection>
          <FeatureCard
            title="Audio Unit Hosting"
            desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
            iconName={"dynamic_feed"}
            type="pro"
            votes={242}
          />
          <FeatureCard
            title="Audio Unit Hosting"
            desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
            iconName={"dynamic_feed"}
            type="startup"
            votes={-2}
          />
          <FeatureCard
            title="Audio Unit Hosting"
            desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
            iconName={"dynamic_feed"}
            type="free"
            votes={242}
          />
        </FeatureSection>
        {/* <LongPane /> */}
        <AppStats />
        <Pricing />
      </>
    </>
  );
}
