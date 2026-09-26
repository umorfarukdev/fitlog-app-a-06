"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Logo from "./../../../public/logo.png";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const { todaysPlan, saveLater } = useContext(WorkoutContext);
  const pathName = usePathname();
  const links = (
    <>
      <li>
        <Link
          className={`transition duration-200 ${
            pathName === "/"
              ? "text-[#C2F800] bg-[#1A2312] font-semibold px-4 py-2 rounded-full  pb-1"
              : "text-gray-500 hover:text-black"
          }`}
          href="/"
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          className={`transition duration-200 ${
            pathName === "/my-plan"
              ? "text-[#C2F800] bg-[#1A2312] font-semibold px-4 py-2 rounded-full  pb-1"
              : "text-gray-500 hover:text-black"
          }`}
          href="/my-plan"
        >
          My Plan
        </Link>
      </li>
    </>
  );
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#151922]">
      <div className="navbar bg-base-100 container mx-auto border-b border-[#d3d3d340]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <MenuIcon />
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="text-xl flex gap-2 items-center font-bold">
            <Image className="w-6" src={Logo} alt="Logo"></Image>
            <h1>FITLOG</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link href="/my-plan" className="badge font-bold border-none">
            Plan
            <span className="px-3.5 text-black py-2 bg-[#CCFF00] rounded-full">
              {todaysPlan.length}
            </span>
          </Link>
          <Link href="/my-plan" className="">
            Saved{" "}
            <span className="px-3 py-2 border-2 border-gray-200 rounded-full">
              {saveLater.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
