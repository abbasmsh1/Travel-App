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
  // Ensure we don't duplicate parameters if they exist in the URL
  const baseUrl = url.includes('?') ? url.split('?')[0] : url;
  const embedUrl = `${baseUrl}?autostart=1&ui_controls=0&ui_watermark=0&ui_hint=0&ui_infos=0&transparent=1&ui_theme=dark&dnt=1&scrollwheel=0&double_click=0`;

  return (
    <motion.div
      className={`sketchfab-embed-wrapper w-full h-full pointer-events-none ${className}`}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <iframe
        title={title}
        className="w-full h-full border-0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src={embedUrl}
      />
    </motion.div>
  );
}
