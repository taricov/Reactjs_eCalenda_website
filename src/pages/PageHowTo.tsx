const badges = [
  {
    title: "Create Event",
  },
  {
    title: "Create Project",
  },
  {
    title: "Create Cluster",
  },
  {
    title: "Edit Project",
  },
  {
    title: "Create",
  },
  {
    title: "Create",
  },
  {
    title: "Create",
  },
  {
    title: "Create",
  },
  {
    title: "Create",
  },
  {
    title: "Create",
  },
  {
    title: "Delete",
  },
  {
    title: "Edit",
  },
  {
    title: "New",
  },
];

export default function PageHowTo() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-app-color-700 dark:text-app-color-100 uppercase rounded-full">
                user manual
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
                <span className="relative">Know</span>
              </span>{" "}
              How To ...?
            </h2>
            <p className="text-base text-app-color-700 dark:text-app-color-100 md:text-lg capitalize">
              Use this search bar to search for a key verb for an action you
              want to perform in eCalenda.{" "}
            </p>
          </div>

          {/* <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-3xl sm:text-[50px] font-medium title-font mb-4 text-app-color-200">
              How To ...?
            </h1>
            <p className="text-base text-app-color-700 dark:text-app-color-100 md:text-lg capitalize">
              Use this search bar to search for a key verb for an action you
              want to perform in eCalenda.
            </p>
          </div> */}
          <form className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <input
                type="search"
                placeholder="What would you like to konw?"
                id="search_input"
                name="q"
                className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg  focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none"
              />
            </div>
            <button
              type="submit"
              className="text-app-color-100 bg-app-color-500 hover:bg-app-color-600 transition duration-200 focus:ring-4 focus:outline-none focus:ring-app-color-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-app-color-100 dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:focus:ring-app-color-900"
            >
              Search
            </button>
          </form>
          <div className="">
            <div className=" p-4 flex justify-center items-center flex-wrap">
              {badges.map((badge) => (
                <span className="transition-all duration-300 inline-flex items-center m-2 px-2 py-1 bg-app-color-200 text-app-color-700 hover:text-app-color-400 dark:bg-app-color-800 dark:hover:text-app-color-100 rounded-full text-sm font-semibold dark:text-app-color-300 cursor-pointer">
                  <span className="ml-1">{badge.title}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
