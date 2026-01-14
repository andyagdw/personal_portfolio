"use client";
// Motion
import { motion } from "motion/react";

export default function ProjectTags({ tag }: { tag: string }) {
  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      className="ms-0 text-[0.75rem] font-bold bg-(--powder-blue) py-3 px-6 rounded-4xl"
    >
      {tag}
    </motion.li>
  );
}
