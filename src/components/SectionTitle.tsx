export default function SectionTitle({
  title,
  id,
}: {
  title: string;
  id: string;
}) {
  return (
    <div
      id={id}
      className="w-screen text-4xl font-bold text-center text-bg-app-color-500 dark:text-app-color-100 my-10"
    >
      {title}
    </div>
  );
}
