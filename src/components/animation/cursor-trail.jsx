import { useEffect, useState } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react'

function CursorTrail() {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(-100)
  const pointerY = useMotionValue(-100)
  const trailX = useSpring(pointerX, { stiffness: 420, damping: 34, mass: 0.35 })
  const trailY = useSpring(pointerY, { stiffness: 420, damping: 34, mass: 0.35 })
  const [visible, setVisible] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    if (reduceMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return undefined
    }

    let active = false
    const handlePointerMove = (event) => {
      if (event.pointerType === 'touch') return

      pointerX.set(event.clientX)
      pointerY.set(event.clientY)
      if (!active) {
        active = true
        setVisible(true)
      }
    }
    const handlePointerOut = (event) => {
      if (event.relatedTarget === null) {
        active = false
        setVisible(false)
        setPressed(false)
      }
    }
    const handlePointerDown = (event) => {
      if (event.pointerType !== 'touch') setPressed(true)
    }
    const handlePointerUp = () => setPressed(false)
    const handleBlur = () => {
      active = false
      setVisible(false)
      setPressed(false)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerout', handlePointerOut)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)
    window.addEventListener('blur', handleBlur)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerout', handlePointerOut)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
      window.removeEventListener('blur', handleBlur)
    }
  }, [pointerX, pointerY, reduceMotion])

  if (!visible || reduceMotion) return null

  return (
    <motion.svg
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] drop-shadow-[0_2px_5px_rgba(23,25,37,0.24)]"
      width="52"
      height="52"
      viewBox="0 0 52 52"
      style={{
        left: trailX,
        top: trailY,
        x: -26,
        y: -26,
        scale: pressed ? 0.82 : 1,
      }}
    >
      <defs>
        <radialGradient id="cursor-shadow-gradient">
          <stop offset="0" stopColor="#172321" stopOpacity="0.22" />
          <stop offset="0.65" stopColor="#697243" stopOpacity="0.12" />
          <stop offset="1" stopColor="#697243" stopOpacity="0" />
        </radialGradient>
        <filter id="cursor-shadow-blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.8" />
        </filter>
      </defs>
      <circle cx="26" cy="26" r="21" fill="url(#cursor-shadow-gradient)" filter="url(#cursor-shadow-blur)" />
    </motion.svg>
  )
}

export default CursorTrail
