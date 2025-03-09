'use client';
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import styles from './style.module.scss';
import { useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';

export default function CurvedStar() {
    const container = useRef(null);
    const [canvasSize, setCanvasSize] = useState({ width: '100%', height: '100%' });
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });
    const progress = useTransform(scrollYProgress, [0, 1], [0, 5]);
    const smoothProgress = useSpring(progress, {damping: 20});
    
    // Update canvas size based on screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setCanvasSize({ width: '100%', height: '100%' });
            } else if (window.innerWidth <= 768) {
                setCanvasSize({ width: '90%', height: '90%' });
            } else {
                setCanvasSize({ width: '100%', height: '100%' });
            }
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <div ref={container} className={styles.main}>
            <div className={styles.cube}>
                <div className={styles.canvasContainer} style={{ 
                    width: canvasSize.width, 
                    height: canvasSize.height,
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Canvas>
                        <ambientLight intensity={3}/>
                        <directionalLight position={[2, 1, 1]} intensity={1.5}/>
                        <directionalLight position={[-2, 1, -1]} intensity={0.8} color="#ffbb77"/>
                        <FlowerStar progress={smoothProgress}/>
                    </Canvas>
                </div>
            </div>
        </div>
    )
}

function FlowerStar({progress}) {
    const mesh = useRef(null);
    const materialRef = useRef(null);
    const [starSize, setStarSize] = useState(2.5);
    
    // Load the volcanic rock textures
    const [
        heightMap,
        aoMap,
        roughnessMap,
        normalMap
    ] = useLoader(TextureLoader, [
        '/assets/Tcom_Rock_CliffVolcanic_Height.png',
        '/assets/Tcom_Rock_CliffVolcanic_AO.png',
        '/assets/Tcom_Rock_CliffVolcanic_Roughness.png',
        '/assets/Tcom_Rock_CliffVolcanic_Normal.png',
    ]);
    
    // Configure texture settings
    useEffect(() => {
        if (heightMap && aoMap && roughnessMap && normalMap) {
            const repeat = 2;
            [heightMap, aoMap, roughnessMap, normalMap].forEach(map => {
                map.wrapS = THREE.RepeatWrapping;
                map.wrapT = THREE.RepeatWrapping;
                map.repeat.set(repeat, repeat);
            });
            
            normalMap.type = THREE.NormalMap;
        }
    }, [heightMap, aoMap, roughnessMap, normalMap]);
    
    // Create an orange gradient texture
    useEffect(() => {
        const createGradientTexture = () => {
            const size = 512;
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = 1;
            
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, size, 0);
            
            gradient.addColorStop(0.0, '#FF8800');
            gradient.addColorStop(0.5, '#FF6600');
            gradient.addColorStop(1.0, '#FF5500');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, size, 1);
            
            const texture = new THREE.CanvasTexture(canvas);
            texture.needsUpdate = true;
            
            return texture;
        };
        
        if (materialRef.current) {
            const gradientTexture = createGradientTexture();
            materialRef.current.map = gradientTexture;
            materialRef.current.needsUpdate = true;
        }
    }, []);
    
    // Create the custom star shape from the provided SVG path
    const createCustomStarShape = () => {
        const shape = new THREE.Shape();
        
        // Parse the SVG path data
        const svgPath = `M 115.73 20 L 98.2 91.46 L 195 193 L 192 195 
            L 91.46 99.55 L 20 117.08 L 195.28 200.67 
            L 20 284.27 L 90.11 301.8 L 192 207 
            L 194 209 L 98.2 309.89 L 117.08 380 
            L 200.67 204.72 L 284.27 380 L 301.8 309.89 
            L 206.07 208.76 L 207 208 L 309.89 301.8 
            L 380 282.92 L 204.72 200.67 L 380 115.73 
            L 308.54 99.55 L 208 195 L 207 193 
            L 301.8 91.46 L 284.27 20 L 199.33 195.28 Z`;
        
        // Clean up the path data by removing extra whitespace
        const commands = svgPath.replace(/\s+/g, ' ').trim().split(' ');
        
        // Center and scale the shape
        const centerX = 200; // SVG center X
        const centerY = 200; // SVG center Y
        const scaleFactor = starSize / 200; // Scale to match the desired star size
        
        let index = 0;
        let currentX = 0;
        let currentY = 0;
        
        while (index < commands.length) {
            const cmd = commands[index];
            
            if (cmd === 'M' || cmd === 'L' || cmd === 'Z') {
                if (cmd === 'M') {
                    // Move to command
                    const x = (parseFloat(commands[index + 1]) - centerX) * scaleFactor;
                    const y = (parseFloat(commands[index + 2]) - centerY) * scaleFactor;
                    shape.moveTo(x, -y); // Negate Y for Three.js coordinate system
                    currentX = x;
                    currentY = -y;
                    index += 3;
                } else if (cmd === 'L') {
                    // Line to command
                    const x = (parseFloat(commands[index + 1]) - centerX) * scaleFactor;
                    const y = (parseFloat(commands[index + 2]) - centerY) * scaleFactor;
                    shape.lineTo(x, -y); // Negate Y for Three.js coordinate system
                    currentX = x;
                    currentY = -y;
                    index += 3;
                } else if (cmd === 'Z') {
                    // Close path command
                    shape.closePath();
                    index += 1;
                }
            } else {
                // Handle numeric values that might be part of the previous command
                index += 1;
            }
        }
        
        return shape;
    };

    // Create extrusion settings
    const extrudeSettings = {
        steps: 1,
        depth: starSize * 0.05,
        bevelEnabled: true,
        bevelThickness: starSize * 0.01,
        bevelSize: starSize * 0.01,
        bevelSegments: 1
    };
    
    // Update star size based on screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setStarSize(2.0);
            } else if (window.innerWidth <= 768) {
                setStarSize(2.0);
            } else {
                setStarSize(2.5);
            }
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Add rotation animation
    useFrame((state, delta) => {
        if (mesh.current) {
            // Add a subtle automatic rotation
            mesh.current.rotation.y += delta * 0.1;
            
            // Subtle pulsing effect
            if (materialRef.current) {
                materialRef.current.emissiveIntensity = 0.2 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
            }
        }
    });
    
    return (
        <motion.group ref={mesh} rotation-y={progress} rotation-x={progress}>
            <mesh>
                <extrudeGeometry 
                    args={[createCustomStarShape(), extrudeSettings]} 
                />
                <meshStandardMaterial 
                    ref={materialRef}
                    displacementMap={heightMap}
                    displacementScale={0.02}
                    aoMap={aoMap}
                    aoMapIntensity={0.4}
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    normalScale={new THREE.Vector2(1.0, 1.0)}
                    roughness={0.5}
                    metalness={0.3}
                    envMapIntensity={1.5}
                    emissive="#FF6B00"
                    emissiveIntensity={0.3}
                    color="#FF6600" // Base orange color
                />
            </mesh>
        </motion.group>
    );
}