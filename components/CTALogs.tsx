"use client";
// Add at the top with other imports
import { FaBookOpen } from "react-icons/fa";
import { MagicButton } from "@/components/ui/MagicButton"; // Update the import path if necessary
import { FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";

export const CTALogs = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center my-20"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Follow My Development Journey
    </h2>
    <MagicButton
      title="Explore Weekly Logs"
      icon={<FaBookOpen />}
      position="right"
      link="/logs"
      className="mx-auto hover:shadow-[0_0_40px_5px_rgba(124,58,237,0.3)]"
    />
  </motion.div>
);
