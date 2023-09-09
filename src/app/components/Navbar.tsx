"use client";
import Link from "next/link";
import React from "react";

const Navbar = (props: any) => {
  return (
    <div>
      <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900 p-3">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-1 mt-1">
          <a href="/" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Dunder_Mifflin%2C_Inc.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              The Office Quiz
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
