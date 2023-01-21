import { useState } from "react";

export default function Pricing() {
  const [priceToggle, setPriceToggle] = useState<boolean>(false);

  const prices = [
    {
      basic: { m: 4, y: 2 },
      startup: { m: 5, y: 7 },
    },
  ];

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="">
          <div className="text-center font-semibold">
            <h1 className="text-5xl">
              <span className="text-app-color-500 tracking-wide">
                Flexible{" "}
              </span>
              <span>Plans</span>
            </h1>
            <p className="pt-3 mb-9 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
              Start your eCalenda right away!
            </p>
          </div>
          <div className="flex justify-center bg-app-color-50 px-5 py-2 rounded-2xl mx-auto w-1/3">
            <label className="label cursor-pointer flex gap-5">
              <span className="label-text text-app-color-900 text-lg w-[120px] ">
                Billing {!priceToggle ? "Monthly" : "Yearly"}
              </span>
              <input
                type="checkbox"
                className="toggle toggle-success"
                checked={priceToggle}
                onChange={() => setPriceToggle((prev) => !prev)}
              />
              {/* <span className="label-text">Billing Yearly</span> */}
            </label>
          </div>

          <div className="pt-16 flex flex-col md:flex-row gap-5">
            {/* Basic Card */}
            <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
              {/* <h1 className="text-black font-semibold text-2xl">Basic</h1> */}
              <p className="pt-2 tracking-wide">
                {/* <span className="text-gray-400 align-top">$ </span> */}
                <span className="text-3xl font-semibold uppercase">
                  free
                  {/* {priceToggle ? prices[0].basic.m : prices[0].basic.y} */}
                </span>
                {/* <span className="text-gray-400 font-medium">Forever</span> */}
                <span className="text-gray-400 text-xs font-light block capitalize italic mt-2">
                  Forever
                </span>
              </p>
              <hr className="mt-2 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    Get started with{" "}
                    <span className="text-black">messaging</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    Flexible <span className="text-black">team meetings</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    <span className="text-black">5 TB</span> cloud storage
                  </span>
                </p>

                <a href="#" className="">
                  <p className="w-full py-4 bg-app-color-500 mt-8 rounded-xl text-white">
                    <span className="font-medium">Choose Plan</span>
                    <span className="pl-2 material-icons align-middle text-sm">
                      east
                    </span>
                  </p>
                </a>
              </div>
            </div>

            {/* StartUp Card */}
            <div className="md:w-80 w-96 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform md:scale-125 scale-100">
              <h1 className="text-white font-semibold text-2xl">Startup</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-gray-400 align-top">$ </span>
                <span className="text-3xl font-semibold">
                  {!priceToggle ? prices[0].startup.m : prices[0].startup.y}
                </span>
                <span className="text-gray-400 font-medium">/ user</span>
                <span className="text-gray-400 text-xs font-light block capitalize italic mt-2">
                  each month
                </span>
              </p>
              <hr className="mt-2 border-1 border-gray-600" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    All features in <span className="text-white">Basic</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    Flexible <span className="text-white">call scheduling</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    <span className="text-white">15 TB</span> cloud storage
                  </span>
                </p>

                <a href="#" className="">
                  <p className="w-full py-4 bg-app-color-500 mt-8 rounded-xl text-white">
                    <span className="font-medium">Choose Plan</span>
                    <span className="pl-2 material-icons align-middle text-sm">
                      east
                    </span>
                  </p>
                </a>
              </div>
              <div className="absolute top-4 right-4">
                <p className="bg-app-color-500 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                  Popular
                </p>
              </div>
            </div>
            {/* Enterprise Card */}
            <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
              <h1 className="text-black font-semibold text-2xl">Custom</h1>
              <p className="pt-2 tracking-wide">
                <span className="text-3xl font-semibold">Contact Us</span>
              </p>
              <hr className="mt-2 border-1" />
              <div className="pt-8">
                <p className="font-semibold text-gray-400 text-left">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    All features in <span className="text-black">Startup</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    Growth <span className="text-black">oriented</span>
                  </span>
                </p>
                <p className="font-semibold text-gray-400 text-left pt-5">
                  <span className="material-icons align-middle">done</span>
                  <span className="pl-2">
                    <span className="text-black">Unlimited</span> cloud storage
                  </span>
                </p>

                <a href="#" className="">
                  <p className="w-full py-4 bg-app-color-500 mt-8 rounded-xl text-white">
                    <span className="font-medium">Choose Plan</span>
                    <span className="pl-2 material-icons align-middle text-sm">
                      east
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
