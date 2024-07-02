"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Images/smart lights_logo.svg"
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-around  py-6 items-center border-b border-slate-800 bg-black">
      <div>
        <Image
          src={logo}
          width={200}
          height={200}
          alt="smart light logo"
        />
      </div>

      <div className="hidden lg:block">
        <ul className="text-white text-lg flex lg:gap-8 xl:gap-12 items-baseline cursor-pointer">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#products">Products</Link>
          </li>
          <li>
            <Link href="#ecosystem">Software Services</Link>
          </li>
          <li>
            <Link
              href="/login"
              className="bg-[#3661FF] py-[12px] px-12 rounded"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>

      <div className="lg:hidden relative" ref={menuRef}>
        <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-8 right-0 bg-gray-900 text-white py-2 px-4  cursor-pointer">
            <ul>
              <li>
                <Link href="#home" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#products" onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="#ecosystem" onClick={toggleMenu}>
                  Software Services
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
