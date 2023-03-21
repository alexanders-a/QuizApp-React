import { motion } from "framer-motion";

export default function Y({ children, e }) {
  return (
    <motion.section initial="hidden" whileInView="visible">
      {e % 2 != 0 && <motion.div whileHover={{ x: 10 }}>{children}</motion.div>}
    </motion.section>
  );
}
