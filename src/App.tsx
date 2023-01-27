import { useContext, useEffect, useState } from "react";
import FeatureCard from "./components/FeatureCard";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import FeatureSection from "./layout/FeatureSection";
import "./index.css";
import LogoBanner from "./components/LogoBanner";
import SectionTitle from "./components/SectionTitle";
import LongPane from "./components/LongPane";
import APIDox from "./components/APIDox";
import axios from "axios";
import API_Sidebar from "./layout/ApiDocsNavBar";
import PageApiDocs from "./pages/PageApiDocs";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import AppHeader from "./layout/AppHeader";
import PageHome from "./pages/PageHome";
import PageHelpCenter from "./pages/PageHelpCenter";
import PageUpdates from "./pages/PageUpdates";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PageHome />,
//     children: [
//       {
//         path: "api",
//         element: <PageApiDocs />,
//       },
//       {
//         path: "help",
//         element: <PageHelpCenter />,
//       },
//     ],
//   },
// ]);
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
    window.history.scrollRestoration = "manual";

    // API calls to fetch data about features and votes GOES HERE
  }, []);
  useEffect(() => {
    isDark
      ? document.body.classList.add(...darkModeBGClasses)
      : document.body.classList.remove(...darkModeBGClasses);
  }, [isDark]);
  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      {/* <AppHeader /> */}
      <LogoBanner />
      <Navbar darkMode={isDark} darkModeHandler={setDark} />
      <Router>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/api-docs" element={<PageApiDocs />} />
          <Route path="/latest-updates" element={<PageUpdates />} />
          <Route path="/help-center" element={<PageHelpCenter />} />
        </Routes>
      </Router>
      {/* The rest of your app goes here */}
      {/* <RouterProvider router={router} /> */}
    </div>
    // <div className={`App ${isDark ? "dark" : "light"}`}>
    //   <LogoBanner />
    //   <Navbar darkMode={isDark} darkModeHandler={setDark} />
    //   <SectionTitle title="Features" id="features-section" />
    //   <FeatureSection>
    //     <FeatureCard
    //       title="Audio Unit Hosting"
    //       desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
    //       iconName={"dynamic_feed"}
    //       type="pro"
    //       votes={242}
    //     />
    //     <FeatureCard
    //       title="Audio Unit Hosting"
    //       desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
    //       iconName={"dynamic_feed"}
    //       type="startup"
    //       votes={-2}
    //     />
    //     <FeatureCard
    //       title="Audio Unit Hosting"
    //       desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
    //       iconName={"dynamic_feed"}
    //       type="free"
    //       votes={242}
    //     />
    //   </FeatureSection>
    //   <SectionTitle title="Coming Soon" id="coming-soon" />
    //   <FeatureSection>
    //     <FeatureCard
    //       title="Audio Unit Hosting"
    //       desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
    //       iconName={"dynamic_feed"}
    //       type="pro"
    //       votes={242}
    //     />
    //     <FeatureCard
    //       title="Audio Unit Hosting"
    //       desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
    //       iconName={"dynamic_feed"}
    //       type="startup"
    //       votes={-2}
    //     />
    //     <FeatureCard
    //       title="Audio Unit Hosting"
    //       desc="Host your favourite Audio Units from your Library, chain them together with eqMac effects! No more setup hassles."
    //       iconName={"dynamic_feed"}
    //       type="free"
    //       votes={242}
    //     />
    //   </FeatureSection>
    //   <Pricing />
    // {/* <LongPane /> */}
    // {/* </FeatureSection> */}
    // </div>
  );
}

export default App;
