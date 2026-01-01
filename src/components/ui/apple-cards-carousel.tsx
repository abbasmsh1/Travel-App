'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import DestinationCard from "../DestinationCard";
import { cn } from "@/lib/utils";

interface CarouselProps {
  items: any[];
}

export const AppleCardsCarousel = ({ items }: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div className="relative w-full py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
          Popular Destinations
        </h2>
        <p className="text-gray-400 mt-2">Swipe to explore Pakistan's breathtaking landscapes</p>
      </div>
      
      <div 
        ref={containerRef}
        className="flex gap-8 overflow-x-auto pb-20 pt-10 no-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        {items.map((item, index) => (
          <CarouselItem key={item.id || index} item={item} />
        ))}
        {/* Spacer for better scrolling at the end */}
        <div className="flex-shrink-0 w-24 md:w-48" />
      </div>
    </div>
  );
};

const CarouselItem = ({ item }: { item: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Hover state for Mac Dock magnification
  const [isHovered, setIsHovered] = useState(false);
  
  // Use springs for smooth scaling
  const scale = useSpring(isHovered ? 1.1 : 1, {
    stiffness: 300,
    damping: 20
  });

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex-shrink-0 w-[300px] md:w-[400px] h-[450px] md:h-[550px] snap-center transition-all duration-300 ease-out"
    >
      <DestinationCard 
        slug={item.slug}
        name={item.name}
        description={item.description}
        image={item.image}
        location={item.location}
      />
    </motion.div>
  );
};
