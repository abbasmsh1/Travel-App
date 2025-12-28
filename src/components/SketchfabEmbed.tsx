"use client";

import { motion } from "framer-motion";

interface SketchfabEmbedProps {
  url: string;
  title: string;
  className?: string;
}

export default function SketchfabEmbed({
  url,
  title,
  className = "",
}: SketchfabEmbedProps) {
  return (
    <motion.div
      className={`sketchfab-embed-wrapper w-full h-full pointer-events-none ${className}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <iframe
        title={title}
        className="w-full h-full border-0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src={`${url}?autostart=1&ui_controls=0&ui_watermark=0&ui_infos=0&transparent=1`}
      />
    </motion.div>
  );
}
