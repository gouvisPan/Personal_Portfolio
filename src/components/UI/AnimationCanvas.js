import React from "react";
import AnimatedSphere from "./AnimatedSphere";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./Canvas.css";

const AnimationCanvas = (props) => {
  return (
    <div className="canvas">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[-2, 5, 2]} intensity={1.6} />
        <AnimatedSphere scale={props.scale}></AnimatedSphere>
      </Canvas>
    </div>
  );
};

export default AnimationCanvas;
