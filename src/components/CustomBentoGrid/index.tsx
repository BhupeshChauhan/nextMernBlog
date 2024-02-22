import React from "react";
import { BentoGrid, BentoGridItem } from "@/ui/bento-grid";
import AnimationWapper from "@/common/PageAnimation";

export function CustomBentoGrid({ items }: any) {

  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item: any, i: any) => (
        <AnimationWapper transition={{ duration: 1, delay: i * 0.1 }} key={i}>
          <BentoGridItem
            title={item.name}
            description={item.description}
            header={item.featuredImage}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        </AnimationWapper>
      ))}
    </BentoGrid>
  );
}
