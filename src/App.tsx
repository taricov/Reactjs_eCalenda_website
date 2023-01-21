import { useContext, useState } from "react";
import FeatureCard from "./components/FeatureCard";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import FeatureSection from "./layout/FeatureSection";

function App() {
  const [isDark, setDark] = useState<boolean>(true);

  // const [count, setCount] = useState(0);

  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <Navbar darkMode={isDark} darkModeHandler={setDark} />
      {/* <FeatureSection> */}
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
