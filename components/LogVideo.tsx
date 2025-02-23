// components/LogVideo.tsx
"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/utils/cn";

export const LogVideo = ({ 
  src, 
  title,
  className
}: {
  src: string;
  title: string;
  className?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, []);

  return (
    <div className={cn("relative h-[60vh] group", className)}>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgb(203 172 249 / 0.1)"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div 
          className="relative overflow-hidden rounded-3xl border border-white/[0.1]"
          onMouseEnter={() => {
            setIsHovered(true);
            videoRef.current?.play();
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            videoRef.current?.pause();
          }}
        >
          {/* Animated Border Gradient */}
          <div className="absolute inset-0 rounded-3xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent animate-spin-slow" />
          </div>

          {/* Video Container */}
          <video
            ref={videoRef}
            controls={false}
            className="w-full h-full object-cover"
            muted
            loop
          >
            <source src={src} type="video/mp4" />
          </video>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <motion.div
              className="h-full bg-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
            >
              {title}
            </motion.h3>
          </div>
        </div>

        {/* Hover Controls */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.9
          }}
        >
          <div className="p-4 bg-black/50 rounded-full backdrop-blur-sm border border-white/10">
            <PlayButton isPlaying={isHovered} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const PlayButton = ({ isPlaying }: { isPlaying: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={cn(
      "text-purple-500 transition-colors",
      isPlaying ? "text-white" : "text-purple-500"
    )}
  >
    {isPlaying ? (
      <path
        d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z"
        fill="currentColor"
      />
    ) : (
      <path
        d="M19.376 12.4158L8.777 19.4816C8.5476 19.6348 8.23715 19.5727 8.08397 19.3433C8.02922 19.261 8 19.1645 8 19.0656V4.93408C8 4.65894 8.22386 4.43408 8.499 4.43408C8.59889 4.43408 8.69546 4.4633 8.777 4.51806L19.376 11.5838C19.6054 11.737 19.6675 12.0475 19.5143 12.2769C19.478 12.3323 19.4314 12.3789 19.376 12.4158Z"
        fill="currentColor"
      />
    )}
  </svg>
);