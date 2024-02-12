"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const SeacrhInput = () => {
  const route = useRouter();
  const searchRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    if (keyword) {
      route.push(`/search/${keyword}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-1.5 left-1">
        <button className="" onClick={handleSearch}>
          <MagnifyingGlass size={23} />
        </button>
      </div>
      <input className="p-2 pl-7 rounded-md md:w-44 w-36 text-xs placeholder:md:text-xs placeholder:text-10px border border-black" placeholder="Cari Artikel atau Berita..." ref={searchRef} onKeyPress={handleKeyPress} />
    </div>
  );
};
export default SeacrhInput;
