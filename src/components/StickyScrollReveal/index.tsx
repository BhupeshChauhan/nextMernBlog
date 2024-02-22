"use client";
import { Tabs } from "@/ui/scroll-tab";
import { StickyScroll } from "@/ui/sticky-scroll-reveal";
import React from "react";

export function StickyScrollReveal({content}: any) {
  return (
    <div className="h-[20rem] md:h-[40rem] w-[90%] m-auto [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto items-start justify-start my-10 mb-40">
      <Tabs tabs={content} />
    </div>
  );
}
