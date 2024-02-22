"use client";
import React from "react";
import styles from "./featured.module.css";
import CustomCarousel from "@/components/CustomCarousel";

const Featured = ({ posts }: any) => {
  return (
    <>
      <div className="hidden lg:block">
        <div className={styles.container}>
          <div className={styles.imageBackground}></div>
          <div className={styles.imageBackgroundBlur}></div>
          <div className="z-10">
          <div className={styles.FeatureWapper}>
            <div className={styles.FeaturedTextContainer}>
              <div className={styles.post}>
                <CustomCarousel itemArray={posts} width="45vw" height="auto" />
              </div>
            </div>
            <div className={styles.FeaturedImgContainer} />
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
