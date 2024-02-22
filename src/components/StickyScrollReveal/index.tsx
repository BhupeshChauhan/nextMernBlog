"use client";
import { Tabs } from "@/ui/scroll-tab";
import { StickyScroll } from "@/ui/sticky-scroll-reveal";
import Link from "next/link";
import React from "react";

export function StickyScrollReveal({content}: any) {
  return (
    <div className="h-[20rem] md:h-[40rem] w-[90%] m-auto [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto items-start justify-start my-10 md:mb-40 mb-56 ">
      <Tabs tabs={content} />
    </div>
  );
}
