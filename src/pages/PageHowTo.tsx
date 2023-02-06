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
          <div className="text-2xl text-app-color-700 border-2 border-app-color-400 rounded-lg py-5 dark:text-app-color-100 font-bold text-center my-10">
            <h1>How to Create a new Event in 3 ways even with one click</h1>
          </div>
          <div className="flex justify-between items-center px-10 flex-wrap gap-5">
            <div className="">
              <ol className="space-y-4 w-72">
                <li>
                  <div
                    className="w-full p-4 text-app-color-100 rounded-lg bg-app-color-700 dark:bg-app-color-900 dark:text-app-color-200 opacity-10"
                    role="alert"
                  >
                    <div className="flex items-center justify-between">
                      <span className="sr-only">User info</span>
                      <h3 className="font-medium">1. User info</h3>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </li>

                <li>
                  <div
                    className="w-full p-4 text-green-700 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:border-green-800 dark:text-green-400"
                    role="alert"
                  >
                    <div className="flex items-center justify-between">
                      <span className="sr-only">Account info</span>
                      <h3 className="font-medium">2. Account info</h3>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="w-full p-4 text-blue-700 bg-blue-100 border border-blue-300 rounded-lg dark:bg-gray-800 dark:border-blue-800 dark:text-blue-400"
                    role="alert"
                  >
                    <div className="flex items-center justify-between">
                      <span className="sr-only">Social accounts</span>
                      <h3 className="font-medium">3. Social accounts</h3>
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    role="alert"
                  >
                    <div className="flex items-center justify-between">
                      <span className="sr-only">Review</span>
                      <h3 className="font-medium">4. Review</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="w-full p-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    role="alert"
                  >
                    <div className="flex items-center justify-between">
                      <span className="sr-only">Confirmation</span>
                      <h3 className="font-medium">5. Confirmation</h3>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            <div className="w-fit flex justify-center items-center flex-1">
              <div className="w-64 carousel rounded-box mx-auto">
                <div className="carousel-item w-full">
                  <img
                    src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div className="carousel-item w-full">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYK-c5BI45eLw50VGxds1c9xq-89r81oiDBzOXI1ODDOmZ4sbkpHOtNb82C4ogW_Gqlfc&usqp=CAU"
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
                <div className="carousel-item w-full">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvND6oTsOKeRkON2uC7IV6V1l4s8jW7CIGo4ttPojdTdJ4jGjPXG3BZF6_gRHDJeCKsio&usqp=CAU"
                    className="w-full"
                    alt="Tailwind CSS Carousel component"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
