export default function LogoBanner() {
  return (
    <>
      <h1 className="hidden sm:block lg:text-[200px] text-[140px] text-center text-app-color-500 dark:text-app-color-200">
        eCalenda
      </h1>
      <div className="hidden sm:block text-xl text-center mx-auto w-2/3 mb-10 -mt-10 text-app-color-500 dark:text-app-color-300 capitalize">
        the ultimate buiness solution for time management and resources
        allocation.
        {/* <br />A Cloud-based web app to manage all your time-related events
        safely and in one place. */}
      </div>
    </>
  );
}
