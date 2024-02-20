import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { fetchposts } from "../../../lib/actions/posts.actions";
import { Grid } from "@mui/material";

// const getData = async (page, cat) => {
//   const res = await fetch(
//     `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CardList = async ({ page, cat }) => {
  const posts = await fetchposts();
  const count = 0

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Grid container>
          {posts?.map((post) => (
            <Grid key={post.id} item xs={12} sm={6} md={6}>
              <Card post={post} key={post.id} />
            </Grid>
          ))}
        </Grid>
      </div>
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
    </div>
  );
};

export default CardList;