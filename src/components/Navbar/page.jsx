import Link from "next/link";
import ListNavbar from "./ListNavbar";
import ButtonListNavbar from "./ButtonListNavbar";
import SeacrhInput from "./SearchInput";

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="py-2 px-4 flex justify-between">
        <ButtonListNavbar />
        <Link href="/" className="flex items-center">
          <p className="font-bold md:text-2xl text-md text-black">Test Berita (Bapli)</p>
        </Link>
        <div className="lg:flex lg:items-center hidden">
          <ListNavbar linkHref="/beritaTerbaruDatas" linkTitle="Berita Terbaru" />
          <ListNavbar linkHref="/beritaTerpopulerDatas" linkTitle="Berita Terpopuler" />
        </div>
        <SeacrhInput />
      </div>
    </nav>
  );
};
export default Navbar;
