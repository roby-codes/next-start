"use client";

import { motion } from "framer-motion";

const PageTransition = ({ children }: RootLayoutProps) => (
  <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 0.66,
    }}
  >
    {children}
  </motion.div>
);

export { PageTransition };
