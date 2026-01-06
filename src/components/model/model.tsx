'use client'
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, Stars, useTexture, Preload, AdaptiveDpr } from '@react-three/drei'
import * as THREE from 'three'
import * as S from './model.styled'
import { EffectComposer, Bloom, Vignette, Noise, BrightnessContrast  } from '@react-three/postprocessing'

function Satellite() {
  const ref = useRef<THREE.Group | null>(null)

  useFrame((state) => {
    if (!ref.current) return
    const moonRotationSpeed = 0.08
    const satelliteSpeed = moonRotationSpeed * 0.6
    const t = state.clock.getElapsedTime()
    const tt = t * satelliteSpeed

    const r = 3.2
    ref.current.position.set(
      Math.cos(tt) * r,
      0.6 * Math.sin(tt * 0.7),
      Math.sin(tt) * r
    )

    ref.current.rotation.y = tt
  })

  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[0.25, 0.12, 0.12]} />
        <meshStandardMaterial roughness={0.4} metalness={0.6} />
      </mesh>

      <mesh position={[0.32, 0, 0]}>
        <boxGeometry args={[0.35, 0.02, 0.18]} />
        <meshStandardMaterial roughness={0.6} metalness={0.2} />
      </mesh>

      <mesh position={[-0.32, 0, 0]}>
        <boxGeometry args={[0.35, 0.02, 0.18]} />
        <meshStandardMaterial roughness={0.6} metalness={0.2} />
      </mesh>
    </group>
  )
}


function Moon() {
  const meshRef = useRef<THREE.Mesh | null>(null)

  const textures = useTexture({
    map: '/textures/moon_nasav2.png',
    normalMap: '/textures/normal.png',
    roughnessMap: '/textures/rough.png',
    displacementMap: '/textures/displacementv2.png',
  })
  textures.map.encoding = THREE.sRGBEncoding
  textures.map.needsUpdate = true
  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += delta * 0.08
  })

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <sphereGeometry args={[2, 96, 96]} />
      <meshStandardMaterial
        map={textures.map}
        normalMap={textures.normalMap}
        roughnessMap={textures.roughnessMap}
        displacementMap={textures.displacementMap}
        displacementScale={0.01}
        roughness={0.95} 
        metalness={0}
        normalScale={new THREE.Vector2(1.8, 1.8)}
      />
    </mesh>
  )
}

export default React.memo(function My3dModel() {

  return (
    <S.Container>
      <Canvas
        shadows
         dpr={[1, 1.5]}
        camera={{ position: [6, 1, -2], fov: 45 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        onCreated={({ gl }) => {
          // @ts-expect-error: outputColorSpace may not be typed yet
          gl.outputColorSpace = THREE.SRGBColorSpace

        }}
      >
        <ambientLight intensity={0.05} />
        <AdaptiveDpr pixelated />
        <directionalLight
          intensity={2.2}
          position={[8, 2, 0]}
          color="#f5f6ff"
        />
        <pointLight intensity={0.6} position={[-4, 2, -4]} />
        <Environment preset="night" />
        <Stars radius={60} depth={40} count={800} factor={3} saturation={0} fade />

        <Moon />
        <Satellite />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI * 0.35}
          maxPolarAngle={Math.PI * 0.65}
          autoRotate
          autoRotateSpeed={0.6}
        />

        <Preload all />
        <EffectComposer multisampling={0}>
          <Bloom intensity={0.18} luminanceThreshold={0.35} luminanceSmoothing={0.9} />
          <Vignette eskil={false} offset={0.2} darkness={0.9} />
          <Noise opacity={0.03} />

        </EffectComposer>

      </Canvas>
    </S.Container>
  )
})
