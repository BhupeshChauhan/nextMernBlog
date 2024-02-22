"use client";
import React from "react";

import Footer from "@/layouts/full/Footer";
import Navbar from "./Navbar";

const FullLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen">
        <div className="w-full">
          <>{children}</>
        </div>
      </main>
    </>
  );
};

export default FullLayout;
