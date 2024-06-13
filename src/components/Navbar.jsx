"use client";
import React, { useState } from "react";
import Link from "next/link";
function Navbar() {
  const [activeLink, handleLinkClick] = useState("/");
  return (
    <div className="flex bg-zinc-400 h-[50px] justify-around">
      <div className="flex">
        <Link
          href="/"
          
          className={`p-2 font-serif font-bold text-2xl ${
            activeLink === "/" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("/")}
        >
          TODOS
        </Link>
      </div>
      <div className="p-3">
        <Link
          href="/completed"
          
          className={`p-2 font-serif font-semibold ${
            activeLink === "/completed" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("/completed")}
        >
          Completed
        </Link>
        <Link
          href="/deleted"
          className={`p-2 font-serif font-semibold ${
            activeLink === "/deleted" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("/deleted")}
        >
          deleted
        </Link>
       
      </div>
    </div>
  );
}

export default Navbar;
