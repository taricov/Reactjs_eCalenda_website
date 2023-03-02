import AppLoader from "./AppLoader";
import AppLogo from "./AppLogo";
import LogoV1 from "./LogoV1";

export default function LogoBanner() {
  return (
    <>
      {/* <div className="">
        <AppLogo />
      </div> */}
      <div>{/* <AppLoader BRsize={10} fSize={200} SQsize={1000} /> */}</div>
      <h1 className="hidden sm:block lg:text-[200px] text-[140px] text-center text-app-color-500 dark:text-app-color-200">
        eCalenda
      </h1>
      {/* <div className="w-full text-center mx-auto">
      <LogoV1/>
      </div> */}
      <div className="hidden sm:block text-xl text-center mx-auto w-2/3 mb-10 -mt-10 text-app-color-500 dark:text-app-color-300 capitalize">
        the ultimate buiness solution for time management and resources
        allocation.
        {/* <br />A Cloud-based web app to manage all your time-related events
        safely and in one place. */}
      </div>
    </>
  );
}
