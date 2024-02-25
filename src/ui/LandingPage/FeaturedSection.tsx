"use client";
import React from "react";
import { BentoGridItem } from "../bento-grid";
import { FaArrowTrendUp } from "react-icons/fa6";
import CustomCarousel from "@/components/CustomCarousel";
import { motion } from "framer-motion";
import Link from "next/link";

const FeaturedSection = ({ series, posts }: any) => {
  return (
    <section className="bg-white h-[220vh] md:h-[100vh] overflow-none -mt-32">
      <div className="flex flex-col md:flex-row z-10 h-full">
        <div className="flex flex-col w-[100%] md:w-[60%] h-[100%] ">
          <div className="flex flex-col md:w-[100%] h-[40%] justify-center px-10 mt-32">
            <h1 className="text-4xl mt-20 mb-2 font-extrabold">
              Welcome to{" "}
              <span className="text-4xl mt-20 text-green-600 mb-2">
                Codegig,
              </span>{" "}
            </h1>
            <p className="text-lg font-roboto">
              Your gateway to a diverse world of knowledge, inspiration, and
              expertise. Dive into a constellation of thought-provoking blogs,
              each shining a spotlight on a unique aspect of the development
              universe.
            </p>
            <p className="max-md:mt-10 md:mt-auto font-bold text-lg text-darkGrey md:mx-5">
              {"Our Most Viewed Series ->"}
            </p>
          </div>
          <div className="flex max-md:flex-col w-[100%] h-[60%] max-md:mt-10 mb-10 px-8">
          
            <div className="flex w-[100%] md:w-[50%] h-[100%] p-2">
            <Link href={`blog?category=${series[0].name}&type=series`}>
              <BentoGridItem
                title={series[0].name}
                description={series[0].description}
                header={series[0].featuredImage}
                />
            </Link>
            </div>
            <div className="flex w-[100%] md:w-[50%] h-[100%] p-2">
            <Link href={`blog?category=${series[1].name}&type=series`}>

              <BentoGridItem
                title={series[1].name}
                description={series[1].description}
                header={series[1].featuredImage}
                />
                </Link>
            </div>
          </div>
        </div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="lex max-md:flex-col w-[100%] md:w-[40%] h-[100%] md:pt-36 mt-20 shadow-sm"
        >
          <h1 className="text-lg max-md:mx-10 md:mx-5 font-bold text-darkGrey">
            Most Tranding Blog <FaArrowTrendUp />
          </h1>
          <div className="mt-10">
          <CustomCarousel
            itemArray={posts}
            width="30vw"
            height="auto"
            className="hidden md:block"
            />
          <CustomCarousel
            itemArray={posts}
            width="85vw"
            height="auto"
            className="md:hidden"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
