export default function TitlePage({
  title,
  desc,
  highlighted = "",
}: {
  title: React.ReactNode;
  desc: string;
  highlighted?: string;
}) {
  return (
    <>
      <div className="container px-5 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-app-color-700 dark:text-app-color-50 mb-4 capitalize">
            <span className="text-app-color-500 dark:text-app-color-600 text-4xl font-bold">
              {highlighted}
            </span>{" "}
            {title}
          </h1>
          <p className="text-app-color-700 dark:text-app-color-200 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
}
