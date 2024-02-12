import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-5 bg-primary grid grid-cols-3">
      <div className="px-2 py-4 flex items-center">
        <Link href="/">
          <p className="font-bold md:text-2xl text-md text-black">Test Berita (Bapli)</p>
        </Link>
      </div>
      <div className="px-2 py-4 col-span-2 flex items-center">
        <p className="md:text-sm text-xs font-medium text-black">© 2023 Soleh Wahyu Pratama | Test Junior Developer</p>
      </div>
    </div>
  );
};
export default Footer;
