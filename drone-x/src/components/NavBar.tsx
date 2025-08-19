"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/">
            <div
              className={pathname === "/" ? "text-blue-600 font-semibold" : ""}
            >
              <MenuItem setActive={setActive} active={active} item="Home" />
            </div>
          </Link>

          <Link href="/blogs">
            <div
              className={
                pathname.startsWith("/blogs")
                  ? "text-blue-600 font-semibold"
                  : ""
              }
            >
              <MenuItem setActive={setActive} active={active} item="Blogs" />
            </div>
          </Link>

          <Link href="/contact">
            <div
              className={
                pathname.startsWith("/contact")
                  ? "text-blue-600 font-semibold"
                  : ""
              }
            >
              <MenuItem setActive={setActive} active={active} item="Contact" />
            </div>
          </Link>

          <Link href="/aboutUs">
            <div
              className={
                pathname.startsWith("/aboutUs")
                  ? "text-blue-600 font-semibold"
                  : ""
              }
            >
              <MenuItem setActive={setActive} active={active} item="About US" />
            </div>
          </Link>
        </div>
      </Menu>
    </div>
  );
}

export default NavBar;
