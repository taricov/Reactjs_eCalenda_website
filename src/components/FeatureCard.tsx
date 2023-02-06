export default function FeatureCard({ ...props }) {
  return (
    <>
      <div className="group hover:shadow-xl hover:scale-[101%] transition-all duration-300 w-2/3 max-w-md sm:mx-auto sm:text-center bg-app-color-100 bg-opacity-10 dark:bg-app-color-700 dark:bg-opacity-10 px-7 shadow-md py-4 rounded-lg">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-app-color-600 sm:mx-auto sm:w-24 sm:h-24">
          <svg
            className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16 stroke-app-color-100"
            // stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <h6 className="mb-3 text-xl font-bold leading-5 text-app-color-700 dark:text-app-color-100 capitalize">
          {props.title}
        </h6>
        <p className="mb-3 text-sm text-app-color-700 dark:text-app-color-200">
          {props.desc}
        </p>
        {/* <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Learn more
        </a> */}
      </div>
    </>
  );
}
