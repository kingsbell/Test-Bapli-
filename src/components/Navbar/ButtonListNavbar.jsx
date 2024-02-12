"use client";
import ListNavbar from "./ListNavbar";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

const ButtonListNavbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const open = () => {
    setDropdown((open) => !open);
  };

  return (
    <div className="lg:hidden flex items-center">
      <button onClick={open}>{!dropdown ? <List size={32} /> : <X size={32} />}</button>
      {dropdown && (
        <div className="absolute top-16">
          <ListNavbar />
        </div>
      )}
    </div>
  );
};
export default ButtonListNavbar;
