"use client";
import React from "react";
import styles from "./featured.module.css";
import CustomCarousel from "@/components/CustomCarousel";
import { BentoGridItem } from "../bento-grid";
import { FaArrowTrendUp } from "react-icons/fa6";

const Featured = ({ posts, series }: any) => {
  return (
    <>
      <div className="hidden lg:block">
        <div className={styles.container}>
          <div className={styles.imageBackground}></div>
          <div className={styles.imageBackgroundBlur}></div>
          <div className="flex h-[100vh] w-[100vw] m-10 -mt-32">
            <div className="flex flex-col md:w-[60%] h-[100%] ">
              <div className="flex flex-col md:w-[100%] h-[40%] justify-center px-10 mt-32">
                <h1 className="text-4xl mt-20 mb-2">
                  Welcome to{" "}
                  <span className="text-4xl mt-20 text-blue-500 mb-2">
                    Codegig,
                  </span>{" "}
                </h1>
                <p className="text-lg">
                  your gateway to a diverse world of knowledge, inspiration, and
                  expertise. Dive into a constellation of thought-provoking
                  blogs, each shining a spotlight on a unique aspect of the
                  development universe.
                </p>
                <p className="mt-auto text-lg text-blue-500">
                  {"Our Most Viewed Series ->"}
                </p>
              </div>
              <div className="flex md:w-[100%] h-[60%] mb-10 px-8">
                <div className="flex md:w-[50%] h-[100%] p-2">
                  <BentoGridItem
                    title={series[0].name}
                    description={series[0].description}
                    header={series[0].featuredImage}
                  />
                </div>
                <div className="flex md:w-[50%] h-[100%] p-2">
                  <BentoGridItem
                    title={series[1].name}
                    description={series[1].description}
                    header={series[1].featuredImage}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:w-[40%] h-[100%] pt-36 mx-10 mt-20 w-full">
              <h1 className="font-medium text-xl mx-10 text-blue-500">
                Most Tranding Blog <FaArrowTrendUp />
              </h1>
              <CustomCarousel itemArray={posts} width="35vw" height="auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex h-full pb-12">
        <div className={styles.imageBackground}></div>
        <div className={styles.imageBackgroundBlur}></div>
        <div className={styles.FeaturedTextContainermd}>
          <div className={styles.postmd}>
            <CustomCarousel itemArray={posts} width="auto" height="auto" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
