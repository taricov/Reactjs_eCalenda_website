import ApiDocsNavBar from "../layout/ApiDocsNavBar";
import ApiDocsSection from "../layout/ApiDocsSection";
import AppHeader from "../layout/AppHeader";

const MenuItem = ({ title, scrollTo }: { title: string; scrollTo: string }) => {
  return (
    <>
      <li className="group">
        <a
          href={scrollTo}
          className="flex mb-2 transform hover:translate-x-1 transition-transform ease-in duration-200"
        >
          {/* <span className="inline-flex items-center justify-center text-gray-400"></span> */}
          <div className="px-5 w-full">
            {/* hover:bg-app-color-100 hover:bg-opacity-30 dark:hover:bg-opacity-5  */}
            <div className="text-md border-l-4 w-full border-app-color-500 dark:border-app-color-400 px-2  group-hover:text-app-color-600 dark:group-hover:text-app-color-300  text-app-color-700 dark:text-app-color-200 capitalize">
              {title}
            </div>
          </div>
        </a>
      </li>
    </>
  );
};

export default function PageApiDocs() {
  return (
    <>
      {/* <div className="flex"> */}
      {/* <AppHeader /> */}
      {/* <ApiDocsSection /> */}
      {/* <ApiDocsNavBar />*/}
      {/* </div> */}

      <div className="min-h-screen flex sm:-mt-10 mt-0">
        <div className="flex flex-col w-1/3 md:w-1/5  overflow-hidden bg-app-color-50 bg-opacity-10 dark:bg-app-color-100 dark:bg-opacity-1">
          <div className="flex text-xl pt-5 text-app-color-700 text-opacity-30  dark:text-app-color-100 dark:text-opacity-30 mx-5">
            API Docs
          </div>
          <ul className="flex flex-col py-4">
            <MenuItem title="Introduction" scrollTo="" />
            <MenuItem title="" scrollTo="" />
            <MenuItem title="first item" scrollTo="" />
            <MenuItem title="first item" scrollTo="" />
            <MenuItem title="first item" scrollTo="" />
          </ul>
        </div>
        <div className="flex justify-center items-center grow">
          <div className="h-full w-full p-5 flex-col justify-center items-center">
            {" "}
            <div className="bg-white bg-opacity-2">something</div>
            <div className="mockup-code w-3/4 mx-auto text-sm bg-gradient-to-r from-app-color-900">
              <pre data-prefix="1">
                <code lang="javascript language">npm i daisyui</code>
              </pre>
              <pre data-prefix="2">
                <code>installing...</code>
              </pre>
              <pre data-prefix="3" className="bg-success text-warning-content">
                <code>Error!</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
