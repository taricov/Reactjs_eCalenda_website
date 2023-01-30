import { Dispatch, SetStateAction, useState } from "react";
interface Props {
  darkMode: boolean;
  darkModeHandler: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ darkMode, darkModeHandler }: Props) {
  // const location = useLocation();
  // console.log(location);

  const [navOpen, setNavOpen] = useState<boolean>(false);

  const scrollToPlans = () => {
    document
      .querySelector("#plans")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToFeatures = () => {
    document
      .querySelector("#features-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const swapDark = () => {
    darkModeHandler((prev) => !prev);
  };
  const scrollToTop = () => {
    window.location.pathname === "/"
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : (window.location.href = "/");
  };

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <>
      {/* <pre slot="react" style={{ marginBottom: "0px", marginTop: "0px" }} /> */}

      <div className="navbar bg-app-color-100 dark:bg-app-color-900 shadow-md sm:sticky relative top-0 sm:my-10 sm:z-10 z-10">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case text-xl text-app-color-500 dark:text-app-color-100"
            onClick={scrollToTop}
          >
            eCalenda
          </a>
        </div>

        <div className="flex-none">
          <ul
            className={`menu sm:menu-horizontal px-1 sm:relative sm:left-0 sm:top-0 sm:translate-x-0 sm:bg-transparent sm:w-0 space-x-1 absolute left-1/2 ${
              navOpen ? "top-14" : "-top-96"
            } -translate-x-1/2 transition-all duration-200 ease-in-out bg-app-color-800 rounded w-screen sm:block sm:px-1 z-10 shadow-xl sm:shadow-none`}
          >
            <li>
              <a
                onClick={scrollToFeatures}
                className="text-app-color-500 dark:text-app-color-100"
              >
                Features
              </a>
            </li>
            <li>
              <a
                onClick={scrollToPlans}
                className="text-app-color-500 dark:text-app-color-100"
              >
                Plans
              </a>
            </li>
            <li>
              <a
                href="/latest-updates"
                className="text-app-color-500 dark:text-app-color-100"
              >
                Updates
              </a>
            </li>
            <li>
              <a
                className="bg-app-color-500 dark:bg-app-color-300 dark:bg-opacity-50 text-app-color-100 dark:text-app-color-100 hover:dark:bg-opacity-10 hover:bg-opacity-25 hover:text-app-color-100 transition duration-200"
                href="/login"
              >
                Sign In
              </a>
            </li>
            {/* <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
            <li>
              {/* <a>Item 3</a> */}
              <label className="swap swap-rotate justify-start sm:justify-center">
                <input type="checkbox" checked={darkMode} onChange={swapDark} />
                <svg
                  className="swap-off fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-on fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </li>
          </ul>

          <div className="flex-none sm:hidden">
            <button className="btn btn-square btn-ghost" onClick={toggleNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div> */}
      </div>
    </>
  );
}
