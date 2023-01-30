export default function SectionTitle({
  title,
  id,
  dataGhost,
}: {
  title: string;
  id: string;
  dataGhost?: string;
}) {
  return (
    <div
      id={id}
      data-ghost={dataGhost}
      className="w-screen text-4xl font-bold text-center relative text-app-color-500 after:content-[attr(data-ghost)] after:absolute after:left-1/2 after:top-10 after:-translate-x-1/2 after:text-[200px]
      after:text-app-color-900 dark:after:text-app-color-100 after:opacity-2 dark:after:opacity-1 dark:text-app-color-100 my-20"
    >
      {title}
    </div>
  );
}
