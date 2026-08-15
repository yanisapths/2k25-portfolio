"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface CardProps {
  title: string;
  link: string;
  src: string;
}

export const Card = ({ title, src, link }: CardProps) => {
  const isVideo = src.endsWith(".mp4");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative group overflow-hidden rounded-xl border border-[#757883]/30 hover:border-[#757883] transition-transform duration-600 ease-in-out h-[265px] cursor-pointer flex items-center justify-center bg-black/10">
      <Link href={link} target="_blank">
        {isVideo ? (
          <video
            ref={videoRef}
            src={src}
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover opacity-70 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-135 group-hover:opacity-80"
          />
        ) : (
          <img
            src={src}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <p className="absolute bottom-4 left-4 text-white text-lg z-10">
          {title}
        </p>

        <div className="absolute top-4 right-4 z-10">
          <div className="w-9 h-9 rounded-full group-hover:bg-white/40 bg-white/20 border border-white/40 flex items-center justify-center hover:bg-white/30 transition">
            <ArrowUpRight size={18} className="text-white" />
          </div>
        </div>
      </Link>
    </div>
  );
};
