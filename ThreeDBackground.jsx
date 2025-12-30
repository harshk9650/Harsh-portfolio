import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useState } from 'react';

export default function ThreeDBackground() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      opacity: 0.7
    }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* 3D Test Tube (Symbolizing Testing) */}
        <mesh 
          position={[0, 0, -2]}
          rotation={[Math.PI / 4, Math.PI / 4, 0]}
          scale={hovered ? 1.2 : 1}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <cylinderGeometry args={[0.5, 0.3, 2, 32]} />
          <meshStandardMaterial 
            color="#00ff88" 
            emissive="#00ff88"
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* 3D Code Brackets */}
        <mesh position={[-2, -1, -3]} rotation={[0, Math.PI / 3, 0]}>
          <boxGeometry args={[0.2, 1.5, 0.2]} />
          <meshStandardMaterial color="#00ccff" metalness={0.9} />
        </mesh>
        
        <mesh position={[2, -1, -3]} rotation={[0, -Math.PI / 3, 0]}>
          <boxGeometry args={[0.2, 1.5, 0.2]} />
          <meshStandardMaterial color="#ff00ff" metalness={0.9} />
        </mesh>

        <Stars radius={100} depth={50} count={5000} factor={4} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}