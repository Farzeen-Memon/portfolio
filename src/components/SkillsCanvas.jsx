import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Float, MeshTransmissionMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'

const SKILLS = [
  { label: 'React', color: '#61dafb' },
  { label: 'Node.js', color: '#87cf3e' },
  { label: 'Python', color: '#f7d44c' },
  { label: 'MongoDB', color: '#4db33d' },
  { label: 'Gen AI', color: '#c9a882' },
  { label: 'Three.js', color: '#f0c060' },
  { label: 'Express', color: '#c9a882' },
  { label: 'TensorFlow', color: '#ff8c42' },
  { label: 'OpenCV', color: '#5c8aff' },
]

function SkillBubble({ label, color, position, index }) {
  const meshRef = useRef()
  const textRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 + index
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 + index * 0.7
    }
  })

  return (
    <Float speed={1.5 + index * 0.1} rotationIntensity={0.3} floatIntensity={1.2} position={position}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.55, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.3}
          chromaticAberration={0.025}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.2}
          iridescence={0.8}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          color={color}
          transparent
          opacity={0.6}
        />
      </mesh>
      <Text
        position={[0, 0, 0.65]}
        fontSize={0.2}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/plusjakartasans/v8/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEja.woff2"
      >
        {label}
      </Text>
    </Float>
  )
}

function RotatingRing() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.08
      ref.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.8, 0.02, 8, 100]} />
      <meshStandardMaterial color="#c9a882" metalness={0.9} roughness={0.1} transparent opacity={0.2} />
    </mesh>
  )
}

const ringPositions = [
  [-3, 1, 0], [3, 1, 0], [0, 2.5, 0],
  [-2.5, -1.5, 0], [2.5, -1.5, 0], [0, -2.8, 0],
  [-1.5, 2, 0], [1.5, 2, 0], [0, 0, 0],
]

export default function SkillsCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 55 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#f0c060" />
      <pointLight position={[-4, 3, 2]} intensity={2} color="#c9a882" />

      <RotatingRing />

      {SKILLS.map((skill, i) => (
        <SkillBubble
          key={skill.label}
          label={skill.label}
          color={skill.color}
          position={ringPositions[i] || [0, 0, 0]}
          index={i}
        />
      ))}

      <Environment preset="city" />
    </Canvas>
  )
}
