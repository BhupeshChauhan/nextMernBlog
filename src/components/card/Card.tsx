"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@mui/material";
import styles from "./card.module.css";

const Card = ({ key, post }: any) => {
  if (post.id > 6) {
    return null;
  }
  return (
    <div className={styles.container} key={key}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={post?.featuredImage} alt="" />
        </a>
        <div className="p-5">
          <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
            <img
              className="mr-4 w-10 h-10 rounded-full"
              src={post?.author?.profilePicture}
              alt="Jese Leos"
            />
            <div>
              <a
                href="#"
                rel="author"
                className="text-md font-bold text-gray-900 dark:text-white"
              >
                {post?.author?.name}
              </a>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {post?.author?.bio}
              </p>
              {/* <p className="text-sm text-gray-500 dark:text-gray-400"><time>Feb. 8, 2022</time></p> */}
            </div>
          </div>
          <a href="#">
            <h5 className="mt-2 mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post?.title}
            </h5>
          </a>
          <p className="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">
            {post?.description}
          </p>
          <Button variant="outlined">Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
