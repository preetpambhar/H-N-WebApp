"use client";
import React from "react";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import courseData from "@/data/blogmodels.json";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { useParams } from "next/navigation";

export const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = courseData.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-rose-50 via-white to-rose-50">
        <p className="text-rose-600">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white py-12 pt-36 text-slate-800">
      {/* TracingBeam animation preserved */}
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          <div className="mb-10">
            {/* Tag Badge (light, brand red accent) */}
            {post.tags?.[0] && (
              <h2
                className="rounded-full text-sm w-fit px-4 py-1 mb-4
                             bg-[#D40000]/10 text-[#D40000] border border-[#D40000]/20"
              >
                {post.tags[0]}
              </h2>
            )}

            {/* Title */}
            <p
              className={twMerge(
                inter.className,
                "text-3xl mb-4 font-bold text-slate-900"
              )}
            >
              {post.title}
            </p>

            {/* Author and Date */}
            <div className="text-sm text-slate-500 mb-6">
              By {post.author} • {post.publishedAt}
            </div>

            {/* Thumbnail */}
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt="blog thumbnail"
                height={1000}
                width={1000}
                className="rounded-xl mb-10 object-cover w-full shadow-sm border border-neutral-200"
              />
            )}

            {/* Content Paragraphs */}
            <div className="text-lg text-slate-700 leading-relaxed">
              {post.content?.map((para, i) => (
                <p key={i} className="mb-4">
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
                    className="rounded-lg object-cover w-full h-64 border border-neutral-200 shadow-sm"
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
