import { useEffect, useRef } from "react";


const featuresObj = {
  someting: [
    "feature 1",
    "feature 2",
    "feature 3",
    "feature 4",
    "feature 5",
    "feature 6",
    "feature 7",
    "feature 8",
    "feature 9",
    "feature 10",
    "feature 11",
    "feature 12",
    "feature 13",
  ],
  "Cat. 2": [
    "feature 1",
    "feature 2",
    "feature 3",
    "feature 4",
    "feature 5",
    "feature 6",
    "feature 7",
    "feature 8",
    "feature 9",
    "feature 10",
    "feature 11",
    "feature 12",
    "feature 13",
  ],
  "Compatibility ": [
    "Progrssive App Works on all devices.",
    "Works on Windows/Mac and Mobile Platforms iOS and Android",
    "You don't have to download it from the app stores.",
    "Integrable with other softwares.",
    "Can be put on top of ERP systems to give fully-powered reporting experience.",
    "feature 6",
    "feature 7",
    "feature 8",
    "feature 9",
    "feature 10",
    "feature 11",
    "feature 12",
    "feature 13",
  ],
};

const Feature = ({ ...props }) => {
  return (
    <>
      <div className="group flex">
        <div className="mt-1 px-[1px] bg-app-color-200 dark:bg-gray-800 group-hover:bg-app-color-900 group-hover:text-app-color-200 transition-all duration-200 dark:text-app-color-500 text-app-color-700 w-[15px] h-[15px] mr-2 rounded-full inline-flex items-center justify-center">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            className="w-3 h-3"
            viewBox="0 0 24 24"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        </div>
        <div className="">{props.title}</div>
      </div>
    </>
  );
};

export default function PageTerms() {
  // const sectionRef = useRef<any>(null);

  // const sr = ScrollReveal({
  //   origin: "top",
  //   distance: "30px",
  //   duration: 2000,
  //   reset: true,
  // });

  // useEffect(() => {
  //   if (sectionRef.current)
  //     ScrollReveal().reveal(sectionRef.current, {
  //       interval: 200,
  //     });
  // }, []);

  return (
    <>
      <section
        // ref={sectionRef}
        className="text-app-color-700 dark:text-app-color-200 body-font"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-app-color-700 dark:text-app-color-50 mb-4">
              <span className="text-app-color-500 dark:text-app-color-600 text-4xl">
                Features
              </span>{" "}
              We Provide Right Away!
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              eCalenda is a business-centric tooling to enable business manage
              their resources. With a wide set of features a business can meet
              their indusry needs and satisfy various case scenarios.
            </p>
          </div>
          <div className="flex flex-wrap gap-10 px-10 w-3/4 mx-auto justify-center">
            {Object.entries(featuresObj).map((cat) => {
              return (
                <>
                  <div className="md:w-1/4 flex-col mx-auto">
                    <h2
                      key={cat[0]}
                      className="font-bold tracking-widest text-app-color-700 dark:text-app-color-100 mb-4 w-full"
                    >
                      {cat[0]}
                    </h2>
                    <nav className="flex-col sm:items-start sm:text-left -mb-1 space-y-3">
                      {cat[1].map((feat) => (
                        <Feature title={feat} />
                      ))}
                    </nav>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
