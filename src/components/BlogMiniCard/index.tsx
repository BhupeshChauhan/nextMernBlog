import React from "react";
import { format, parseISO } from "date-fns";
import { FcLike } from "react-icons/fc";
import Link from "next/link";

const BlogMiniCard = ({ post, index }: any) => {
  const { title, publishedAt, _id } = post;
  const { fullname, profile_img } = post?.author?.personal_info;
  return (
    <Link href={`/blog/single?id=${_id}`} className="flex gap-5 mb-4">
      <h1 className="blog-index">{index < 10 ? "0" + (index + 1) : index}</h1>
      <div>
        <div className="flex gap-2 items-center mb-7">
          <img
            className="w-6 h-6 rounded-full"
            src={profile_img}
            alt={fullname}
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
            {fullname}
          </p>
          <p className="min-w-fit text-xs text-gray-500 dark:text-gray-400">
            {" "}
            {format(parseISO(publishedAt), "MMMM dd, yyyy")}
          </p>
        </div>
        <h1 className="blog-title">{title}</h1>
      </div>
    </Link>
  );
};

export default BlogMiniCard;
