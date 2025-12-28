'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface DestinationSceneProps {
  type: 'mountains' | 'snow' | 'valley' | 'historical'
}

export default function DestinationScene({ type }: DestinationSceneProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
    }
  })

  // Render different scenes based on type
  if (type === 'historical') {
    return (
      <>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/* Abstract Dome Structure */}
        <mesh ref={meshRef} position={[0, -1, 0]}>
          <sphereGeometry args={[2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#E76F51" roughness={0.4} />
        </mesh>
        <mesh position={[3, -1, -2]}>
          <cylinderGeometry args={[0.5, 0.5, 3]} />
          <meshStandardMaterial color="#F4A261" />
        </mesh>
        <mesh position={[-3, -1, -2]}>
          <cylinderGeometry args={[0.5, 0.5, 3]} />
          <meshStandardMaterial color="#F4A261" />
        </mesh>
      </>
    )
  }

  if (type === 'snow') {
    return (
      <>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={0.8} />
        {/* Snowy Mountains */}
        <mesh ref={meshRef} position={[0, -1.5, 0]}>
          <coneGeometry args={[3, 4, 4]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.1} />
        </mesh>
        <mesh position={[-3, -2, -2]}>
          <coneGeometry args={[2, 3, 4]} />
          <meshStandardMaterial color="#E9FAFF" />
        </mesh>
        {/* Snow Particles (abstracted as small spheres/cubes if needed, keeping simple for now) */}
      </>
    )
  }

  // Default 'mountains' / 'valley'
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Central Peak */}
      <mesh ref={meshRef} position={[0, -1.5, 0]}>
        <coneGeometry args={[2.5, 4, 4]} />
        <meshStandardMaterial color={type === 'valley' ? "#57965C" : "#2A9D8F"} />
      </mesh>

      {/* Side Hills */}
      <mesh position={[-3.5, -2, -1]}>
        <coneGeometry args={[2, 3, 3]} />
        <meshStandardMaterial color={type === 'valley' ? "#76B07B" : "#264653"} />
      </mesh>
      <mesh position={[3.5, -2, -1]}>
        <coneGeometry args={[2, 3, 3]} />
        <meshStandardMaterial color={type === 'valley' ? "#76B07B" : "#264653"} />
      </mesh>

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color={type === 'valley' ? "#AACCB1" : "#E9C46A"} />
      </mesh>
    </>
  )
}
