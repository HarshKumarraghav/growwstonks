"use client";
import Link from "next/link";
import React from "react";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import MaxWidthWrapper from "../Container/MaxWidthWrapper";
import Image from "next/image";
import MobileNavigation from "./MobileNavigation";
import { Button } from "../ui/button";
import SearchModal from "../Search/SearchModal";

const Header = () => {
  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b  backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="md:px-10 px-2.5">
          <div className="flex h-16 items-center justify-between ">
            <Link
              href="/"
              className="flex z-40 font-semibold items-center gap-2"
            >
              <Image
                width={20}
                height={20}
                src="/logo/stonks.png"
                className="w-10 h-10 rounded-full"
                alt="logo"
              />
              <span>
                Grow<span className="text-primary">w</span> Stonks.
              </span>
            </Link>
            <MobileNavigation />
            <div className="hidden items-center space-x-4 sm:flex">
              <SearchModal />
            </div>
            <div className="hidden sm:block">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Header;
