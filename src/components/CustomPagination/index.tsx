import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const CustomPagination = ({ page, total, limit = 5, linkprefix }: any) => {
  const totalPages = total > 5 ? Math.ceil(total / limit) : 1;
  return (
    <ul className="list-style-none flex items-center">
      {page === 1 ? (
        <></>
      ) : (
        <li className="list-none ">
          <Link
            className="relative block rounded-full bg-transparent px-2 py-1 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            href={
              linkprefix.length > 0
                ? `${linkprefix}&page=${page + 1}`
                : `?page=${page + 1}`
            }
          >
            <ArrowBackIcon />
          </Link>
        </li>
      )}
      {[...Array(totalPages)].map((e, i) => {
        if (page === i + 1) {
          return (
            <li className="list-none " aria-current="page" key={i}>
              <Link
                className={
                  "relative block rounded-full bg-primary-100 px-5 py-3 text-lg font-medium text-primary-700 transition-all duration-300 bg-grey "
                }
                href={
                  linkprefix.length > 0
                    ? `${linkprefix}&page=${i + 1}`
                    : `?page=${i + 1}`
                }
              >
                {i + 1}
                <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                  (current)
                </span>
              </Link>
            </li>
          );
        } else {
          return (
            <li className="list-none " key={i}>
              <Link
                className="relative block rounded-full bg-transparent px-5 py-3 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                href={`?page=${i + 1}`}
              >
                {i + 1}
              </Link>
            </li>
          );
        }
      })}
      {page === total ? (
        <></>
      ) : (
        <li className="list-none ">
          <Link
            className="relative block rounded-full bg-transparent px-2 py-1 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            href={
              linkprefix.length > 0
                ? `${linkprefix}&page=${page - 1}`
                : `?page=${page - 1}`
            }
          >
            <ArrowForwardIcon />
          </Link>
        </li>
      )}
    </ul>
  );
};

export default CustomPagination;
