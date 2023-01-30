import { AiFillBug } from "react-icons/ai";

const updates = [
  {
    date: "Released on January 13th, 2022",
    title: "Realse Date",
    label: "Recent",
    blockIcon: (
      <svg
        aria-hidden="true"
        className="w-3 h-3 text-app-color-200 dark:text-app-color-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
    updateDetails: (
      <>
        <p className="text-base font-normal text-app-color-700 dark:text-app-color-200">
          Get started with dozens of web components and interactive elements
          built on top of Tailwind CSS.
        </p>
        <a
          href="#"
          className="mt-3 inline-flex items-center px-4 py-2 text-sm font-medium text-app-color-100 bg-app-color-500 border border-gray-200 rounded-lg hover:bg-app-color-500 transitio-all duration-200 hover:text-app-color-300 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-app-color-200 dark:bg-opacity-5 dark:hover:text-app-color-200"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
              clip-rule="evenodd"
            ></path>
          </svg>{" "}
          Download ZIP
        </a>
      </>
    ),
  },
  {
    date: "",
    title: "new commit",
    updateDetails: (
      <p className="text-base font-normal text-app-color-700 dark:text-app-color-200">
        Get started with dozens of web components and interactive elements built
        on top of Tailwind CSS.
      </p>
    ),
    blockIcon: (
      <svg
        aria-hidden="true"
        className="w-3 h-3 text-app-color-200 dark:text-app-color-200"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    date: "Fri, 21 May 2015",
    title: "new commit",
    label: "",
    blockIcon: (
      <svg
        aria-hidden="true"
        className="w-3 h-3 text-app-color-200 dark:text-app-color-200"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
    updateDetails: (
      <p className="font-normal text-app-color-700 dark:text-app-color-200">
        Get started with dozens of web components and interactive elements built
        on top of Tailwind CSS.
      </p>
    ),
  },
];

// {
//   title,
//   updateDetails,
//   date,
//   label,
// }: {
//   label: string;
//   date: string;
//   title: string;
//   updateDetails: React.ReactNode[] | React.ReactNode;
//   // BlockIcon: any;
// }

const UpdateBlock = ({ ...props }) => {
  return (
    <>
      <li className="mb-12 ml-8 group">
        <span className="absolute flex items-center justify-center w-6 mt-1 h-6 bg-app-color-500 rounded-full -left-3 ring-8 group-hover:ring-x ring-app-color-200 dark:ring-opacity-30 dark:bg-app-color-500 dark:bg-opacity-5 transition-all duration-200">
          {props.blockIcon}
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-app-color-800 dark:text-white">
          {props.title}
          {props.label ? (
            <span className="bg-app-color-500 text-app-color-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-app-color-500 dark:text-app-color-200 ml-3 dark:bg-opacity-20">
              {props.label}
            </span>
          ) : null}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-app-color-700 text-opacity-60 dark:text-app-color-200 dark:text-opacity-60">
          {props.date}{" "}
        </time>
        <div className="font-normal text-app-color-700 dark:text-app-color-200">
          {props.updateDetails}{" "}
        </div>
      </li>
    </>
  );
};

export default function PageUpdates() {
  return (
    <>
      <div className="w-2/3 mx-auto">
        <h1 className="text-4xl font-bold text-app-color-800 dark:text-app-color-200 mb-4 mt-10">
          Updates...
        </h1>
        <p className=" text-app-color-800 dark:text-app-color-200 mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          consequuntur pariatur quam minus doloremque vitae temporibus ipsum
          quae sint maiores! Quaerat, saepe a repellendus distinctio
          reprehenderit quia itaque non sed odio, eius,
        </p>
        <ol className="relative border-l border-app-color-500 dark:border-opacity-40">
          {updates.map((update) => (
            <UpdateBlock {...update} />
          ))}
        </ol>
      </div>
    </>
  );
}
