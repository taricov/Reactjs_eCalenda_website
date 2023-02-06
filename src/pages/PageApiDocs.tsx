import ApiDocsNavBar from "../layout/ApiDocsNavBar";
import ApiDocsSection from "../layout/ApiDocsSection";
import AppHeader from "../layout/AppHeader";

const MenuItem = ({ title, scrollTo }: { title: string; scrollTo: string }) => {
  return (
    <>
      <li className="group">
        <a
          href={scrollTo}
          className="flex mb-1 transform hover:translate-x-1 transition-transform ease-in duration-200"
        >
          <div className="px-2 w-full">
            <div className="text-md w-full  group-hover:text-app-color-600 dark:group-hover:text-app-color-300  text-app-color-700 dark:text-app-color-200 capitalize">
              {title}
            </div>
          </div>
        </a>
      </li>
    </>
  );
};

const CodeBlock = () => {
  return (
    <>
      <div className="mockup-code w-3/4 mx-6 text-sm bg-gradient-to-r from-app-color-900">
        <div className="w-full text-left mb-6 text-sm">
          <select className="bg-app-color-100 dark:bg-app-color-100 bg-opacity-10 dark:bg-opacity-5 rounded p-[2px] mx-5">
            <option disabled>Select library</option>
            <option value="curl">cURL</option>
            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
            <option value="ruby">Ruby</option>
          </select>
        </div>
        <pre data-prefix="1">
          <code className="font-mono" lang="javascript language">
            function(){}
          </code>
        </pre>
      </div>
    </>
  );
};

export default function PageApiDocs() {
  return (
    <>
      <div className="min-h-screen flex sm:-mt-10 mt-0">
        <div className="flex flex-col min-w-fit w-1/3 md:w-3/5 md:max-1/5 overflow-hidden bg-app-color-500 bg-opacity-2 dark:bg-app-color-100 dark:bg-opacity-1">
          <div className="flex text-xl pt-5 text-app-color-700 text-opacity-30  dark:text-app-color-100 dark:text-opacity-90 mx-6 underline font-semibold">
            API Docs:
          </div>
          <ul className="flex flex-col py-4 px-2">
            <div className="w-full px-2">
              <MenuItem title="Introduction" scrollTo="#api_intro" />
              <MenuItem title="Authentication" scrollTo="#api_auth" />
            </div>
            <div className="ml-2 group py-1">
              <MenuItem title="Overview" scrollTo="#api_points" />
              <div className="dark:bg-app-color-300 dark:bg-opacity-2 bg-app-color-600 bg-opacity-10 text-sm border-l-2 border-app-color-500 dark:border-app-color-400 rounded-br rounded-tr w-4/5 mx-2">
                <MenuItem title="API Keys" scrollTo="#api_keys" />
                <MenuItem title="End Points" scrollTo="" />
              </div>
            </div>

            {/* Events API */}
            <div className="ml-2 group rounded py-1">
              <div className="rounde">
                <MenuItem title="Events" scrollTo="" />
              </div>
              <div className="dark:bg-app-color-300 dark:bg-opacity-2 bg-app-color-600 bg-opacity-10 text-sm border-l-2 border-app-color-500 dark:border-app-color-400 rounded-br rounded-tr w-4/5 mx-2">
                <MenuItem title="GET" scrollTo="#api_get" />
                <MenuItem title="UPDATE" scrollTo="#api_update" />
                <MenuItem title="POST" scrollTo="#api_post" />
                <MenuItem title="DELETE" scrollTo="#api_delete" />
              </div>
            </div>
            {/* Projects API */}
            <div className="ml-2 group py-1">
              <MenuItem title="Projects" scrollTo="" />
              <div className="dark:bg-app-color-300 dark:bg-opacity-2 bg-app-color-600 bg-opacity-10 text-sm border-l-2 border-app-color-500 dark:border-app-color-400 rounded-br rounded-tr w-4/5 mx-2">
                <MenuItem title="GET" scrollTo="#api_get" />
                <MenuItem title="UPDATE" scrollTo="#api_update" />
                <MenuItem title="POST" scrollTo="#api_post" />
                <MenuItem title="DELETE" scrollTo="#api_delete" />
              </div>
            </div>
            {/* Clusters API */}
            <div className="ml-2 group py-1">
              <MenuItem title="Clusters" scrollTo="" />
              <div className="dark:bg-app-color-300 dark:bg-opacity-2 bg-app-color-600 bg-opacity-10 text-sm border-l-2 border-app-color-500 dark:border-app-color-400 rounded-br rounded-tr w-4/5 mx-2">
                <MenuItem title="GET" scrollTo="#api_get" />
                <MenuItem title="UPDATE" scrollTo="#api_update" />
                <MenuItem title="POST" scrollTo="#api_post" />
                <MenuItem title="DELETE" scrollTo="#api_delete" />
              </div>
            </div>
          </ul>
        </div>
        <div className="flex justify-center items-center grow">
          <div className="h-full w-full p-5 flex-col justify-center items-center">
            <br />
            <br />
            <br />
            <br />

            <div className="">
              <div className="h-[70px]" id="api_keys"></div>
              <h1
                className="text-xl font-bold text-app-color-700 dark:text-app-color-200 px-5"
                // id="api_keys"
              >
                API Keys
              </h1>
              <div className="text-app-color-700 dark:text-app-color-200 px-5 py-3">
                <b>eCalenda</b> is secured from unauthorized use by restricting
                API calls to those that provide proper authentication
                credentials. These credentials are in the form of an API key - a
                unique alphanumeric string that associates your eCalenda account
                with the specific API .
              </div>
              <CodeBlock />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
