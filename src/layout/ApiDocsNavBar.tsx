import ApiDocsNavItem from "./ApiDocsNavItem";

export default function ApiDocsNavBar() {
  return (
    <>
      {/* <nav className="hidden lg:mt-10 lg:block">
        <ul role="list">
          <li className="md:hidden">
            <a
              className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              href="/"
            >
              API
            </a>
          </li>
          <li className="md:hidden">
            <a
              className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              href="/quickstart#"
            >
              Documentation
            </a>
          </li>
          <li className="md:hidden">
            <a
              className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              href="/quickstart#"
            >
              Support
            </a>
          </li>
          <li className="relative mt-6 md:mt-0">
            <h2 className="text-xs font-semibold text-zinc-900 dark:text-white">
              Guides
            </h2>
            <div className="relative mt-3 pl-2">
              <div
                className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
                style={{
                  height: "64px;",
                  top: "32px;",
                  opacity: 1,
                  borderRadius: "8px;",
                  transform: "none;",
                  transformOrigin: "50% 50% 0px;",
                }}
              ></div>
              <div
                className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
                style={{ transform: "none;", transformOrigin: "50% 50% 0px;" }}
              ></div>
              <div
                className="absolute left-2 h-6 w-px bg-emerald-500"
                style={{
                  top: "36px",
                  opacity: 1,
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
              ></div>
              <ul role="list" className="border-l border-transparent">
                <ApiDocsNavItem title="Introduction">
                  <ul role="list" data-projection-id="1" style={{ opacity: 1 }}>
                    <li>
                      <a
                        className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/#guides"
                      >
                        <span className="truncate">Guides</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        href="/#resources"
                      >
                        <span className="truncate">Resources</span>
                      </a>
                    </li>
                  </ul>
                </ApiDocsNavItem>
                <ApiDocsNavItem title="Second"></ApiDocsNavItem>
              </ul>
            </div>
          </li>
        </ul>
      </nav> */}
      <ul className="menu w-56 rounded-none">
        <li className="hover:bg-opacity-5">
          <a>Item 1</a>
        </li>
        <li className="hover-bordered border-app-color-500">
          <a>Hover me</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </>
  );
}
