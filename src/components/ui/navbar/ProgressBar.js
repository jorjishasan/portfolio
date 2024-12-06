import { motion } from "framer-motion";

const ProgressBar = ({ progress }) => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 -z-10 h-[2px] origin-[0%] bg-purple-500/50"
      style={{ scaleX: progress }}
      transition={{ duration: 0.2 }}
    />
  );
};

export default ProgressBar;
