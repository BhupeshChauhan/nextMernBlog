"use client";
import React, { useEffect, useRef, useState } from "react";

export let activeTabLineRef: any;
export let activeTabRef: any;

const InpageNavigation = ({
  tabs,
  defaultActiveTab = 0,
  defaultHidden = [],
  children,
}: any) => {
  activeTabLineRef = useRef<any>();
  const [activeTabIndex, setActiveTabIndex] = useState(defaultActiveTab);
  activeTabRef = useRef<any>();

  const handleTabChange = (btn: any, newValue: number) => {
    setActiveTabIndex(newValue);
    let { offsetWidth, offsetLeft } = btn;

    activeTabLineRef.current.style.width = offsetWidth + "px";
    activeTabLineRef.current.style.left = offsetLeft + "px";
  };

  useEffect(() => {
    handleTabChange(activeTabRef.current, defaultActiveTab);
  }, []);

  return (
    <>
      <div className="relative mb-8 bg-white border-b border-grey flex flex-nowrap overflow-x-auto">
        {tabs.map((tab: any, i: any) => {
          return (
            <button
              key={i}
              ref={i === defaultActiveTab ? activeTabRef : null}
              className={
                "px-4 py-2 text-sm font-medium capitalize transition-colors duration-150 bg-transparent border border-transparent rounded-l-lg md:w-auto md:rounded-l-none md:rounded-r-lg md:border-r-0 md:border-l-2 md:border-transparent " +
                (activeTabIndex === i
                  ? "text-black"
                  : "text-darkGrey " +
                    (defaultHidden.includes(tab) ? "md:hidden" : " "))
              }
              onClick={(event) => handleTabChange(event.target, i)}
            >
              {tab}
            </button>
          );
        })}

        <hr ref={activeTabLineRef} className="absolute bottom-0 duration-300" />
      </div>
      {Array.isArray(children) ? children[activeTabIndex] : children}
    </>
  );
};

export default InpageNavigation;
