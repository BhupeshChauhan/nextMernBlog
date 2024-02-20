import React from "react";
import { format, parseISO } from "date-fns";
import { FcLike } from "react-icons/fc";
import Link from "next/link";

const BlogCard = ({ post }: any) => {
  const {
    title,
    banner,
    des,
    categories,
    activity: { total_likes },
    publishedAt,
    _id,
  } = post;

  const { fullname, profile_img } = post?.author?.personal_info;
  return (
    <Link
      href={`/blog/single?id=${_id}`}
      className="flex gap-8 items-center border-b border-grey pb-5 mb-4"
    >
      <div className="w-full">
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
        <p className="my-3 text-lg font-gelasio leading-7 max-sm:hidden md:max-[1100px]:hidden line-clamp-2">
          {des}
        </p>
        <div className="flex gap-4 mt-7">
          <span className="btn-light py-1 px-4">{categories[0]}</span>
          <span className="ml-3 flex items-center gap-2 text-gray-500">
            <FcLike /> {total_likes}
          </span>
        </div>
      </div>

      <div className="h-28 aspect-square bg-grey">
        <img
          src={banner}
          alt={title}
          className="w-full h-full aspect-square object-cover"
        />
      </div>
    </Link>
  );
};

export default BlogCard;
