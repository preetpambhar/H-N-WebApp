"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/blogmodels.json";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        Designed for Simplicity Built for Health.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
        {courseData.posts.map((post, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-md h-[520px] rounded-xl p-6 border flex flex-col mx-auto">
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-600 dark:text-white mb-3 min-h-[56px] flex items-center"
              >
                {post.title}
              </CardItem>

              <CardItem
                as="div"
                translateZ="60"
                className="text-neutral-500 text-sm dark:text-neutral-300 mb-4 min-h-[60px]"
              >
                <p className="leading-relaxed">
                  {post.excerpt.length > 120
                    ? post.excerpt.substring(0, 120) + "..."
                    : post.excerpt}
                </p>
              </CardItem>

              <CardItem translateZ="100" className="w-full mb-4">
                <Image
                  src={post.thumbnail}
                  width={400}
                  height={240}
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={post.title}
                />
              </CardItem>

              <div className="flex justify-between items-center mt-auto">
                {/* <CardItem
                  translateZ={20}
                  as="a"
                  href="#"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:underline"
                >
                  Learn More →
                </CardItem> */}
                <Link href={`/blogs/${post.slug}`}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    href="#"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    Learn More
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default page;
