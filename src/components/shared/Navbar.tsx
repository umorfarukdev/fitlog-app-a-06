import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./../../../public/logo.png"

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/workouts">Workouts</Link>
      </li>
      <li>
        <Link href="/myplan">My Plan</Link>
      </li>
    </>
  );
  return (
    <nav>
      <div className="navbar bg-base-100 container mx-auto">
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
          <p className="badge border-none">Plan</p>
          <p className="badge badge-outline">Saved</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
