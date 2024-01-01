import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

const Particle = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      const mesh = meshRef.current;
      mesh.rotation.x += 0.05;
      mesh.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[.75, 0]} />
      <meshStandardMaterial color={new THREE.Color(`hsl(${Math.random() * 360}, 100%, 50%)`)} />
    </mesh>
  );
};

const FloatingParticles = () => {
  const particles = Array.from({ length: 200 }, (_, index) => <Particle key={index} />);

  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {particles}
    </Canvas>
  );
};

export default FloatingParticles;
