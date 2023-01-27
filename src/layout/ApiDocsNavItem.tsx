interface Props {
  title: string;
  children?: React.ReactNode[] | React.ReactNode;
}
export default function API_ItemList({ title, children }: Props) {
  return (
    <li className="relative">
      <a
        className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900 dark:text-white"
        href="/"
        aria-current="page"
      >
        <span className="truncate">{title}</span>
      </a>
      {children}
    </li>
  );
}
