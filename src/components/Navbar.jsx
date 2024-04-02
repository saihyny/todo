import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <div className="flex bg-zinc-400 h-[50px] justify-around ">
      <div className="flex">
        <Link href='/' className="p-2 font-serif  font-bold text-2xl hover:cursor-pointer">TODOS</Link >
      </div>
      <div className=" p-3 ">
        <Link
          href="completed"
          className="p-2 hover:bg-zinc-500 
        hover:rounded-md font-serif font-semibold "
        >
          Completed
        </Link>
        <Link
          href="deleted"
          className="p-2 hover:bg-zinc-500 
        hover:rounded-md font-serif font-semibold"
        >
          Deleted
        </Link>
        <Link
          href="actvity"
          className="p-2 hover:bg-zinc-500 
        hover:rounded-md font-serif font-semibold"
        >
          Your activity
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
