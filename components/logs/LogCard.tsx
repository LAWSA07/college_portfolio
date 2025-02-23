"use client";
import { LogEntry } from "@/data/logs";
import { motion } from "framer-motion";
import { LogVideo } from "@/components/logs/LogVideo";
import { FiLink } from "react-icons/fi";

export const LogCard = ({ entry }: { entry: LogEntry }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -50% 0px" }}
    className="border border-white/[0.1] rounded-3xl p-8 mb-16 bg-black-200/20 backdrop-blur-sm"
  >
    <div className="relative overflow-hidden rounded-2xl">
      <LogVideo
        src={entry.videoUrl}
        title={entry.title}
        chapters={entry.chapters}
      />

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
              {entry.week}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            {entry.description}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-purple-300">
            <FiLink className="w-6 h-6" />
            <h4 className="text-xl font-semibold">Resources & Links</h4>
          </div>
          <div className="flex flex-wrap gap-3">
            {entry.resources.map((resource, i) => (
              <a
                key={i}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-black-300 hover:bg-purple-500/20 transition-all group flex items-center gap-2"
              >
                <span className="bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent">
                  {resource.label}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);
