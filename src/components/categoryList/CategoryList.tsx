/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import { fetchcategories } from "../../../lib/actions/categories.actions";
import { Grid } from "@mui/material";

const CategoryList = async () => {
  const data = await fetchcategories();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="#"
            key={item.id}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Grid container>
              <Grid item xs={5}>
                <img
                  className="object-cover w-full h-24 rounded-t-lg md:w-48 md:rounded-none md:rounded-s-lg"
                  src="/images/products/s11.jpg"
                  alt=""
                  height={"20px"}
                />
              </Grid>
              <Grid item xs={7}>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </Grid>
            </Grid>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
