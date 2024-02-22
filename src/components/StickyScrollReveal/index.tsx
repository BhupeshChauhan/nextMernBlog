"use client";
import { StickyScroll } from "@/ui/sticky-scroll-reveal";
import React from "react";

export function StickyScrollReveal({content}: any) {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
