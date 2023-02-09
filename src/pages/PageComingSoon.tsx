import { TiWeatherPartlySunny } from "react-icons/ti";
import TitlePage from "../components/TitlePage";

const upcomingFeatures = [
  {
    icon: (
      <>
        <TiWeatherPartlySunny className="mx-auto" size={30} />
      </>
    ),
    title: "Weather Indicators",
    desc: (
      <>
        <div>
          Get info about the weather right away in eCalenda if u r planning for
          an open-air event or managing outside-ish resource
        </div>
      </>
    ),
    estimatedDate: "May 1, 2023",
  },
  {
    icon: (
      <>
        <TiWeatherPartlySunny className="mx-auto" size={30} />
      </>
    ),
    title: "Weather Indicators",
    desc: (
      <>
        <div>
          Get info about the weather right away in eCalenda if u r planning for
          an open-air event or managing outside-ish resource
        </div>
      </>
    ),
    estimatedDate: "May 1, 2023",
  },
  {
    icon: (
      <>
        <TiWeatherPartlySunny className="mx-auto" size={30} />
      </>
    ),
    title: "Weather Indicators",
    desc: (
      <>
        <div>
          Get info about the weather right away in eCalenda if u r planning for
          an open-air event or managing outside-ish resource
        </div>
      </>
    ),
    estimatedDate: "May 1, 2023",
  },
  {
    icon: (
      <>
        <TiWeatherPartlySunny className="mx-auto" size={30} />
      </>
    ),
    title: "Weather Indicators",
    desc: (
      <>
        <div>
          Get info about the weather right away in eCalenda if u r planning for
          an open-air event or managing outside-ish resource
        </div>
      </>
    ),
    estimatedDate: "May 1, 2023",
  },
  {
    icon: (
      <>
        <TiWeatherPartlySunny className="mx-auto" size={30} />
      </>
    ),
    title: "Weather Indicators",
    desc: (
      <>
        <div>
          Get info about the weather right away in eCalenda if u r planning for
          an open-air event or managing outside-ish resource
        </div>
      </>
    ),
    estimatedDate: "May 1, 2023",
  },
];

export default function PageComingSoon() {
  return (
    <div className="my-20">
      {/* <div className="w-full text-center">
        <h1 className="mx-auto text-3xl ">Upcoming Features</h1>
      </div> */}

      <TitlePage
        highlighted="Upcoming!"
        title="Features to arrive soon"
        desc="eCalenda is a business-centric tooling to enable business manage their resources. With a wide set of features a business can meet their indusry needs and satisfy various case scenarios."
      />

      <div className="overflow-hidden border-2 border-app-color-900 border-opacity-10 w-fit w-full sm:w-10/12 sm:mx-auto mx-2 my-20 mx-auto">
        <table className="w-full text-sm text-left text-app-color-700 dark:text-app-color-200">
          <thead className="text-xs text-app-color-700 capitalize dark:bg-app-color-100 bg-app-color-800 bg-opacity-5 dark:bg-opacity-5 dark:text-app-color-100">
            <tr className="md:text-[15px]">
              <th
                scope="col"
                className="px-6 py-3 border border-app-color-200 dark:border-app-color-900"
              >
                Icon
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-app-color-200 dark:border-app-color-900"
              >
                Feature Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-app-color-200 dark:border-app-color-900"
              >
                description
              </th>
              <th
                scope="col"
                className="px-6 py-3 border border-app-color-200 dark:border-app-color-900"
              >
                when?
              </th>
            </tr>
          </thead>
          <tbody className="rounded-xl">
            {upcomingFeatures.map((feature) => (
              <tr
                key={feature.title}
                className="border dark:border-app-color-200 dark:border-app-color-900 dark:border-app-color-200 h-0 hover:h-28 transition-all duration-300"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-app-color-700 whitespace-nowrap dark:text-app-color-200 text-center border border-app-color-200 dark:border-app-color-900"
                >
                  {feature.icon}
                </td>
                <td className="px-6 py-4 border border-app-color-200 dark:border-app-color-900">
                  {feature.title}
                </td>
                <td className="px-6 py-4 border border-app-color-200 dark:border-app-color-900">
                  {feature.desc}
                </td>
                <td className="px-6 py-4 border border-app-color-200 dark:border-app-color-900">
                  {feature.estimatedDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
