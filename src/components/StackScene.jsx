import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Node = ({ position, color, size, speed }) => {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.8;
    ref.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * speed + position[0]) * 0.12;
  });
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[size, 0]} />
      <meshBasicMaterial color={color} wireframe toneMapped={false} />
    </mesh>
  );
};

const getLinkPositions = () => [
  [-1.1, 0.2, 0.4, 1.15, 0.35, -0.3],
  [1.15, 0.35, -0.3, 0.1, -0.7, 0.6],
  [0.1, -0.7, 0.6, -1.1, 0.2, 0.4],
  [0.4, 0.9, 0.2, -0.5, -0.2, -0.8],
  [-0.5, -0.2, -0.8, 0.4, 0.9, 0.2],
];

const Links = () => {
  const points = getLinkPositions();
  const lineRef = useRef();
  const positions = new Float32Array(points.flatMap((p) => p));

  useFrame((state) => {
    if (lineRef.current) lineRef.current.rotation.y = state.clock.elapsedTime * 0.12;
  });

  return (
    <group ref={lineRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#d1d5db" toneMapped={false} />
      </lineSegments>
      <Node position={[-1.1, 0.2, 0.4]} color="#111111" size={0.28} speed={0.35} />
      <Node position={[1.15, 0.35, -0.3]} color="#6b7280" size={0.22} speed={0.28} />
      <Node position={[0.1, -0.7, 0.6]} color="#111111" size={0.18} speed={0.42} />
      <Node position={[0.4, 0.9, 0.2]} color="#9ca3af" size={0.16} speed={0.3} />
      <Node position={[-0.5, -0.2, -0.8]} color="#111111" size={0.2} speed={0.25} />
      <mesh>
        <torusGeometry args={[1.55, 0.012, 8, 80]} />
        <meshBasicMaterial color="#e5e7eb" toneMapped={false} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.4, 0]}>
        <torusGeometry args={[1.15, 0.01, 8, 64]} />
        <meshBasicMaterial color="#111111" toneMapped={false} />
      </mesh>
    </group>
  );
};

const StackScene = () => {
  return (
    <Canvas
      className="three-scene"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.2, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.NoToneMapping }}
    >
      <Links />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  );
};

export default StackScene;
