import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

function ParticleField() {
  const count = 180
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 22
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  const pointsRef = useRef()
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.025
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.018) * 0.06
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#c9a882" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function GridMesh() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = -3.8 + Math.sin(state.clock.elapsedTime * 0.25) * 0.12
    }
  })
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.8, 0]}>
      <planeGeometry args={[26, 26, 28, 28]} />
      <meshStandardMaterial color="#c9a882" wireframe transparent opacity={0.05} />
    </mesh>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ antialias: true, alpha: false }}
      style={{ background: '#0c0a08' }}
    >
      <color attach="background" args={['#0c0a08']} />
      <ambientLight intensity={0.2} />
      <pointLight position={[-5, 3, 2]} intensity={1.5} color="#c9a882" />
      <pointLight position={[5, -3, 2]} intensity={1.0} color="#8c7365" />

      <Stars radius={80} depth={40} count={600} factor={2.5} saturation={0} fade speed={0.4} />
      <GridMesh />
      <ParticleField />
    </Canvas>
  )
}
