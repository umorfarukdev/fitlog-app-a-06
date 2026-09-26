"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Logo from "./../../../public/logo.png";
import { WorkoutContext } from "@/contexts/WorkoutContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { todaysPlan, saveLater } = useContext(WorkoutContext);
  const pathName = usePathname();
  const links = (
    <>
      <li>
        <Link
          className={`transition duration-200 ${
            pathName === "/workouts"
              ? "text-[#C2F800] bg-[#1A2312] font-semibold px-4 py-2 rounded-full  pb-1"
              : "text-gray-500 hover:text-black"
          }`}
          href="/workouts"
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          className={`transition duration-200 ${
            pathName === "/myplan"
              ? "text-[#C2F800] bg-[#1A2312] font-semibold px-4 py-2 rounded-full  pb-1"
              : "text-gray-500 hover:text-black"
          }`}
          href="/myplan"
        >
          My Plan
        </Link>
      </li>
    </>
  );
  return (
    <nav className="">
      <div className="navbar bg-base-100 container mx-auto border-b border-gray-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="text-xl flex gap-2 items-center font-bold">
            <Image src={Logo} alt="Logo"></Image>
            <h1>FITLOG</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <p className="badge font-bold border-none">
            Plan
            <span className="px-3.5 text-black py-2 bg-[#CCFF00] rounded-full">
              {todaysPlan.length}
            </span>
          </p>
          <p className="">
            Saved{" "}
            <span className="px-3 py-2 border-2 border-gray-200 rounded-full">
              {saveLater.length}
            </span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
