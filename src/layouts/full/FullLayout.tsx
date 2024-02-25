"use client";
import React from "react";

import Footer from "@/layouts/full/Footer";
import Navbar from "./Navbar";

const FullLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex h-full max-w-[1400px] mx-auto ">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FullLayout;
