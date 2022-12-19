import Link from "next/link";

export default function Hoverbutton({ href, children, onClick }) {
  return (
    <Link
      href={href !== undefined ? href : "#"}
      key={href}
      onClick={onClick}
      aria-label="Button"
      type="button"
      className="text-center text-sm bg-gray-500 text-white rounded py-1 px-3 hover:bg-gray-200 hover:text-gray-400 transition-all border hover:border-gray-500"
    >
      {children}
    </Link>
  );
}
