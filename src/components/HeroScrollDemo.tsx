"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import DestinationCard from "./DestinationCard";

interface HeroScrollDemoProps {
  destinations: any[];
}

export function HeroScrollDemo({ destinations }: HeroScrollDemoProps) {
  return (
    <div className="flex flex-col overflow-hidden pb-[100px] pt-20">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Discover the Hidden Gems of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Pakistan
              </span>
            </h1>
          </>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 h-full overflow-y-auto no-scrollbar bg-black/50 backdrop-blur-sm rounded-2xl">
          {destinations.map((destination) => (
            <div key={destination.id} className="h-full">
              <DestinationCard 
                slug={destination.slug}
                name={destination.name}
                description={destination.description}
                image={destination.image}
                location={destination.location}
              />
            </div>
          ))}
        </div>
      </ContainerScroll>
    </div>
  );
}
