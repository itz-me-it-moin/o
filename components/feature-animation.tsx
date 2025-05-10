"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureAnimationProps {
  children: ReactNode
  index: number
}

export default function FeatureAnimation({ children, index }: FeatureAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
    >
      {children}
    </motion.div>
  )
}
