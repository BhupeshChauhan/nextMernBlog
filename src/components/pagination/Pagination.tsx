"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";
import { Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ page, hasPrev, hasNext }: any) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <MuiPagination count={10} color="primary" />
    </div>
  );
};

export default Pagination;
