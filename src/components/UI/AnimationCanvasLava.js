import { React } from "react";
import { OrbitControls } from "@react-three/drei/core";
import { Canvas } from "react-three-fiber";
import AnimatedLava from "./AnimatedLava";
import AnimatedSphere from "./AnimatedSphere";
import "./Canvas.css";
import { Suspense } from "react";

const AnimationCanvasLava = (props) => {
  return (

      <Canvas className="canvas-lava">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <AnimatedLava dist={.8} scale={props.scale}/>
      </Canvas>
    
  );
};

export default AnimationCanvasLava;
