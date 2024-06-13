"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="flex  h-[50px] justify-around sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30  border-b border-gray-200  firefox:bg-opacity-90">
      <div className="flex">
        <Link
          href="/"
          className={`p-2 font-serif font-bold text-2xl ${
            isActive("/") ? "font-bold bg-gray-300 rounded-lg" : ""
          }`}
        >
          TODOS
        </Link>
      </div>
      <div className="p-3">
        <Link
          href="/completed"
          className={`p-2 font-serif font-semibold ${
            isActive("/completed") ? "font-bold bg-gray-300 rounded-sm" : ""
          }`}
        >
          Completed
        </Link>
        <Link
          href="/deleted"
          className={`p-2 font-serif font-semibold ${
            isActive("/deleted") ? "font-bold bg-gray-300" : ""
          }`}
        >
          Deleted
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
