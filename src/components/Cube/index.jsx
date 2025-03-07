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
    
    // Create the flower-like pointed shape that matches the image
    const createFlowerStarShape = () => {
        const shape = new THREE.Shape();
        
        // 8 petals like in the image
        const petals = 8;
        const angleStep = (Math.PI * 2) / petals;
        
        // Center of the star
        const centerX = 0;
        const centerY = 0;
        
        for (let i = 0; i < petals; i++) {
            const angle = i * angleStep;
            
            // Calculate the tip of the petal
            const tipX = centerX + Math.cos(angle) * starSize;
            const tipY = centerY + Math.sin(angle) * starSize;
            
            // Calculate inner points for the triangular shape
            // These points create the "valley" between petals
            const innerAngle1 = angle + angleStep * 0.5 - Math.PI/16;
            const innerAngle2 = angle + angleStep * 0.5 + Math.PI/16;
            
            const innerRadius = starSize * 0.4; // Controls how deep the valley between petals is
            
            const innerX1 = centerX + Math.cos(innerAngle1) * innerRadius;
            const innerY1 = centerY + Math.sin(innerAngle1) * innerRadius;
            
            const innerX2 = centerX + Math.cos(innerAngle2) * innerRadius;
            const innerY2 = centerY + Math.sin(innerAngle2) * innerRadius;
            
            // For the first petal, move to the starting tip
            if (i === 0) {
                shape.moveTo(tipX, tipY);
            }
            
            // Connect to the inner points to create valleys between petals
            shape.lineTo(innerX1, innerY1);
            shape.lineTo(centerX, centerY); // Go to center to create the inward point
            shape.lineTo(innerX2, innerY2);
            
            // Connect to the next petal's tip
            const nextAngle = ((i + 1) % petals) * angleStep;
            const nextTipX = centerX + Math.cos(nextAngle) * starSize;
            const nextTipY = centerY + Math.sin(nextAngle) * starSize;
            
            shape.lineTo(nextTipX, nextTipY);
        }
        
        shape.closePath();
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
                    args={[createFlowerStarShape(), extrudeSettings]} 
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

// Replace the AngularStar component with FlowerStar in your CurvedStar component
