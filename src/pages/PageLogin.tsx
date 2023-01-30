// import SocialButton from "./SocialButton";
import SocialLogin from "react-social-login";

const handleSocialLogin = (user: any) => {
  console.log(user);
};

const handleSocialLoginFailure = (err: any) => {
  console.error(err);
};

export default function PageLogin() {
  return (
    <div className="mx-auto w-2/3 lg:w-1/3">
      <div>Sign in </div>
      <div className="mx-auto w-full">
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg  focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg  focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-app-color-500 rounded bg-app-color-100  dark:bg-app-color-100 dark:bg-opacity-5 dark:border-app-colot-900  dark:ring-app-color-700 dark:focus:ring-offset-app-color-200 checked:!bg-app-color-900 transition duration-200 dark:focus:ring-app-color-900 focus:ring-app-color-300 dark:outline-app-color-600"
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-app-color-100 bg-app-color-500 hover:bg-app-color-600 transition duration-200 focus:ring-4 focus:outline-none focus:ring-app-color-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-app-color-100 dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:focus:ring-app-color-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
