import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleWave() {
  const pointsRef = useRef()

  const { countX, countY, positions } = useMemo(() => {
    const countX = 45
    const countY = 45
    const total = countX * countY
    const pos = new Float32Array(total * 3)

    let i = 0
    const sep = 1.3
    for (let ix = 0; ix < countX; ix++) {
      for (let iy = 0; iy < countY; iy++) {
        pos[i] = ix * sep - (countX * sep) / 2
        pos[i + 1] = 0
        pos[i + 2] = iy * sep - (countY * sep) / 2
        i += 3
      }
    }
    return { countX, countY, positions: pos }
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    const pos = pointsRef.current.geometry.attributes.position.array
    const time = state.clock.getElapsedTime() * 0.8

    let i = 0
    for (let ix = 0; ix < countX; ix++) {
      for (let iy = 0; iy < countY; iy++) {
        // Gentle wave equation
        pos[i + 1] =
          Math.sin(ix * 0.25 + time) * 0.7 +
          Math.sin(iy * 0.25 + time * 0.8) * 0.7
        i += 3
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef} position={[0, -4, 0]} rotation={[0.4, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#38bdf8"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function StarsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 6, 22], fov: 45 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'none' }}
      >
        <ParticleWave />
      </Canvas>
    </div>
  )
}
