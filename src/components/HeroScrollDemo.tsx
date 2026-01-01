"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-[100px] pt-20">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Discover the Hidden Gems of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Pakistan
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070&auto=format&fit=crop"
          alt="Beautiful landscape of Northern Pakistan"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
