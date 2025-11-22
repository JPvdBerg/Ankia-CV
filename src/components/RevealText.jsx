import React from 'react';
import { motion } from 'framer-motion';

const RevealText = ({ text, className, delay = 0 }) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: delay, ease: [0.2, 0.65, 0.3, 0.9] }}
      style={{ display: 'inline-block' }}
    >
      {text}
    </motion.span>
  );
};

export default RevealText;