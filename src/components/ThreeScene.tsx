import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedCharacter = () => {
  const meshRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Head */}
      <Sphere ref={sphereRef} args={[0.8]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#ffeb3b" />
      </Sphere>
      
      {/* Eyes */}
      <Sphere args={[0.15]} position={[-0.25, 1.6, 0.7]}>
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.2} />
      </Sphere>
      <Sphere args={[0.15]} position={[0.25, 1.6, 0.7]}>
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.2} />
      </Sphere>
      
      {/* Body */}
      <Box args={[1, 1.5, 0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#333333" />
      </Box>
      
      {/* Screen */}
      <Box args={[1.2, 0.8, 0.05]} position={[1.5, 0.5, 0]}>
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.3} />
      </Box>
      
      {/* Keyboard */}
      <Box args={[0.6, 0.05, 0.4]} position={[0, -0.5, 0.8]}>
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.2} />
      </Box>
    </group>
  );
};

const ThreeScene = () => {
  return (
    <div className="w-full h-96 border-2 border-portfolio-green rounded-lg overflow-hidden glow-effect">
      <Canvas camera={{ position: [3, 2, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ff00" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
        <AnimatedCharacter />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;