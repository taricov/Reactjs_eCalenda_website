import AppStats from "../components/AppStats";
import FeatureCard from "../components/FeatureCard";
import Pricing from "../components/Pricing";
import SectionTitle from "../components/SectionTitle";
import AppHeader from "../layout/AppHeader";
import FeatureSection from "../layout/FeatureSection";
import HeroSection from "./HeroSection";
import { Fade } from "react-awesome-reveal";
import PagePricing from "./PagePricing";
import IframeEmbed from "../components/IframeEmbed";
import { useEffect, useState } from "react";
import FeatureCard2 from "../components/FeatureCard";
import ComingSoonCard from "../components/ComingSoonCard";

export default function PageHome() {
  // const [iframeOn, setIframe] = useState<boolean>(true);
  // const handleIframe = () => {
  //   setIframe((prev) => !prev);
  // };
  // useEffect(() => {
  //   console.log(iframeOn);
  //   iframeOn
  //     ? (document.body.style.overflow = "hidden")
  //     : (document.body.style.overflow = "auto");
  //   // return () => (document.body.style.overflow = "scroll");
  // }, [iframeOn]);
  return (
    <>
      {/* {iframeOn ? (
        <IframeEmbed
          embedId="kjhbvjh"
          iframeStatus={iframeOn}
          iframeSetter={handleIframe}
        />
      ) : (
        "null"
      )} */}

      <HeroSection />
      <SectionTitle dataGhost="" title="Features" id="features-section" />
      <FeatureSection>
        <FeatureCard
          title="New Features"
          desc="Disrupt inspire and think tank, social entrepreneur but preliminary
          thinking think tank compelling. Inspiring, invest synergy capacity
          building, white paper; silo, unprecedented challenge B-corp
          problem-solvers."
        />
        <FeatureCard
          title="New Features"
          desc="Disrupt inspire and think tank, social entrepreneur but preliminary
          thinking think tank compelling. Inspiring, invest synergy capacity
          building, white paper; silo, unprecedented challenge B-corp
          problem-solvers."
        />
        <FeatureCard
          title="New Features"
          desc="Disrupt inspire and think tank, social entrepreneur but preliminary
          thinking think tank compelling. Inspiring, invest synergy capacity
          building, white paper; silo, unprecedented challenge B-corp
          problem-solvers."
        />
        <FeatureCard
          title="New Features"
          desc="Disrupt inspire and think tank, social entrepreneur but preliminary
          thinking think tank compelling. Inspiring, invest synergy capacity
          building, white paper; silo, unprecedented challenge B-corp
          problem-solvers."
        />
        {/* <FeatureCard
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
        /> */}
      </FeatureSection>
      <SectionTitle dataGhost="SOON" title="Coming Soon" id="coming-soon" />
      <FeatureSection>
        <ComingSoonCard
          title="Audio Unit Hosting"
          desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
          iconName={"dynamic_feed"}
          type="pro"
          votes={242}
        />
        <ComingSoonCard
          title="Audio Unit Hosting"
          desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
          iconName={"dynamic_feed"}
          type="startup"
          votes={-2}
        />
        <ComingSoonCard
          title="Audio Unit Hosting"
          desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
          iconName={"dynamic_feed"}
          type="free"
          votes={242}
        />
      </FeatureSection>
      {/* <LongPane /> */}
      <AppStats />
      {/* <Pricing /> */}
      <PagePricing />
    </>
  );
}
