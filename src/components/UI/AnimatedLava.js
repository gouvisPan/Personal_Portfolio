import React from 'react'
import { Sphere,MeshDistortMaterial } from '@react-three/drei';

const AnimatedLava = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
    <MeshDistortMaterial
      color="#2a68aa"
      attach="material"
      distort={.8}
      speed={1.5}
      roughness={0}
    />
  </Sphere>
  );
}

export default AnimatedLava