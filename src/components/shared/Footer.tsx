import Image from "next/image";
import React from "react";
import Logo from "./../../../public/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#151922]">
      <div className="lg:flex justify-between container  mx-auto border-t border-[#d3d3d340] py-10 px-6 lg:grid-cols-2 sm:footer-horizontal footer-center bg-[#232834] text-base-content p-4">
        <div className="flex gap-2 items-center mb-3">
          <Image className="w-5" src={Logo} alt="Logo"></Image>
          <h1 className="font-oswald font-bold">FITLOG</h1>
        </div>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
