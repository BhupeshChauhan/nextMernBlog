import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }: any) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                className={styles.image}
                height={100}
                width={150}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                className={styles.image}
                height={100}
                width={150}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                className={styles.image}
                height={100}
                width={150}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
