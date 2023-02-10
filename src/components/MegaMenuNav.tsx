
export default function MegaMenuNav() {

  return (
  <>
  
  <nav className="absolute bg-app-color-200 border-app-color-700 dark:border-app-color-200 dark:bg-app-color-900 w-screen top-20 left-1/2 -translate-x-1/2">
  <div id="mega-menu-full-image-dropdown" className="mt-1 bg-app-color-8 border-app-color-700 shadow-sm border-y dark:bg-app-color-800 dark:border-app-color-500 rounded-md">
      <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-app-color-700 dark:text-app-color-100 md:grid-cols-3 md:px-6">
          <ul className="hidden mb-4 space-y-4 md:mb-0 md:block" aria-labelledby="mega-menu-full-image-button">
              <li>
                  <a href="#" className="">
                      Online Stores
                  </a>
              </li>
              <li>
                  <a href="#" className="">
                      Segmentation
                  </a>
              </li>
              <li>
                  <a href="#" className="">
                      Marketing CRM
                  </a>
              </li>
              <li>
                  <a href="#" className="">
                      Online Stores
                  </a>
              </li>
          </ul>
          <ul className="mb-4 space-y-4 md:mb-0">
              <li>
                  <a href="#" className="">
                      Our Blog
                  </a>
              </li>
              <li>
                  <a href="#" className="">
                      Terms & Conditions
                  </a>
              </li>
              <li>
                  <a href="#" className="">
                      License
                  </a>
              </li>
              <li>
                  <a href="#" className="">
                      Resources
                  </a>
              </li>
          </ul>
          <a href="#" className="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken" style={{backgroundImage: "url(/docs/images/dashboard-overview.png)"}}>
              <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white">Preview the new Flowbite dashboard navigation.</p>
              <button type="button" className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-app-color-8 hover:text-app-color-200 focus:ring-4 focus:outline-none focus:ring-gray-700">
                  Get started
                  <svg className="w-4 h-4 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
          </a>
      </div>
  </div>
</nav></>
  );
}