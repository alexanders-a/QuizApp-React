import { motion } from "framer-motion";

export default function X({ children, i }) {
  return (
    <motion.section initial="hidden" whileInView="visible">
      <motion.div whileHover={i % 2 === 0 ? { x: -10 } : { x: 10 }}>
        {children}
      </motion.div>
    </motion.section>
  );
}
