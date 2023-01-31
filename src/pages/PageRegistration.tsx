import { ChangeEvent, useEffect, useState } from "react";
import AppAutoComplete from "../components/AppAutoComplete";

export default function PageRegistration() {
  const [lengthChecked, setLengthChecked] = useState<boolean>(false);
  const [upperChecked, setUpperChecked] = useState<boolean>(false);
  const [symbolChecked, setSymbolChecked] = useState<boolean>(false);
  const [numberChecked, setNumberChecked] = useState<boolean>(false);
  const [lowerChecked, setLowerChecked] = useState<boolean>(false);
  const [passwordMatched, setPasswordMatched] = useState<boolean>(false);
  const [errorChars, setErrorChars] = useState<boolean>(false);
  const [basePassword, setBasePassword] = useState<string>("");
  const [ipData, setIpData] = useState<Object>({});

  const [termsAccepted, SetTermsAccepted] = useState<boolean>(false);
  const rules = {
    lengthRule: {
      checker: lengthChecked,
      label: "at least 8 characters",
    },
    numberRule: {
      checker: numberChecked,
      label: "at least 1 number",
    },
    lowerRule: {
      checker: lowerChecked,
      label: "at least 1 lowercase character",
    },
    upperRule: {
      checker: upperChecked,
      label: "at least 1 uppercase character",
    },
    symbolRule: {
      checker: symbolChecked,
      label: "at least 1 symbol",
    },
  };

  const getIpAddress = () => {
    fetch("http://www.geoplugin.net/json.gp")
      .then((data) => data.json())
      .then((res) => setIpData(res));
    // .then(() => console.log(ipData));
  };

  useEffect(() => {
    getIpAddress();
    console.log(ipData);
  }, []);

  const passwordMeter = (e: ChangeEvent<HTMLInputElement>) => {
    let password = e.target.value;
    setBasePassword(password);
    setLengthChecked(false);
    setSymbolChecked(false);
    setNumberChecked(false);
    setUpperChecked(false);
    setLowerChecked(false);
    setErrorChars(false);
    if (/.*[a-z].*/.test(password)) {
      setLowerChecked((prev) => !prev);
    }
    if (/\d/.test(password)) {
      setNumberChecked((prev) => !prev);
    }
    if (password.length >= 8) {
      setLengthChecked((prev) => !prev);
    }
    if (/\W/.test(password)) {
      setSymbolChecked((prev) => !prev);
    }
    if (/[A-Z]/.test(password)) {
      setUpperChecked((prev) => !prev);
    }
    if (/\s/.test(password)) {
      setErrorChars((prev) => !prev);
    }
  };

  const passwordMatchChecker = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordMatched(false);
    const confirmedPassword = e.target.value;
    // console.log(confirmedPassword, passwordMatched, "base " + basePassword);
    if (confirmedPassword.length === 0) {
      setPasswordMatched(false);
    } else if (confirmedPassword === basePassword) {
      setPasswordMatched((prev) => !prev);
    }
  };
  return (
    <>
      <div className="w-full my-20">
        <div className="mx-auto w-full max-w-lg p-4 sm:p-8">
          <h2 className="text-4xl font-bold text-center text-app-color-700 dark:text-app-color-200 mt-10 mb-2">
            Sign Up
          </h2>

          <p className="text-sm text-center sm:px-6 dark:text-app-color-300 text-app-color-500 capitalize mb-10">
            Already a user? &nbsp;
            <a
              href="/login"
              rel="noopener noreferrer"
              className="underline dark:text-app-color-300 text-app-color-500 dark:hover:text-app-color-100 transition-all duration-200"
            >
              Sign In
            </a>
          </p>
          <div className="my-6 space-y-2">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center text-app-color-500 dark:text-app-color-300 hover:text-app-color-700 bg-app-color-200 dark:hover:text-app-color-100  w-full p-4 space-x-4 hover:bg-app-color-400 dark:bg-app-color-400 dark:bg-opacity-10 dark:hover:bg-app-color-400 hover:bg-opacity-50 dark:hover:bg-opacity-5 transition-all duration-200 dark:focus:ring-app-color-700 outline-none border-none rounded-md focus:ring-2 focus:ring-offset-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
            <button
              aria-label="Login with GitHub"
              role="button"
              className="flex items-center justify-center text-app-color-500 dark:text-app-color-300 hover:text-app-color-700 bg-app-color-200 dark:hover:text-app-color-100  w-full p-4 space-x-4 hover:bg-app-color-400 dark:bg-app-color-400 dark:bg-opacity-10 dark:hover:bg-app-color-400 hover:bg-opacity-50 dark:hover:bg-opacity-5 transition-all duration-200 dark:focus:ring-app-color-700 outline-none border-none rounded-md focus:ring-2 focus:ring-offset-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
              <p>Login with LinkedIn</p>
            </button>
            <button
              aria-label="Login with Twitter"
              role="button"
              className="flex items-center justify-center text-app-color-500 dark:text-app-color-300 hover:text-app-color-700 bg-app-color-200 dark:hover:text-app-color-100  w-full p-4 space-x-4 hover:bg-app-color-400 dark:bg-app-color-400 dark:bg-opacity-10 dark:hover:bg-app-color-400 hover:bg-opacity-50 dark:hover:bg-opacity-5 transition-all duration-200 dark:focus:ring-app-color-700 outline-none border-none rounded-md focus:ring-2 focus:ring-offset-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
              </svg>
              <p>Login with Twitter</p>
            </button>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full dark:text-app-color-300 text-app-color-500" />
            <p className="px-3 dark:text-app-color-300 text-app-color-500">
              OR
            </p>
            <hr className="w-full dark:text-app-color-300 text-app-color-500 " />
          </div>
          <form
            action=""
            className="space-y-8 ng-untouched ng-pristine ng-valid"
          >
            {/* <div className="space-y-4"> */}

            {/* </div> */}
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
                >
                  First name
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
                >
                  Last name
                </label>
                <input
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="company"
                  className="block mb-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
                >
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company Name"
                  className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="subdomain"
                  className="block mb-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
                >
                  <span>Your Subdomain</span>
                </label>
                <label className="input-group" htmlFor="subdomain">
                  <span className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200 label-text">
                    https://
                  </span>
                  <input
                    id="subdomain"
                    type="text"
                    placeholder="yoursubdomain.ecalenda.com"
                    className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
                  />
                </label>
              </div>
              <div className="col-span-full sm:col-span-1/2">
                <label
                  htmlFor="country"
                  className="block mb-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
                >
                  Your Country
                </label>

                <AppAutoComplete />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder=""
                  className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder=""
                  className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
                >
                  State / Province
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder=""
                  className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="zip"
                  className="block mb-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
                >
                  ZIP / Postal
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder=""
                  className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="username@gmail.com"
                  className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg  focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
                />
              </div>
              <div className="col-span-full">
                <div className="flex justify-between">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-app-color-700 dark:text-app-color-100"
                  >
                    Password
                  </label>
                </div>
                <div className="relative">
                  <span
                    className={`absolute right-4 top-2  ${
                      numberChecked &&
                      lengthChecked &&
                      symbolChecked &&
                      lowerChecked &&
                      upperChecked &&
                      !errorChars
                        ? "opacity-100 text-green-500"
                        : "opacity-50 text-gray-500"
                    }`}
                  >
                    ✓
                  </span>
                  <input
                    onChange={passwordMeter}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <div className="flex justify-between">
                  <label
                    htmlFor="confirm_password"
                    className={`block mb-2 text-sm font-medium  ${
                      numberChecked &&
                      lengthChecked &&
                      symbolChecked &&
                      lowerChecked &&
                      upperChecked &&
                      !errorChars
                        ? "text-app-color-700 dark:text-app-color-100"
                        : "text-gray-400"
                    }`}
                  >
                    Confirm Password
                  </label>
                </div>
                <div className="relative">
                  <span
                    className={`absolute right-4 top-2  ${
                      passwordMatched
                        ? "opacity-100 text-green-500"
                        : "opacity-50 text-gray-500"
                    }`}
                  >
                    ✓
                  </span>
                  <input
                    disabled={
                      numberChecked &&
                      lengthChecked &&
                      symbolChecked &&
                      lowerChecked &&
                      upperChecked &&
                      !errorChars
                        ? false
                        : true
                    }
                    onChange={passwordMatchChecker}
                    type="password"
                    name="confirm password"
                    id="confirm_password"
                    placeholder="Confirm Password"
                    className="bg-app-color-100 border border-app-color-300 text-app-color-800 text-sm rounded-lg focus:border-app-color-600 block w-full p-2.5 dark:bg-app-color-100 dark:bg-opacity-5  dark:placeholder-opacity-5 dark:text-app-color-100 dark:focus:ring-app-color-700 dark:border-app-color-900 dark:focus:border-app-color-100 transition-all duration-200 outline-none dark:placeholder:text-opacity-50 placeholder:text-app-color-500 placeholder:text-opacity-50 dark:placeholder:text-app-color-200"
                  />
                </div>
                <div className="flex flex-wrap w-full">
                  {Object.entries(rules).map((rule) => {
                    // console.log("key", rule[0]);

                    return (
                      <>
                        <div
                          key={rule[0]}
                          className="w-1/2"
                          data-length-checked={rule[1].checker}
                        >
                          <span
                            className={`text-gray-600 text-bold text-xs ${
                              rule[1].checker
                                ? "opacity-100 dark:text-green-500 text-green-600"
                                : "opacity-30 dark:opacity-50"
                            }`}
                          >
                            {rule[1].checker ? "✓" : "—"}{" "}
                          </span>
                          <span
                            className={`capitalize text-[10px] ${
                              rule[1].checker
                                ? "opacity-100 dark:text-green-500 text-green-600"
                                : "opacity-90 dark:opacity-50"
                            }`}
                          >
                            {rule[1].label}
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>

                {errorChars ? (
                  <span className="text-red-600 capitalize text-[10px]">
                    x unallowed characters
                  </span>
                ) : null}
              </div>
            </div>
            <div className="flex items-center gap-2 text-app-color-200">
              <input
                onChange={() => SetTermsAccepted((prev) => !prev)}
                id="terms"
                type="checkbox"
                checked={termsAccepted}
                className="checkbox checkbox-xs rounded-sm   bg-app-color-300 bg-opacity-30 checked:bg-app-color-500 dark:bg-opacity-2 dark:bg-app-color-100"
              />
              <label
                htmlFor="terms"
                className="text-sm text-app-color-500 dark:text-app-color-300"
              >
                Accept{" "}
                <a
                  href="#"
                  className="transition duration-200 text-app-color-400 dark:text-app-color-500 hover:text-app-color-700 dark:hover:text-app-color-400"
                >
                  Term & Conditions
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="transition duration-200 text-app-color-400 dark:text-app-color-500 hover:text-app-color-700 dark:hover:text-app-color-400"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="button"
              className="text-app-color-100 bg-app-color-500 hover:bg-app-color-600 transition duration-200 focus:ring-4 focus:outline-none focus:ring-app-color-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-app-color-100 dark:bg-opacity-10 dark:hover:bg-opacity-20 dark:focus:ring-app-color-900"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
