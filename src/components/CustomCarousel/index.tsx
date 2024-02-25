/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import styles from "./CustomCarousel.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import { format, parseISO } from "date-fns";

const CustomCarousel = ({ itemArray, width, height, className }: any) => {
  return (
    <div className={`z-auto ${className}`}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        style={{ width: width, height: height }}
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
        {itemArray?.map((item: any) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                style={{
                  minHeight: "60vh",
                  alignItems: "center",
                }}
              >
                 <Link href={`/blog/single?id=${item._id}`}>
                <h1 className="font-sans font-extrabold text-2xl mb-2 mt-2 text-green-600">{item.title}</h1>

                 
                <div className={styles.textContainer}>
                  <div>
                    <img
                      src={item.banner}
                      alt=""
                      className={styles.textAreaImage}
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <img
                      className="w-6 h-6 aspect-video rounded-full"
                      src={item?.author?.personal_info.profile_img}
                      alt={item?.author?.personal_info.fullname}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                      {item?.author?.personal_info.fullname}
                    </p>
                    <p className="min-w-fit text-xs text-gray-500 dark:text-gray-400">
                      {" "}
                      {format(parseISO(item?.publishedAt), "MMMM dd, yyyy")}
                    </p>
                  </div>
                  <p className="font-roboto font-normal text-md text-darkGrey">{item.des}</p>
                </div>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;
