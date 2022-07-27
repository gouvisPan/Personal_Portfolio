import React from 'react'
import { Sphere,MeshDistortMaterial } from '@react-three/drei';

const AnimatedLava = (props) => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
    <MeshDistortMaterial
      color="#2a68aa"
      attach="material"
      distort={props.dist}
      speed={3}
      metalness={0}
    />
  </Sphere>
  );
}

export default AnimatedLava