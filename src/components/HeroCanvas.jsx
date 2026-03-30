import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars, Environment } from '@react-three/drei'
import * as THREE from 'three'

function FloatingOrb({ position, scale, speed, color, distort }) {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2
    }
  })
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} position={position} scale={scale} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.15}
          metalness={0.6}
          transparent
          opacity={0.75}
        />
      </Sphere>
    </Float>
  )
}

function ParticleField() {
  const count = 220
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  const pointsRef = useRef()
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.08
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#c9a882" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function RingMesh() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.12
      ref.current.rotation.z = state.clock.elapsedTime * 0.07
    }
  })
  return (
    <mesh ref={ref} position={[3.5, 0.5, -3]} rotation={[0.5, 0, 0]}>
      <torusGeometry args={[1.6, 0.03, 16, 80]} />
      <meshStandardMaterial color="#c9a882" metalness={0.9} roughness={0.1} transparent opacity={0.4} />
    </mesh>
  )
}

function SmallRing() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.2
      ref.current.rotation.x = state.clock.elapsedTime * 0.15
    }
  })
  return (
    <mesh ref={ref} position={[-4, -1.5, -2]}>
      <torusGeometry args={[0.8, 0.025, 16, 60]} />
      <meshStandardMaterial color="#f0c060" metalness={0.8} roughness={0.2} transparent opacity={0.5} />
    </mesh>
  )
}

function GridMesh() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = -3.5 + Math.sin(state.clock.elapsedTime * 0.3) * 0.15
    }
  })
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.5, 0]}>
      <planeGeometry args={[20, 20, 24, 24]} />
      <meshStandardMaterial color="#c9a882" wireframe transparent opacity={0.07} />
    </mesh>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#f0c060" />
      <pointLight position={[-5, 3, 2]} intensity={2.5} color="#c9a882" />
      <pointLight position={[4, -3, -2]} intensity={1.5} color="#8c7365" />

      <Stars radius={60} depth={30} count={500} factor={2} saturation={0} fade speed={0.5} />

      <FloatingOrb position={[3.2, 0.8, -1.5]} scale={1.8} speed={0.6} color="#c9a882" distort={0.45} />
      <FloatingOrb position={[-3.8, -1.2, -3]} scale={1.1} speed={0.9} color="#8c7365" distort={0.55} />
      <FloatingOrb position={[1.5, -2.5, -4]} scale={0.7} speed={1.2} color="#f0c060" distort={0.6} />
      <FloatingOrb position={[-2, 2.5, -5]} scale={0.5} speed={0.8} color="#c9a882" distort={0.5} />

      <RingMesh />
      <SmallRing />
      <GridMesh />
      <ParticleField />

      <Environment preset="city" />
    </Canvas>
  )
}
