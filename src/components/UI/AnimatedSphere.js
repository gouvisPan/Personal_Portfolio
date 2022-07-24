import React from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AnimatedSphere = (props) => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.01));
  useFrame(() => (mesh.current.rotation.x += 0.01));

  return (
    <mesh ref={mesh} scale={props.scale} rotation={[90, 40, 20]}>
      <icosahedronBufferGeometry attach="geometry" detail={0} />
      <meshStandardMaterial attach="material" color="#2a68aa" metalness={0} />
    </mesh>
  );
};

export default AnimatedSphere;
