"use client";
import React from "react";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import courseData from "@/data/blogmodels.json";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useParams } from "next/navigation";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = courseData.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center text-red-500 py-24">Blog not found.</div>
    );
  }

  return (
    <div className="relative z-10 overflow-hidden pt-24 sm:pt-28">
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <div className="mb-10">
            {/* Tag Badge */}
            {post.tags?.[0] && (
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {post.tags[0]}
              </h2>
            )}

            {/* Title */}
            <p className={twMerge(inter.className, "text-3xl mb-4 font-bold")}>
              {post.title}
            </p>

            {/* Author and Date */}
            <div className="text-sm text-gray-400 mb-6">
              By {post.author} • {post.publishedAt}
            </div>

            {/* Thumbnail */}
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt="blog thumbnail"
                height={1000}
                width={1000}
                className="rounded-lg mb-10 object-cover"
              />
            )}

            {/* Content Paragraphs */}
            <div className="text-lg text-neutral-300 leading-relaxed">
              {post.content?.map((para, i) => (
                <p key={i} className="mb-4 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Additional Images (if available) */}
            {Array.isArray(post.images) && post.images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {post.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`blog-img-${i}`}
                    className="rounded-lg object-cover w-full h-64"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </TracingBeam>
    </div>
  );
}
