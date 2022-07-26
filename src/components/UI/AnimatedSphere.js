import React from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshDistortMaterial } from '@react-three/drei';
const AnimatedSphere = (props) => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.01));
  useFrame(() => (mesh.current.rotation.x += 0.01));

  return (
    <mesh ref={mesh} scale={props.scale} rotation={[90, 40, 20]}>
      <icosahedronBufferGeometry attach="geometry" detail={0} />
      <MeshDistortMaterial attach="material" color="#2a68aa" metalness={0} distort={1.2} />
    </mesh>
  );
};

export default AnimatedSphere;
