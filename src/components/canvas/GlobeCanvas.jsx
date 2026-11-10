import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import * as THREE from 'three'

function EarthNetwork() {
  const globeRef = useRef()
  const pointsRef = useRef()

  // Generate dots distributed around the globe surface
  const [dotPositions] = useMemo(() => {
    const count = 750
    const coords = new Float32Array(count * 3)
    const radius = 2

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi

      coords[i3] = radius * Math.cos(theta) * Math.sin(phi)
      coords[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
      coords[i3 + 2] = radius * Math.cos(phi)
    }
    return [coords]
  }, [])

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.15
    }
  })

  return (
    <group ref={globeRef}>
      {/* Inner Globe sphere */}
      <mesh>
        <sphereGeometry args={[1.98, 32, 32]} />
        <meshStandardMaterial
          color="#041226"
          roughness={0.7}
          metalness={0.8}
        />
      </mesh>

      {/* Wireframe longitude & latitude */}
      <mesh>
        <sphereGeometry args={[2.0, 24, 24]} />
        <meshBasicMaterial
          color="#0ea5e9"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Surface Nodes / Points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[dotPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#38bdf8"
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>

      {/* Pulsing Location Beacons */}
      <LocationMarker position={[1.4, 0.8, 1.2]} color="#10b981" label="Available Globally" />
      <LocationMarker position={[-0.5, 1.6, 1.0]} color="#06b6d4" />
      <LocationMarker position={[0.8, -1.2, 1.3]} color="#a855f7" />
      <LocationMarker position={[-1.6, -0.6, 0.8]} color="#f43f5e" />
    </group>
  )
}

function LocationMarker({ position, color }) {
  const markerRef = useRef()

  useFrame((state) => {
    if (markerRef.current) {
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 3) * 0.25
      markerRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <group position={position}>
      <mesh ref={markerRef}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
      {/* Halo ring */}
      <mesh>
        <ringGeometry args={[0.09, 0.12, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

export default function GlobeCanvas() {
  return (
    <div className="w-full h-[350px] sm:h-[420px] relative">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 3, 5]} intensity={1.8} color="#38bdf8" />
        <pointLight position={[-5, -3, -2]} intensity={1.2} color="#a855f7" />

        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
          <EarthNetwork />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 2.6}
        />
      </Canvas>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-700/50 backdrop-blur-md text-[11px] text-slate-400 font-mono flex items-center gap-1.5 pointer-events-none select-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Global Connectivity • Remote Ready
      </div>
    </div>
  )
}

