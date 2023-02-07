import { useContext, useEffect, useState } from "react";
import FeatureCard from "./components/ComingSoonCard";
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
import PagePricing from "./pages/PagePricing";
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
import AppFooter from "./layout/AppFooter";

import PageFeatures from "./pages/PageFeatures";
import PageContacts from "./pages/PageContacts";
import PageSignIn from "./pages/PageSignIn";
import PageRegistration from "./pages/PageRegistration";
import PageTerms from "./pages/PageTerms";
import PageTestimonails from "./pages/PageTestimonials";
import PageHowTo from "./pages/PageHowTo";
import PageTeam from "./pages/PageTeam";
import PagePrivacy from "./pages/PagePrivacy";
import AppCookiesPopover from "./components/AppCookiesPopover";
import PageAbout from "./pages/PageAbout";
import PageIntegrations from "./pages/PageIntegrations";
import PageTutorial from "./pages/PageTutorial";
import PageComingSoon from "./pages/PageComingSoon";
import PageMeeting from "./pages/PageMeeting";

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
  const darkMode = localStorage.getItem("darkMode") === "dark" ? true : false;
  const [isDark, setDark] = useState<boolean>(darkMode);
  // document.querySelector("body")?.classList.add()
  // const [count, setCount] = useState(0);
  const darkModeBGClasses = [
    "bg-gradient-to-l",
    "from-black",
    "to-app-color-900",
  ];
  const lightModeBGClasses = ["bg-gradient-to-r", "from-app-color-200"];
  useEffect(() => {
    window.history.scrollRestoration = "manual";

    // API calls to fetch data about features and votes GOES HERE
  }, []);
  useEffect(() => {
    if (isDark) {
      document.body.classList.add(...darkModeBGClasses);
      document.body.classList.remove(...lightModeBGClasses);
    } else {
      document.body.classList.remove(...darkModeBGClasses);
      document.body.classList.add(...lightModeBGClasses);
    }
  }, [isDark]);

  return (
    <div className={`App  ${isDark ? "dark" : "light"}`}>
      {/* <AppHeader /> */}
      <LogoBanner />
      <Navbar darkMode={isDark} darkModeHandler={setDark} />

      <AppCookiesPopover />
      <Router>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/login" element={<PageSignIn />} />
          <Route path="/terms" element={<PageTerms />} />
          <Route path="/features" element={<PageFeatures />} />
          <Route path="/testimonials" element={<PageTestimonails />} />
          <Route path="/plans" element={<PagePricing />} />
          <Route path="/contacts" element={<PageContacts />} />
          <Route path="/register" element={<PageRegistration />} />
          <Route path="/api-docs" element={<PageApiDocs />} />
          <Route path="/latest-updates" element={<PageUpdates />} />
          <Route path="/help-center" element={<PageHelpCenter />} />
          <Route path="/upcoming-features" element={<PageComingSoon />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/tutorial" element={<PageTutorial />} />
          <Route path="/integrations" element={<PageIntegrations />} />
          <Route path="/meeting" element={<PageMeeting />} />
          <Route path="/how-to" element={<PageHowTo />} />
          <Route path="/team" element={<PageTeam />} />
          <Route path="/privacy" element={<PagePrivacy />} />
        </Routes>
      </Router>
      <AppFooter />
    </div>
  );
}

export default App;
