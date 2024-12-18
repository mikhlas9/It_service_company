'use client'

import { motion } from 'framer-motion'

export default function AnimatedLine() {
  return (
    <motion.div
      className="h-1 bg-[#3B82F6] mt-2"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    />
  )
}
