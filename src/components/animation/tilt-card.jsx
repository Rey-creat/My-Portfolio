import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react'

function TiltCard({ children, className = '', maxTilt = 7 }) {
  const reduceMotion = useReducedMotion()
  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const rotateX = useSpring(rawRotateX, { stiffness: 180, damping: 22 })
  const rotateY = useSpring(rawRotateY, { stiffness: 180, damping: 22 })

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== 'mouse') return

    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height

    rawRotateX.set((0.5 - y) * maxTilt)
    rawRotateY.set((x - 0.5) * maxTilt)
  }

  const resetTilt = () => {
    rawRotateX.set(0)
    rawRotateY.set(0)
  }

  return (
    <motion.div
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={{
        rotateX: reduceMotion ? 0 : rotateX,
        rotateY: reduceMotion ? 0 : rotateY,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
      }}
      whileHover={reduceMotion ? undefined : { scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 180, damping: 22 }}
    >
      {children}
    </motion.div>
  )
}

export default TiltCard
