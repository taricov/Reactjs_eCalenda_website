import { useState } from "react";

const prices = [
  {
    basic: { m: 4, y: 2 },
    startup: { m: 5, y: 7 },
  },
];
const ItemListChecked = ({ ...props }) => (
  <li className=" flex items-center space-x-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="flex-shrink-0 w-6 h-6"
    >
      <path
        className="transition-all duration-200 group-hover:text-white"
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      ></path>
    </svg>
    <span className="transition-all duration-200 group-hover:text-white dark:group-hover:text-white">
      {props.title}
    </span>
  </li>
);
export default function PagePricing() {
  const [priceToggle, setPriceToggle] = useState<boolean>(false);

  return (
    <>
      <div className="mx-auto w-full" id="plans">
        <section className="py-20 text-app-color-700 dark:text-app-color-100 mx-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <span className="font-bold tracking-wider uppercase text-app-color-700 dark:text-app-color-600">
                Pricing
              </span>
              <h2 className="text-4xl font-bold lg:text-5xl text-app-color-700 dark:text-app-color-100">
                Choose your best plan
              </h2>
            </div>
            <div className="my-10 flex justify-center bg-app-color-700 dark:bg-app-color-100 px-5 py-2 rounded-2xl mx-auto sm:w-2/3 lg:w-1/3 w-3/4">
              <label className="label cursor-pointer flex gap-5">
                <span className="label-text text-app-color-100 dark:text-app-color-900  text-lg w-[120px] ">
                  Billing {!priceToggle ? "Monthly" : "Yearly"}
                </span>
                <input
                  type="checkbox"
                  className="toggle toggle-default dark:checked:bg-app-color-500 checked:bg-app-color-200"
                  checked={priceToggle}
                  onChange={() => setPriceToggle((prev) => !prev)}
                />
              </label>
            </div>
            <div className="flex flex-wrap items-stretch -mx-4">
              <div className=" flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 text-app-color-700 dark:text-app-color-100 dark:bg-app-color-900 bg-app-color-100">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Beginner</h4>
                    <span className="text-6xl font-bold">Free</span>
                  </div>
                  <p className="mt-3 leading-relaxed dark:text-app-color-200 text-app-color-700">
                    Etiam ac convallis enim, eget euismod dolor.
                  </p>
                  <ul className="flex-1 mb-6 flex-col space-y-2 dark:text-app-color-300 text-app-color-700">
                    <ItemListChecked title="lorem ipsum fefe" />
                    <ItemListChecked title="lorem ipsum fefe" />
                    <ItemListChecked title="lorem ipsum fefe" />
                    <ItemListChecked title="lorem ipsum fefe" />
                  </ul>
                  <button
                    type="button"
                    className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-app-color-200 bg-app-color-700 dark:text-app-color-900 text-app-color-100
                    dark:hover:bg-app-color-100 dark:hover:-translate-y-1 hover:-translate-y-1 hover:bg-app-color-600 transition-all duration-400"
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-app-color-200 bg-app-color-700 dark:text-app-color-900 text-app-color-100">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Enterprise</h4>
                    <span className="text-6xl font-bold">
                      $
                      {!priceToggle ? prices[0].startup.m : prices[0].startup.y}
                      <span className="text-sm tracking-wide">/month</span>
                    </span>
                  </div>
                  <p className="leading-relaxed">
                    Morbi cursus ut sapien sit amet consectetur.
                  </p>
                  <ul className="flex-1 space-y-2">
                    <ItemListChecked title="lorem ipsum fefe" />
                    <ItemListChecked title="lorem ipsum fefe" />
                    <ItemListChecked title="lorem ipsum fefe" />
                    <ItemListChecked title="lorem ipsum fefe" />
                  </ul>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-app-color-200 dark:bg-app-color-700 text-app-color-900 dark:text-app-color-100
                    dark:hover:bg-app-color-600 dark:hover:-translate-y-1 hover:-translate-y-1 hover:bg-app-color-100 transition-all duration-400"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
              <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="p-6 space-y-6 rounded shadow sm:p-8 dark:bg-app-color-900 bg-app-color-100">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Team</h4>
                    <span className="text-6xl font-bold">
                      Custom
                      {/* <span className="text-sm tracking-wide">/month</span> */}
                    </span>
                  </div>
                  <p className="leading-relaxed dark:text-app-color-200 text-app-color-700">
                    Phasellus ultrices bibendum nibh in vehicula.
                  </p>
                  <ul className="space-y-2 dark:text-app-color-300 text-app-color-700">
                    <ItemListChecked title="lorem ipsum fefe" />
                    <ItemListChecked title="lorem ipsum fefe" />
                    <ItemListChecked title="lorem ipsum fefe" />
                    <ItemListChecked title="lorem ipsum fefe" />
                  </ul>
                  <a
                    rel="noopener noreferrer"
                    href="/meeting"
                    className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-app-color-200 bg-app-color-700 dark:text-app-color-900 text-app-color-100
                    dark:hover:bg-app-color-100 dark:hover:-translate-y-1 hover:-translate-y-1 hover:bg-app-color-600 transition-all duration-400"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
