import Link from "next/link";
import React from "react";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import MaxWidthWrapper from "../Container/MaxWidthWrapper";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import MobileNavigation from "./MobileNavigation";

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
              <Input
                className=" relative w-96 pl-10 rounded-2xl"
                placeholder="Search Stock and etf"
              />
              <Search className=" absolute text w-4 h-4" />
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Header;
