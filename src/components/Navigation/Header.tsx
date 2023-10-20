import Link from "next/link";
import React from "react";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import MaxWidthWrapper from "../Container/MaxWidthWrapper";

const Header = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b  backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="md:px-10 px-2.5">
          <div className="flex h-14 items-center justify-between border-b ">
            <Link href="/" className="flex z-40 font-semibold">
              <span>Groww Stonks.</span>
            </Link>

            <div className=" items-center space-x-4 sm:flex">hello world</div>
            <ThemeSwitcher />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Header;
