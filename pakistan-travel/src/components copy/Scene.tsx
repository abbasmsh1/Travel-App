'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export default function Scene() {
  const mountainRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (mountainRef.current) {
      mountainRef.current.rotation.y += 0.001
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Stylized Mountain */}
      <mesh ref={mountainRef} position={[0, -1, 0]}>
        <coneGeometry args={[2, 3, 4]} />
        <meshStandardMaterial color="#2A9D8F" />
      </mesh>

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#E9C46A" />
      </mesh>

      {/* Background Mountains */}
      <mesh position={[-4, -1, -5]}>
        <coneGeometry args={[1.5, 2, 4]} />
        <meshStandardMaterial color="#264653" />
      </mesh>
      <mesh position={[4, -1, -5]}>
        <coneGeometry args={[1.5, 2, 4]} />
        <meshStandardMaterial color="#264653" />
      </mesh>
    </>
  )
} 