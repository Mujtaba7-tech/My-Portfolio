import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      // Check if hovering interactive elements
      const target = e.target
      const interactive = target.closest('a, button, input, textarea, [role="button"], canvas')
      setIsHovered(!!interactive)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  // Smooth trail animation
  useEffect(() => {
    let animId
    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }))
      animId = requestAnimationFrame(follow)
    }
    animId = requestAnimationFrame(follow)
    return () => cancelAnimationFrame(animId)
  }, [position])

  if (!isVisible) return null

  return (
    <>
      {/* Inner precise dot */}
      <div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 transition-opacity duration-200"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '6px' : '8px',
          height: isHovered ? '6px' : '8px',
          boxShadow: '0 0 10px #22d3ee',
        }}
      />

      {/* Trailing smooth glowing ring */}
      <div
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/50 transition-all duration-150 ease-out backdrop-blur-[0.5px]"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovered ? '48px' : '28px',
          height: isHovered ? '48px' : '28px',
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.12)' : 'transparent',
          boxShadow: isHovered ? '0 0 20px rgba(6, 182, 212, 0.4)' : 'none',
        }}
      />
    </>
  )
}

