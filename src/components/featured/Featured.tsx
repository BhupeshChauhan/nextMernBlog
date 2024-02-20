"use client";
import React, { useEffect, useState } from "react";
import styles from "./featured.module.css";
import CustomCarousel from "../CustomCarousel";
import { fetchPostsFeaturedHome } from "../../../lib/actions/posts.actions";
import { usePathname } from "next/navigation";

const FeaturedArrays = [
  {
    title: "Hey, lama dev here! Discover my stories and creative ideas.",
    description:
      "Lorem ipsum dolor sit amet alim consectetur adipisicing elit. Lorem ipsum dolor sit amet alim consectetur adipisicing elit.Lorem ipsum dolor sit amet alim consectetur adipisicing elit.Lorem ipsum dolor sit amet alim consectetur adipisicing elit.",
    img: "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hey, lama dev here! ",
    description:
      "Lorem ipsum dolor sit amet alim consectetur adipisicing elit. Lorem ipsum dolor sit amet alim consectetur adipisicing elit.Lorem ipsum dolor sit amet alim consectetur adipisicing elit.Lorem ipsum dolor sit amet alim consectetur adipisicing elit.",
    img: "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const Featured = () => {
  const [Posts, setPosts] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    async function ApiCall() {
      await fetchPostsFeaturedHome().then((res) => {
        setPosts(res);
      });
    }
    ApiCall();
  }, [pathname]);
  return (
    <div className={styles.container}>
      <div className={styles.imageBackground}></div>
      <div className={styles.imageBackgroundBlur}></div>
      <div className={styles.FeaturedTextContainer}>
        <div className={styles.post}>
          <CustomCarousel itemArray={Posts} />
        </div>
      </div>
      <div className={styles.FeaturedImgContainer} />
    </div>
  );
};

export default Featured;
