import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const SignalRing = ({ radius, speed, axis = [0.4, 1, 0.2], color = "#d1d5db", sending }) => {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    const boost = sending ? 4.2 : 1;
    ref.current.rotation.x += delta * speed * axis[0] * boost;
    ref.current.rotation.y += delta * speed * axis[1] * boost;
    ref.current.rotation.z += delta * speed * axis[2] * boost;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.012, 8, 80]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
};

const Envelope = ({ sending, status }) => {
  const group = useRef();
  const flap = useRef();
  const { pointer } = useThree();
  const flapGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        new Float32Array([-0.92, 0, 0, 0.92, 0, 0, 0, 0.68, 0]),
        3
      )
    );
    geometry.computeVertexNormals();
    return geometry;
  }, []);

  useFrame((state) => {
    if (!group.current) return;

    if (sending) {
      if (flap.current) {
        flap.current.rotation.x = THREE.MathUtils.lerp(
          flap.current.rotation.x,
          0.02,
          0.18
        );
      }
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, 2.8, 0.05);
      group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, -1.6, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.85, 0.08);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, 0.35, 0.08);
      const scale = THREE.MathUtils.lerp(group.current.scale.x, 0.15, 0.06);
      group.current.scale.setScalar(scale);
      return;
    }

    if (status === "error") {
      group.current.position.x = Math.sin(state.clock.elapsedTime * 28) * 0.08;
    } else {
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, 0, 0.12);
    }

    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      Math.sin(state.clock.elapsedTime * 0.7) * 0.08,
      0.08
    );
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, 0, 0.08);
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * 0.55,
      0.06
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * 0.3,
      0.06
    );
    const scale = THREE.MathUtils.lerp(group.current.scale.x, 1, 0.1);
    group.current.scale.setScalar(scale);

    if (flap.current) {
      const open = (Math.sin(state.clock.elapsedTime * 0.85) + 1) / 2;
      flap.current.rotation.x = THREE.MathUtils.lerp(
        flap.current.rotation.x,
        -0.08 - open * 1.05,
        0.1
      );
    }
  });

  return (
    <group ref={group} position={[0, -0.08, 0]}>
      <mesh position={[0, 0, -0.035]}>
        <boxGeometry args={[1.84, 1.18, 0.05]} />
        <meshBasicMaterial color="#111111" toneMapped={false} />
      </mesh>
      <mesh position={[0, -0.02, 0.02]}>
        <planeGeometry args={[1.62, 0.92]} />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
      <mesh position={[0, -0.02, 0.028]} rotation={[0, 0, 0.04]}>
        <planeGeometry args={[1.48, 0.78]} />
        <meshBasicMaterial color="#f4f4f5" toneMapped={false} />
      </mesh>
      <group ref={flap} position={[0, 0.59, 0.04]}>
        <mesh geometry={flapGeometry}>
          <meshBasicMaterial
            color="#111111"
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>
      </group>
    </group>
  );
};

const ContactScene = ({ sending = false, status = null }) => {
  return (
    <Canvas
      className="three-scene"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.15, 3.6], fov: 45 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.NoToneMapping }}
    >
      <SignalRing radius={1.55} speed={0.18} color="#e5e7eb" sending={sending} />
      <SignalRing
        radius={1.28}
        speed={0.28}
        axis={[1, 0.3, 0.5]}
        color="#111111"
        sending={sending}
      />
      <Envelope sending={sending} status={status} />
    </Canvas>
  );
};

export default ContactScene;
