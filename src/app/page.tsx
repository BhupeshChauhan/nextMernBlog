import React from "react";
import AnimationWapper from "@/common/PageAnimation";
import InpageNavigation from "@/components/InpageNavigation";
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
import Footer from "@/layouts/full/Footer";
import CustomCarousel from "@/components/CustomCarousel";
import { BentoGridItem } from "@/ui/bento-grid";
import FeaturedSection from "@/ui/LandingPage/FeaturedSection";
import SubscriptionSection from "@/ui/LandingPage/SubscriptionSection";
import SeriesSection from "@/ui/LandingPage/SeriesSection";
import ResourcesSection from "@/ui/LandingPage/ResourcesSection";

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

  await CategoriesApi.getAllByType({ type: "blog", page }).then(
    (seriesData) => {
      // response handling
      categories = seriesData.categories;
      console.log(seriesData);
    }
  );

  await CategoriesApi.getAllByType({ type: "series", page }).then(
    (seriesData) => {
      // response handling
      series = seriesData.categories;
      seriesTotal = seriesData.total_length;
    }
  );

  await CategoriesApi.getAllByType({ type: "resorces", page }).then(
    (seriesData) => {
      // response handling
      resources = seriesData.categories;
      console.log(seriesData);
      resourcesTotal = seriesData.total_length;
    }
  );

  await PostAPI.getAllFeatured()
    .then((blogs) => {
      featuredPost = blogs;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return (
    <AnimationWapper>
      <FeaturedSection posts={featuredPost} series={series} />
      <SubscriptionSection />
      <SeriesSection
        series={series}
        seriesTotal={seriesTotal}
        category={category}
        page={page}
        trandingPosts={trandingPosts}
        categories={categories}
      />
      <ResourcesSection resources={resources}/>
    </AnimationWapper>
  );
}
