import { motion } from "framer-motion";
const Template = ({ children }: RootLayoutProps) => (
  <motion.div
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 0.5,
    }}
  >
    {children}
  </motion.div>
);

export default Template;
