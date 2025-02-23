import { weeklyLogs } from "@/data/logs";
import { LogCard } from "@/components/logs/LogCard";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function LogsPage() {
  return (
    <div className="relative min-h-screen bg-black-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Weekly
          </span>{" "}
          <span className="bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent">
            Development Logs
          </span>
        </motion.h1>

        <div className="space-y-28">
          {weeklyLogs.map((log, index) => (
            <LogCard key={index} entry={log} />
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <MagicButton
            title="Back to Home"
            icon={<FaLocationArrow />}
            position="right"
            link="/"
            className="hover:shadow-[0_0_40px_5px_rgba(124,58,237,0.3)]"
          />
        </div>
      </div>
    </div>
  );
}
