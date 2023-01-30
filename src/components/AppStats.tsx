const stats = [
  {
    figure: "86K",
    title: "Downloads",
    desc: "Three movie stars, Chloe, Lexa, and Jon, are filming a movie in the Amazon. They’re very famous and very high-maintenance effort.",
    icon: (
      <svg
        className="text-app-color-300 w-7 h-7"
        stroke="currentColor"
        viewBox="0 0 52 52"
      >
        <polygon
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          points="29 13 14 29 25 29 23 39 38 23 27 23"
        />
      </svg>
    ),
  },
  {
    figure: "10K",
    title: "Subscribers",
    desc: "Three movie stars, Chloe, Lexa, and Jon, are filming a movie in the Amazon. They’re very famous and very high-maintenance effort.",
    icon: (
      <svg
        className="text-app-color-300 w-7 h-7"
        stroke="currentColor"
        viewBox="0 0 52 52"
      >
        <polygon
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          points="29 13 14 29 25 29 23 39 38 23 27 23"
        />
      </svg>
    ),
  },
  {
    figure: "52M",
    title: "Cookies",
    desc: "Three movie stars, Chloe, Lexa, and Jon, are filming a movie in the Amazon. They’re very famous and very high-maintenance effort.",
    icon: (
      <svg
        className="text-app-color-300 w-7 h-7"
        stroke="currentColor"
        viewBox="0 0 52 52"
      >
        <polygon
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          points="29 13 14 29 25 29 23 39 38 23 27 23"
        />
      </svg>
    ),
  },
];

const StatBlock = ({
  figure,
  title,
  desc,
  icon,
}: {
  figure: string;
  title: string;
  desc: string;
  icon?: any;
}) => {
  return (
    <>
      <div>
        <div className="flex">
          <h6 className="mr-2 text-4xl font-bold md:text-5xl text-app-color-600 dark:text-app-color-100">
            {figure}
          </h6>
          <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
            {icon}
          </div>
        </div>
        <p className="mb-2 font-bold md:text-lg dark:text-app-color-200 text-app-color-500">
          {title}
        </p>
        <p className="dark:text-app-color-200 text-app-color-700">{desc} </p>
      </div>
    </>
  );
};

export default function AppStats() {
  return (
    <div className="px-4  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatBlock
            key={stat.title}
            figure={stat.figure}
            title={stat.title}
            desc={stat.desc}
          />
        ))}
      </div>
    </div>
  );
}
