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
import Featured from "@/ui/FeaturedPosts";
import { CustomBentoGrid } from "@/components/CustomBentoGrid";
import { StickyScrollReveal } from "@/components/StickyScrollReveal";
import { BackBeanBanner } from "@/components/BackBeanBanner";

export default async function Home({ searchParams }: any) {
  let trandingPosts: any = [];
  let categories: any = [];
  let series: any = [];
  let resources: any = [];
  let seriesTotal: any = [];
  let resourcesTotal: any = [];
  let featuredPost: any = [];
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const category =
    typeof searchParams.category === "string" ? searchParams.category : "";

  await PostAPI.getTrending()
    .then((posts) => {
      trandingPosts = posts;
    })
    .catch((err) => {
      console.log(err.message);
    });

  await CategoriesApi.getAll().then((categoriesData) => {
    // response handling
    categories = categoriesData;
  });

  await CategoriesApi.getAllByType({type: "series", page}).then((seriesData) => {
    // response handling  
    series = seriesData.categories;
    seriesTotal = seriesData.total_length
  });

  await CategoriesApi.getAllByType({type: "resources", page}).then((seriesData) => {
    // response handling  
    resources = seriesData.categories;
    resourcesTotal = seriesData.total_length
  });

  await PostAPI.getAllFeatured()
    .then((blogs) => {
      console.log(blogs)
      featuredPost = blogs;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return (
    <div style={{ width: "100%" }}>
      <AnimationWapper>
        <div className="w-full relative">
            <Featured posts={featuredPost} />
          </div>
          <div className="p-10">
            <BackBeanBanner />
          </div>
        <section className="h-cover flex justify-center gap-10">
          {/* latest blogs */}
          
          <div className="w-full">
            <InpageNavigation
              tabs={["Blog series collection", "Trending Blogs"]}
              defaultHidden={["Trending Blogs"]}
            >
              <>
              <CustomBentoGrid items={series} />
                {seriesTotal > 4 ? (
                  <CustomPagination
                    linkprefix={
                      category.length > 0 ? `?category=${category}` : ""
                    }
                    page={page}
                    total={seriesTotal}
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
              <div>
                <h1 className="font-medium text-xl mb-8">
                  Stories form all interests
                </h1>
                <div className="flex gap-3 flex-wrap">
                  {categories.map((data: any, i: any) => {
                    return (
                      <AnimationWapper
                        transition={{ duration: 1, delay: i * 0.1 }}
                        key={i}
                      >
                        <Link
                          href={`/blog?category=${data.name}`}
                        >
                          <button
                            className={
                              "tag " +
                              (category === data.name
                                ? "bg-black text-white"
                                : " ")
                            }
                          >
                            {data.name}
                          </button>
                        </Link>
                      </AnimationWapper>
                    );
                  })}
                </div>
              </div>
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
          <div>
            <StickyScrollReveal  content={resources} />
          </div>
      </AnimationWapper>
    </div>
  );
}
