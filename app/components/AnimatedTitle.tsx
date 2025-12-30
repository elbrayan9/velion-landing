"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTitleProps {
  title: string;
  highlight?: string;
  className?: string;
  delay?: number;
}

export const AnimatedTitle = ({
  title,
  highlight,
  className,
  delay = 0,
}: AnimatedTitleProps) => {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.h2
        initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay }}
        className="text-3xl md:text-5xl font-sans font-medium tracking-tight text-white"
      >
        {title}{" "}
        {highlight && (
          <span className="text-cyan-400 font-serif italic relative inline-block">
            {highlight}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: delay + 0.4,
                ease: "circOut",
              }}
              className="absolute bottom-1 left-0 w-full h-0.5 bg-cyan-500/30 origin-left rounded-full"
            />
          </span>
        )}
      </motion.h2>
    </div>
  );
};
