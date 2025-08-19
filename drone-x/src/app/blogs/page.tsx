"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/blogmodels.json";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 py-12 pt-36 text-slate-800">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-slate-900">
        Designed for Simplicity Built for Health.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
        {courseData.posts.map((post, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody
              className="
  relative group/card w-full max-w-md h-[520px] rounded-xl p-6 border flex flex-col mx-auto
  bg-white border-neutral-200 shadow-sm hover:shadow-xl hover:border-rose-200 transition
"
            >
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-slate-900 mb-3 min-h-[56px] flex items-center"
              >
                {post.title}
              </CardItem>

              <CardItem
                as="div"
                translateZ="60"
                className="text-slate-600 text-sm mb-4 min-h-[60px]"
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
                <Link href={`/blogs/${post.slug}`}>
                  <CardItem
                    translateZ="20"
                    as="button"
                    className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
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
