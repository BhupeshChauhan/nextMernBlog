import Link from "next/link";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import Logo from "../shared/logo/Logo";
import { useRouter, useSearchParams } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search: any =
    typeof searchParams.get("query") === "string"
      ? searchParams.get("query")
      : "";
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);
  const handleKeyPress = (e: any) => {
    let query = e.target.value;
    if (e.keyCode === 13) {
      if (query.length > 0) {
        router.push(`/search?query=${query}`, { scroll: false });
      } else {
        router.push(`/`, { scroll: false });
      }
    }
  };

  const handleBlur = (e: any) => {
    let query = e.target.value;
    if (!(query.length > 0)) {
      router.push(`/`, { scroll: false });
    }
  };
  return (
    <nav className="navbar">
      <Logo />
      <div
        className={
          "absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " +
          (searchBoxVisibility ? "show" : "hide")
        }
      >
        <input
          type="text"
          placeholder="Search"
          defaultValue={search}
          className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12 placeholder:text-lg"
          onKeyDown={handleKeyPress}
          onBlur={handleBlur}
        />
        <div className="absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
          <GoSearch size={15} />
        </div>
      </div>
      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button
          className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center text-xl"
          onClick={() => setSearchBoxVisibility((prev) => !prev)}
        >
          <GoSearch size={15} />
        </button>
        <Link href="/signin" className="btn-dark py-2">
          Sign In
        </Link>
        <Link href="/signup" className="hidden md:block btn-light py-2">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
