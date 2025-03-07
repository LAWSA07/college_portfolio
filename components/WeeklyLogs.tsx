"use client";
import React from "react";
import Video from "next-video";
import { weeklyLogs } from "@/data";

interface LogEntry {
  id: number;
  title: string;
  desc: string;
  videoFileName?: string;
  links: { name: string; url: string }[];
}

const WeeklyLogs = () => {
  return (
    <section
      id="weekly-logs"
      className="py-20 min-h-screen bg-gradient-to-br from-[#1E0269] via-[#2E1065] to-[#5E005E] text-white"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
          Weekly
          <span className="ml-4 bg-gradient-to-l from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            LOGS
          </span>
        </h1>
        <p className="mt-4 text-purple-200">Explore weekly progress and achievements</p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {weeklyLogs.map((log: LogEntry) => {
          const videoSrc = log.videoFileName
            ? require(`@/videos/${log.videoFileName}`)
            : null;

          return (
            <div
              key={log.id}
              className="group rounded-xl p-6 shadow-lg bg-[#1B1A2A]/60 backdrop-blur-md hover:bg-[#1B1A2A]/80 transition-colors border border-purple-400/20 hover:border-purple-300/40"
            >
              {/* Video Container */}
              <div className="mb-6 rounded-xl overflow-hidden aspect-video border border-purple-500/30">
                {videoSrc ? (
                  <Video
                    src={videoSrc}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-purple-900/50">
                    <p className="text-purple-300 text-lg">🎥 Video Coming Soon</p>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="space-y-5">
                {/* Title & Icon */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg">
                    <span className="text-2xl">📅</span>
                  </div>
                  <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    {log.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-purple-100 leading-relaxed">{log.desc}</p>

                {/* Links Section */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {log.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300 text-sm flex items-center shadow-md hover:shadow-xl active:scale-95 gap-2"
                    >
                      <span className="text-lg">🔗</span>
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WeeklyLogs;