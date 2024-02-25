import AnimationWapper from '@/common/PageAnimation';
import BlogMiniCard from '@/components/BlogMiniCard';
import { CustomBentoGrid } from '@/components/CustomBentoGrid';
import CustomPagination from '@/components/CustomPagination';
import InpageNavigation from '@/components/InpageNavigation';
import Link from 'next/link';
import React from 'react'
import { FaArrowTrendUp } from 'react-icons/fa6';

const SeriesSection = ({series, seriesTotal, category, page, trandingPosts, categories}: any) => {
  return (
    <section>
    <div className="snap-start snap-always h-cover flex justify-center mx-10 mt-20">
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
                        <Link href={`/blog?category=${data.name}&type=blog`}>
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
        </div>
        </section>
  )
}

export default SeriesSection