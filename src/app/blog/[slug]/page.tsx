import { PostAPI } from "@/apis/PostApi";
import BlockContent from "@/components/BlockContent";
import { Typography } from "@mui/material";
import { format, parseISO } from "date-fns";
import React from "react";

const SingleBLogPage = async ({ searchParams }: any) => {
  const id = searchParams.id;
  let postData: any = {};
  await PostAPI.get(id)
    .then((post) => {
      // response handling
      postData = post;
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <div className="max-w-[900px] center max-lg:px-[5vw]">
      <div className="w-full aspect-video rounded-lg overflow-hidden bg-grey">
        <img src={postData.banner} className="z-20" />
      </div>
      <h1 className="text-4xl font-medium mt-2 leading-tight line-clamp-2">
        {postData.title}
      </h1>
      <p className="text-lg mt-2 leading-tight line-clamp-2">{postData.des}</p>
      <div className="flex gap-2 items-center my-4">
        <img
          className="w-6 h-6 rounded-full"
          src={postData.author.personal_info.profile_img}
          alt={postData.author.personal_info.fullname}
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
          {postData.author.personal_info.fullname}
        </p>
        <p className="min-w-fit text-xs text-gray-500 dark:text-gray-400">
          {" "}
          {format(parseISO(postData.publishedAt), "MMMM dd, yyyy")}
        </p>
      </div>
      <div className="my-12 font-gelasio">
        {postData?.content[0]?.blocks?.map((block: any, i: any) => {
          return (
            <div key={i} className="my-4 md:my-8">
              <BlockContent block={block} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleBLogPage;
