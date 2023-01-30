import { useState } from "react";

const Item = ({ title, children }: { title: string; children: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-bold">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-app-color-800 dark:text-app-color-200">
            {children}
          </p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-app-color-700 dark:text-app-color-100 uppercase rounded-full">
              Find Help
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-app-color-700 dark:text-app-color-100 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-app-color-700 dark:text-app-color-200  opacity-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="232db96b-4aa2-422f-9086-5a77996d1df1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">eCalenda</span>
            </span>{" "}
            Help Center
          </h2>
          <p className="text-base text-app-color-700 dark:text-app-color-100 md:text-lg capitalize">
            Learn how to use eCalenda and find answers to common questions
          </p>
        </div>
        <div className="space-y-2 text-app-color-700 bg-app-color-200 dark:bg-app-color-500 dark:bg-opacity-1 bg-opacity-40 dark:text-app-color-100 rounded p-5">
          <Item title="The quick, brown fox jumps over a lazy dog?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="The first mate and his Skipper too will do?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="Is the Space Pope reptilian!?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="How much money you got on you?">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
        </div>
      </div>
    </div>
  );
};

export const Faq2 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-app-color-700 dark:text-app-color-100 uppercase ">
              FAQ
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto text-app-color-700 dark:text-app-color-100 capitalize">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block capitalize text-app-color-900 dark:text-app-color-100 opacity-10"
              >
                <defs>
                  <pattern
                    id="70326c9b-4a0f-429b-9c76-792941e326d5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">check</span>
            </span>{" "}
            out the frequently asked questions below
          </h2>
          <p className="text-md text-app-color-700 dark:text-app-color-100 md:text-lg capitalize">
            If you still have questions, Please{" "}
            <a
              href="/contacts"
              className="underline hover:text-app-color-300 transition-all duration-200"
            >
              Contact Us
            </a>
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl sm:mx-auto">
        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
          <div className="space-y-8 text-app-color-700 dark:text-app-color-100">
            <div>
              <p className="mb-4 text-xl font-bold">
                The quick, brown fox jumps over a lazy dog?
              </p>
              <p className="text-app-color-800 dark:text-app-color-200">
                Space, the final frontier. These are the voyages of the Starship
                Enterprise. Its five-year mission: to explore strange new
                worlds.
                <br />
                Many say exploration is part of our destiny, but it’s actually
                our duty to future generations.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-bold">
                The first mate and his Skipper too will do?
              </p>
              <p className="text-app-color-800 dark:text-app-color-200">
                Well, the way they make shows is, they make one show. That
                show's called a pilot.
                <br />
                Then they show that show to the people who make shows, and on
                the strength of that one show they decide if they're going to
                make more shows. Some pilots get picked and become television
                programs.Some don't, become nothing. She starred in one of the
                ones that became nothing.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-bold">
                Is the Space Pope reptilian!?
              </p>
              <p className="text-app-color-800 dark:text-app-color-200">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear. I didn't even know we were calling
                him Big Bear.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xl font-bold text-app-color-700 dark:text-app-color-100">
                How much money you got on you?
              </p>
              <p className="text-app-color-800 dark:text-app-color-200">
                The first mate and his Skipper too will do their very best to
                make the others comfortable in their tropic island nest. Michael
                Knight a young loner on a crusade to champion the cause of the
                innocent. The helpless. The powerless in a world of criminals
                who operate above the law. Here he comes Here comes Speed Racer.
                He's a demon on wheels.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-bold text-app-color-700 dark:text-app-color-100">
                Galaxies Orion's sword globular star cluster?
              </p>
              <p className="text-app-color-800 dark:text-app-color-200">
                A business big enough that it could be listed on the NASDAQ goes
                belly up. Disappears!
                <br />
                It ceases to exist without me. No, you clearly don't know who
                you're talking to, so let me clue you in.
              </p>
            </div>
            <div>
              <p className="mb-4 text-xl font-bold space-y-8 text-app-color-700 dark:text-app-color-100">
                When has justice ever been as simple as a rule book?
              </p>
              <p className="text-app-color-800 dark:text-app-color-200">
                This is not about revenge. This is about justice. A lot of
                things can change in twelve years, Admiral. Well, that's
                certainly good to know. About four years. I got tired of hearing
                how young I looked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PageHelpCenter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Faq />
      <Faq2 />
    </>
  );
}
