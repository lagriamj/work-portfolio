import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Shape = ({ geometry, position, speed, color = "#111111" }) => {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed * 0.7;
  });
  return (
    <mesh ref={ref} position={position}>
      {geometry}
      <meshBasicMaterial color={color} wireframe toneMapped={false} />
    </mesh>
  );
};

const randomSpot = (others) => {
  for (let i = 0; i < 40; i += 1) {
    const spot = {
      x: (Math.random() * 2 - 1) * 0.86,
      y: (Math.random() * 2 - 1) * 0.78,
      z: (Math.random() - 0.5) * 1.2,
    };
    const inCenter = Math.abs(spot.x) < 0.32 && Math.abs(spot.y) < 0.38;
    const tooClose = others.some(
      (other) => Math.hypot(other.x - spot.x, other.y - spot.y) < 0.42
    );
    if (!inCenter && !tooClose) return spot;
  }
  return { x: 0.72, y: 0.4, z: 0 };
};

const ScatteredShapes = () => {
  const { viewport } = useThree();
  const spots = useMemo(() => {
    const placed = [];
    for (let i = 0; i < 3; i += 1) {
      placed.push(randomSpot(placed));
    }
    return placed;
  }, []);

  const hx = viewport.width / 2;
  const hy = viewport.height / 2;

  return (
    <>
      <Shape
        geometry={<icosahedronGeometry args={[0.32, 0]} />}
        position={[spots[0].x * hx, spots[0].y * hy, spots[0].z]}
        speed={0.16}
        color="#d1d5db"
      />
      <Shape
        geometry={<torusGeometry args={[0.28, 0.014, 10, 48]} />}
        position={[spots[1].x * hx, spots[1].y * hy, spots[1].z]}
        speed={0.14}
        color="#6b7280"
      />
      <Shape
        geometry={<octahedronGeometry args={[0.2, 0]} />}
        position={[spots[2].x * hx, spots[2].y * hy, spots[2].z]}
        speed={0.2}
        color="#e5e7eb"
      />
    </>
  );
};

const HeroScene = () => {
  return (
    <Canvas
      className="three-scene"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.NoToneMapping }}
    >
      <ScatteredShapes />
    </Canvas>
  );
};

export default HeroScene;
