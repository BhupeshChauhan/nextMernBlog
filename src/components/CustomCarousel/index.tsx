/* eslint-disable @next/next/no-img-element */
import { Button } from "@mui/material";
import React, { useRef } from "react";
import styles from "./CustomCarousel.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";

const CustomCarousel = ({ itemArray }: any) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        style={{ width: "40vw" }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {itemArray.map((item: any) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                style={{
                  padding: "20px",
                  minHeight: "60vh",
                  marginTop: "30px",
                  alignItems: "center",
                }}
              >
                <h1 className={styles.title}>{item.title}</h1>
                <div className={styles.textContainer}>
                  <div>
                    <img
                      src={item.featuredImage}
                      alt=""
                      className={styles.textAreaImage}
                    />
                  </div>
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img
                      className="mr-4 w-10 h-10 rounded-full"
                      src={item?.author?.profilePicture}
                      alt="Jese Leos"
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        className="text-lg font-bold text-gray-900 dark:text-white"
                      >
                        {item?.author?.name}
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item?.author?.bio}
                      </p>
                      {/* <p className="text-sm text-gray-500 dark:text-gray-400"><time>Feb. 8, 2022</time></p> */}
                    </div>
                  </div>
                  <h1 className={styles.postTitle}>{item.description}</h1>
                  <div>
                    <Link href="/contact">
                      <Button
                        variant="contained"
                        style={{ marginRight: "12px" }}
                      >
                        Contact Us
                      </Button>
                    </Link>
                    <Link href={`/post/${item.slug}`}>
                      <Button variant="outlined">Read More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CustomCarousel;
