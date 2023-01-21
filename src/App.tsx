import { useContext, useEffect, useState } from "react";
import FeatureCard from "./components/FeatureCard";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import FeatureSection from "./layout/FeatureSection";
import "./index.css";
import LogoBanner from "./components/LogoBanner";
import SectionTitle from "./components/SectionTitle";

function App() {
  const [isDark, setDark] = useState<boolean>(true);
  // document.querySelector("body")?.classList.add()
  // const [count, setCount] = useState(0);
  const darkModeBGClasses = [
    "bg-gradient-to-l",
    "from-black",
    "to-app-color-900",
  ];
  useEffect(() => {
    isDark
      ? document.body.classList.add(...darkModeBGClasses)
      : document.body.classList.remove(...darkModeBGClasses);
  }, [isDark]);
  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <LogoBanner />
      <Navbar darkMode={isDark} darkModeHandler={setDark} />
      {/* <FeatureSection> */}
      <SectionTitle title="Features" />
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
      <SectionTitle title="Coming Soon" />
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
      <Pricing />
      {/* </FeatureSection> */}
    </div>
  );
}

export default App;
