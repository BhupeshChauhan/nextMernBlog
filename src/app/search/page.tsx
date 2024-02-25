import React from "react";
import AnimationWapper from "@/common/PageAnimation";
import InpageNavigation from "@/components/InpageNavigation";
import BlogCard from "@/components/BlogCard";
import BlogMiniCard from "@/components/BlogMiniCard";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PostAPI } from "@/apis/PostApi";
import { CategoriesApi } from "@/apis/CategoriesApi";
import Link from "next/link";
import CustomPagination from "@/components/CustomPagination";

export default async function SearchPage({ searchParams }: any) {
  let queryPosts: any = [];
  let trandingPosts: any = [];
  let queryPostsTotal: any = [];

  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const query =
    typeof searchParams.query === "string" ? searchParams.query : "";

  await PostAPI.getTrending()
    .then((posts) => {
      trandingPosts = posts;
    })
    .catch((err) => {
      console.log(err.message);
    });

  await PostAPI.searchByQuery({ query, page })
    .then((posts: any) => {
      queryPosts = posts.blogs;
      queryPostsTotal = posts.total_length;
    })
    .catch((err: any) => {
      console.log(err.message);
    });

  return (
    <div style={{ width: "100%" }}>
      <AnimationWapper>
        <section className="h-cover flex justify-center gap-10 container mt-10">
          {/* latest blogs */}
          <div className="w-full">
            <InpageNavigation
              tabs={[`Search results for ${query}`, "Trending Blogs"]}
              defaultHidden={["Trending Blogs"]}
            >
              <>
                {queryPosts.map((post: any, i: any) => {
                  return (
                    <AnimationWapper
                      transition={{ duration: 1, delay: i * 0.1 }}
                      key={i}
                    >
                      <BlogCard post={post} />
                    </AnimationWapper>
                  );
                })}
                {queryPostsTotal > 5 ? (
                  <CustomPagination
                    linkprefix={query.length > 0 ? `?query=${query}` : ""}
                    page={page}
                    total={queryPostsTotal}
                  />
                ) : (
                  <></>
                )}
              </>
              {trandingPosts.map((post: any, i: any) => {
                return (
                  <AnimationWapper
                    transition={{ duration: 1, delay: i * 0.1 }}
                    key={i}
                  >
                    <BlogMiniCard post={post} index={i} />
                  </AnimationWapper>
                );
              })}
            </InpageNavigation>
          </div>

          {/* filters and trending blogs */}
          <div className="m-w-[40%] lg:min-w-[400px] max-w-min border-1 border-grey pl-8 pt-3 max-md:hidden">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h1 className="font-medium text-xl mb-8">
                  Tranding <FaArrowTrendUp />
                </h1>
                {trandingPosts.map((post: any, i: any) => {
                  return (
                    <AnimationWapper
                      transition={{ duration: 1, delay: i * 0.1 }}
                      key={i}
                    >
                      <BlogMiniCard post={post} index={i} />
                    </AnimationWapper>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimationWapper>
    </div>
  );
}
