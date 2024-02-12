import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="lg:max-w-7xl md:max-w-3xl max-w-xl bg-primary mt-10 mx-auto rounded-lg py-2 text-black flex justify-between shadow-sm">
      <h1 className="px-2">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="px-2 hover:text-blue transition duration-300">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
