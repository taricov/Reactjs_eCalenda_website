import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import IframeEmbed from "../components/IframeEmbed";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section>
      <div className="">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-48 md:py-32 md:px-10 lg:px-32 ">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-app-color-700 dark:text-app-color-200">
            <TypeAnimation
              sequence={[
                "eCalenda",
                3000,
                "Draggable.",
                1000,
                "Taggable.",
                1000,
                "Extendible.",
                1000,
                "Searchable.",
                1000,
                // () => {},
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em" }}
            />
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-app-color-700 dark:text-app-color-200">
            A Cloud-Based Web App To Manage All Your Time-Related Events Safely
            And In One Place.
          </p>
          <div className="flex flex-wrap justify-center">
            <a
              href="/register"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-app-color-300 hover:bg-opacity-50 dark:hover:bg-opacity-50 dark:bg-app-color-700 text-app-color-700 dark:text-app-color-200 transition-all duration-200"
            >
              Get started
            </a>
            <a
              className="px-8 py-3 m-2 text-lg border rounded
              border-app-color-700 dark:border-app-color-300 text-app-color-700  hover:bg-app-color-300 hover:bg-opacity-10 dark:hover:bg-opacity-1 dark:hover:bg-app-color-200 dark:text-app-color-200 transition-all duration-200"
              href="/tutorial"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <IframeEmbed isOpen={isOpen} setIsOpen={setIsOpen} embedID="grdg" />

      <div
        className="group w-5/6 mx-auto mb-12 -mt-20 rounded-lg lg:-mt-40 dark:bg-gray-500 relative hover:opacity-70 transition-all duration-500 cursor-pointer shadow-2xl hover:-translate-y-1"
        // htmlFor="my-modal-4"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-full">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-app-color-900 bg-opacity-40"></div>
          <button
            type="button"
            className="transition duration-500 group-hover:scale-110 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-app-color-700 bg-app-color-700 dark:bg-app-color-100 shadow-xl rounded-3xl outline-none px-4 py-1 w-fit flex items-center justify-center"
          >
            <span className="mx-auto text-app-color-200 dark:text-app-color-700">
              Watch Video
            </span>
            <span className="w-6  text-app-color-200 dark:text-app-color-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
          <img
            src="https://images.unsplash.com/photo-1511204579483-e5c2b1d69acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1871&amp;q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
