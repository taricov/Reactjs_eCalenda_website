import IframeEmbed from "../components/IframeEmbed";

export default function HeroSection() {
  return (
    <section>
      <div className="">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 ">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-app-color-700 dark:text-app-color-200">
            Provident blanditiis cum exercitationem
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-app-color-700 dark:text-app-color-200">
            Cupiditate minima voluptate temporibus quia? Architecto beatae esse
            ab amet vero eaque explicabo!
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
      <div className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500">
        <IframeEmbed embedId="rokGy0huYEA" />
      </div>

      {/* <img
        src="https://source.unsplash.com/random/480x320"
        alt=""
        className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500"
      /> */}
    </section>
  );
}
