import leadTechImg from "../assets/img/1.jpg";

export default function PageTeam() {
  return (
    <>
      {/* <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 "> */}
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-app-color-700 dark:text-app-color-100 uppercase rounded-full">
              Our Team
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-app-color-700 dark:text-app-color-800 sm:text-4xl md:mx-auto">
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
              <span className="relative text-app-color-700 dark:text-app-color-100">
                eCalenda
              </span>
            </span>{" "}
            Behind Scenes
          </h2>
          <p className="text-md text-app-color-700 dark:text-app-color-100 capitalize">
            A good product should have a great team behind. We would like you to
            meet our team of heros who are always making things happen.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <div className="relative w-1/2 md:w-1/2 overflow-hidden transition duration-300 transform h-fit rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={leadTechImg}
              alt="Person"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-1 text-lg font-bold text-app-color-100">
                Taric Ov
              </p>
              <p className="mb-4 text-xs text-gray-100">Lead Developer</p>
              <p className="mb-4 text-xs tracking-wide text-app-color-300">
                my_qoute
              </p>
              <div className="flex items-center justify-center space-x-3">
                <a
                  href="/"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex">
              <img
                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                src={leadTechImg}
                alt="Person"
              />
              <div className="flex flex-col justify-center">
                <p className="text-lg font-bold text-app-color-700 dark:text-app-color-200">
                  Taric Ov
                </p>
                <p className="text-sm text-app-color-700 dark:text-app-color-200">
                  Lead Developer
                </p>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
