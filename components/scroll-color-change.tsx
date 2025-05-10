"use client"

import { useState, useEffect } from "react"

export default function ScrollColorChange() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate color intensity based on scroll position
  const calculateColor = () => {
    const maxScroll = 2000 // Adjust based on your page length
    const scrollRatio = Math.min(scrollY / maxScroll, 1)

    // Use transform: translateZ(0) to trigger hardware acceleration
    const baseStyle = {
      transform: "translateZ(0)",
      willChange: "background",
    }

    // Cycle through colors based on scroll position - with fewer calculations
    const cycle = Math.floor(scrollRatio * 4) % 4
    const intensity = 0.05 + scrollRatio * 0.05

    switch (cycle) {
      case 0:
        return {
          ...baseStyle,
          background: `linear-gradient(to bottom right, rgba(6, 182, 212, ${intensity}), rgba(59, 130, 246, ${intensity}))`,
        }
      case 1:
        return {
          ...baseStyle,
          background: `linear-gradient(to bottom right, rgba(59, 130, 246, ${intensity}), rgba(239, 68, 68, ${intensity}))`,
        }
      case 2:
        return {
          ...baseStyle,
          background: `linear-gradient(to bottom right, rgba(239, 68, 68, ${intensity}), rgba(34, 197, 94, ${intensity}))`,
        }
      case 3:
        return {
          ...baseStyle,
          background: `linear-gradient(to bottom right, rgba(34, 197, 94, ${intensity}), rgba(6, 182, 212, ${intensity}))`,
        }
      default:
        return {
          ...baseStyle,
          background: `linear-gradient(to bottom right, rgba(6, 182, 212, 0.05), rgba(59, 130, 246, 0.05))`,
        }
    }
  }

  return <div className="fixed inset-0 -z-20 pointer-events-none" style={calculateColor()} />
}
