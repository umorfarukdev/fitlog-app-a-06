import Image from "next/image";
import React from "react";
import Logo from "./../../../public/logo.png";

const Footer = () => {
  return (
    <footer className="lg:flex justify-between container mx-auto py-10 px-6 lg:grid-cols-2 sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <div className="flex gap-2 items-center mb-3">
        <Image src={Logo} alt="Logo"></Image>
        <h1>FITLOG</h1>
      </div>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
