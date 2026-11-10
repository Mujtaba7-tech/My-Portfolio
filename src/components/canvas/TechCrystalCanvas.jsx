import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei'

function Crystal() {
  const meshRef = useRef()
  const wireRef = useRef()

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3
      meshRef.current.rotation.y += delta * 0.45
    }
    if (wireRef.current) {
      wireRef.current.rotation.x -= delta * 0.2
      wireRef.current.rotation.z += delta * 0.3
    }
  })

  return (
    <group>
      {/* Central Gemstone / Icosahedron */}
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#38bdf8"
          emissive="#6366f1"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
          distort={0.3}
          speed={3}
        />
      </mesh>

      {/* Outer Wireframe Shield */}
      <mesh ref={wireRef} scale={2.2}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#c084fc"
          emissive="#a855f7"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </group>
  )
}

export default function TechCrystalCanvas() {
  return (
    <div className="w-full h-[280px] sm:h-[320px] relative">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[-5, -5, -3]} intensity={2} color="#ec4899" />

        <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
          <Crystal />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-slate-900/60 border border-slate-700/40 text-[10px] text-slate-400 font-mono select-none pointer-events-none">
        Interactive 3D Tech Core
      </div>
    </div>
  )
}

