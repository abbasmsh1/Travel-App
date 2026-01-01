'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';


export interface RuixenCardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  badge?: {
    text: string;
    variant: 'pink' | 'indigo' | 'orange';
  };
  href?: string;
  id?: string;
}

interface SliderProps {
  data?: RuixenCardProps[];
}

export default function Slider_01({ data = [] }: SliderProps) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no data is provided, use some placeholder logic or return null
  const cards = data.length > 0 ? data : [];

  const shift = (direction: 'next' | 'prev') => {
    if (cards.length === 0) return;
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % cards.length
        : (currentIndex - 1 + cards.length) % cards.length;
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    if (cards.length === 0) return;
    
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      let position = i - currentIndex;
      if (position < -Math.floor(cards.length / 2)) {
        position += cards.length;
      } else if (position > Math.floor(cards.length / 2)) {
        position -= cards.length;
      }

      const x = position * 320;
      const y = position === 0 ? 20 : 0;
      const scale = position === 0 ? 1.03 : 0.95;

      if (Math.abs(position) > 2) {
        gsap.set(card, { x, y, scale, opacity: Math.abs(position) > 2 ? 0 : 1 });
      } else {
        gsap.to(card, {
          x,
          y,
          scale,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
        });
      }
    });
  }, [currentIndex, cards.length]);

  const badgeColors = {
    pink: 'bg-pink-600 text-white',
    indigo: 'bg-indigo-600 text-white',
    orange: 'bg-orange-500 text-white',
  };

  if (cards.length === 0) return null;

  return (
    <div className="h-full w-full relative px-6 py-12 overflow-hidden">
      <div className="relative flex items-center justify-center h-[450px]">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="absolute transition-transform"
          >
            <div className="flex flex-col group">
              <Link
                href={card.href ?? '#'}
                className="relative block overflow-hidden rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-tr from-white/50 to-zinc-100 dark:from-zinc-900/40 dark:to-zinc-800/30 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="relative h-[300px] w-[260px]">
                  <Image
                    src={card.image ?? 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500&auto=format'}
                    alt={card.title ?? ''}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === currentIndex}
                  />
                </div>

                {/* Badge */}
                {card.badge && (
                  <div className="absolute top-4 -left-10 transform -rotate-45 z-10">
                    <div
                      className={cn(
                        'px-8 py-0.5 text-[10px] font-bold shadow-md uppercase tracking-wider',
                        badgeColors[card.badge.variant]
                      )}
                    >
                      {card.badge.text}
                    </div>
                  </div>
                )}

                {/* Text Overlay */}
                <div className="absolute bottom-4 left-4 right-4 group-hover:scale-[1.01] group-hover:translate-y-[-4px] transform transition-all duration-300 ease-out bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-xl p-4 shadow-md border border-white/10 dark:border-zinc-700">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-white line-clamp-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-snug line-clamp-2">
                      {card.subtitle}
                    </p>
                    <div className="flex justify-end mt-2">
                      <div className="group relative w-7 h-7 flex items-center justify-center rounded-full bg-zinc-100/70 dark:bg-zinc-800/60 transition-all duration-300 hover:scale-110 hover:shadow-md">
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700 dark:text-white transition-transform duration-300 group-hover:rotate-45" />
                        <div className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <button
          onClick={() => shift('prev')}
          className="p-3 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm hover:scale-110 transition shadow-lg group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-zinc-700 dark:text-white group-hover:text-primary" />
        </button>
        <button
          onClick={() => shift('next')}
          className="p-3 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm hover:scale-110 transition shadow-lg group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-zinc-700 dark:text-white group-hover:text-primary" />
        </button>
      </div>
    </div>
  );
}
