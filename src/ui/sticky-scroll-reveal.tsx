"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

export const StickyScroll = ({
  content,
}: {
  content: {
    name: string;
    description: string;
    featuredImage: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  return (
    <motion.div
      className="h-[100vh] overflow-y-auto no-scrollbar flex justify-center relative space-x-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          <motion.div
            animate={{
              background: `url(${content[activeCard].featuredImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="md:hidden z-20 h-[50vw] w-full rounded-md bg-white sticky top-10 overflow-hidden"
          ></motion.div>
          {content.map((item, index) => (
            <div key={item.name + index} className="p-10 h-full md:h-[50rem] shadow-sm">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0,
                }}
                className="text-2xl font-bold"
              >
                {item.name}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0,
                }}
                className="text-kg text-darkGrey mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: `url(${content[activeCard].featuredImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hidden lg:block h-[30vw] w-[45vw] rounded-md bg-white sticky top-10 overflow-hidden"
      ></motion.div>
    </motion.div>
  );
};
