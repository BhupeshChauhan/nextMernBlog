"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Tab = {
  name: string;
  value: string;
  content?: string | React.ReactNode | any;
  featuredImage: any;
  description: any
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  const [hovering, setHovering] = useState(true);

  const handleTabChange = (btn: any, newValue: number) => {
    moveSelectedTabToTop(newValue);
    setActiveIdx(newValue);
  };


  return (
    <>
      <div
        className={cn(
          "relative mb-8 bg-white border-b border-grey flex flex-nowrap overflow-x-auto",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.name}
            onClick={(event) => handleTabChange(event.target, idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(true)}
            className={cn(
              "px-4 py-2 text-sm font-medium capitalize transition-colors duration-150 bg-transparent border border-transparent rounded-l-lg md:w-auto md:rounded-l-none md:rounded-r-lg md:border-r-0 md:border-l-2 md:border-transparent " +
                (activeIdx === idx ? "text-black" : "text-darkGrey "),
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn("absolute inset-0 ", activeTabClassName)}
              />
            )}

            <span className={`relative block text-black dark:text-white`}>
              {tab.name.split(" ")[0]}
            </span>
            <hr className={`w-full px-10 ` + (activeIdx === idx ? 'block' : "hidden")} />
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("md:mt-16 mt-24", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: any;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          <div className="w-full overflow-hidden relative h-[40vh] md:h-[60vh] rounded-2xl p-10 text-xl md:text-4xl text-white bg-black">
            <h4 className="text-xl">{tab.name}</h4>
            <p className="text-sm mt-2 hidden md:block">{tab.description}</p>
            <img
              src={tab.featuredImage}
              alt="dummy image"
              width="1000"
              height="1000"
              className="object-cover object-left-top h-[60%]  md:h-[90%] absolute bottom-10 md:-bottom-32 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
