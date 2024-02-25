import React from "react";
import { BentoGrid, BentoGridItem } from "@/ui/bento-grid";
import AnimationWapper from "@/common/PageAnimation";
import Link from "next/link";

export function CustomBentoGrid({ items }: any) {

  return (
    <BentoGrid className="max-w-4xl">
      {items.map((item: any, i: any) => (
        <AnimationWapper transition={{ duration: 1, delay: i * 0.1 }} key={i}>
          <Link href={`blog?category=${item.name}&type=series`}>
          <BentoGridItem
            title={item.name}
            description={item.description}
            header={item.featuredImage}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
            </Link>
        </AnimationWapper>
      ))}
    </BentoGrid>
  );
}
