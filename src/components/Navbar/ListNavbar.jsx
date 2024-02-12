import Link from "next/link";

const ListNavbar = ({ linkHref, linkTitle }) => {
  return (
    <div className="flex items-center relative">
      {/* Device Large */}
      <div className="lg:flex lg:gap-4 hidden ">
        {linkHref && linkTitle ? (
          <Link href={linkHref} className="px-2 hover:text-blue group transition duration-300">
            {linkTitle}
          </Link>
        ) : null}
      </div>

      {/* Device Medium to Small */}
      <div className="lg:hidden block w-60 h-20 bg-primary rounded-md">
        <ul className="p-2 flex flex-col gap-2">
          <li>
            <Link href="/beritaTerbaruDatas" className="hover:text-blue text-black transition duration-300">
              Berita Terbaru
            </Link>
          </li>
          <li className="">
            <Link href="/beritaTerpopulerDatas" className="hover:text-blue text-black transition duration-300">
              Berita Terpopuler
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ListNavbar;
