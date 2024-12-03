import { motion } from "framer-motion";

export function ProgressBar({ progress }) {
  return (
    <motion.div
      className="absolute bottom-0 left-0 -z-10 right-0 h-[2px] bg-purple-500 origin-[0%]"
      style={{ scaleX: progress }}
      transition={{ duration: 0.2 }}
    />
  );
}
