export default function PageContacts() {
  return (
    <>
      <section className="my-20 text-app-color-700 dark:text-app-color-50 w-full mx-auto">
        <form className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md">
          <h2 className="w-full mx-auto text-3xl font-bold text-center leading-tight">
            Contact us
          </h2>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-app-color-700 dark:text-app-color-100 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-app-color-700 dark:text-app-color-100 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-app-color-700 dark:text-app-color-100 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message..."
              className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
              spellCheck={false}
              style={{ height: "165px;" }}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="text-app-color-100 bg-app-color-500 hover:bg-app-color-600 transition duration-200 focus:ring-4 focus:outline-none focus:ring-app-color-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-app-color-100 dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:focus:ring-app-color-900"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
