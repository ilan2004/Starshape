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
                // Larger canvas for mobile devices
                setCanvasSize({ width: '100%', height: '100%' });
            } else if (window.innerWidth <= 768) {
                // Medium canvas for tablets
                setCanvasSize({ width: '90%', height: '90%' });
            } else {
                // Full size canvas for desktop
                setCanvasSize({ width: '100%', height: '100%' });
            }
        };
        
        // Set initial size
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
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
                        {/* Removed OrbitControls to disable mouse/touch interaction */}
                        {/* Increased ambient light intensity for overall brightness */}
                        <ambientLight intensity={3}/>
                        {/* Added second directional light for more illumination */}
                        <directionalLight position={[2, 1, 1]} intensity={1.5}/>
                        <directionalLight position={[-2, 1, -1]} intensity={0.8} color="#ffbb77"/>
                        <CurvedNinjaStar progress={smoothProgress}/>
                    </Canvas>
                </div>
            </div>
        </div>
    )
}

function CurvedNinjaStar({progress}) {
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
            // Apply repeat to make the texture detail more visible
            const repeat = 2;
            [heightMap, aoMap, roughnessMap, normalMap].forEach(map => {
                map.wrapS = THREE.RepeatWrapping;
                map.wrapT = THREE.RepeatWrapping;
                map.repeat.set(repeat, repeat);
            });
            
            // Set normal map type
            normalMap.type = THREE.NormalMap;
        }
    }, [heightMap, aoMap, roughnessMap, normalMap]);
    
    // Create a gradient texture - brighter volcanic colors
    useEffect(() => {
        const createGradientTexture = () => {
            const size = 512;
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = 1;
            
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, size, 0);
            
            // Brighter volcanic color stops
            gradient.addColorStop(0.0, '#4a1010'); // Lightened base red
            gradient.addColorStop(0.3, '#b62121'); // Brighter medium red
            gradient.addColorStop(0.6, '#e84646'); // Vibrant red
            gradient.addColorStop(0.9, '#ff7700'); // Bright orange
            gradient.addColorStop(1.0, '#ffaa22'); // Yellow-orange glow at the edge
            
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
    
    // Create custom curved star shape
    const createCurvedStarShape = () => {
        const shape = new THREE.Shape();
        
        // Center hole parameters
        const holeRadius = starSize * 0.2;
        const hole = new THREE.Path();
        hole.absarc(0, 0, holeRadius, 0, Math.PI * 2, true);
        shape.holes.push(hole);
        
        // Number of blades
        const blades = 6;
        const angleStep = (Math.PI * 2) / blades;
        
        // Blade parameters
        const innerRadius = starSize * 0.3;
        const outerRadius = starSize;
        const curveControl = 0.4; // controls the curve amount
        
        // Start at the first point
        let startAngle = 0;
        let x = Math.cos(startAngle) * innerRadius;
        let y = Math.sin(startAngle) * innerRadius;
        shape.moveTo(x, y);
        
        // Create each blade
        for (let i = 0; i < blades; i++) {
            const angle1 = startAngle + angleStep * i;
            const angle2 = startAngle + angleStep * (i + 1);
            
            // First point (inner radius)
            const x1 = Math.cos(angle1) * innerRadius;
            const y1 = Math.sin(angle1) * innerRadius;
            
            // Outer point at the tip
            const tipAngle = angle1 + angleStep / 2;
            const xTip = Math.cos(tipAngle) * outerRadius;
            const yTip = Math.sin(tipAngle) * outerRadius;
            
            // Last point (back to inner radius)
            const x2 = Math.cos(angle2) * innerRadius;
            const y2 = Math.sin(angle2) * innerRadius;
            
            // Control points for curves
            const control1x = Math.cos(angle1 + angleStep * curveControl) * outerRadius * 0.8;
            const control1y = Math.sin(angle1 + angleStep * curveControl) * outerRadius * 0.8;
            
            const control2x = Math.cos(angle2 - angleStep * curveControl) * outerRadius * 0.8;
            const control2y = Math.sin(angle2 - angleStep * curveControl) * outerRadius * 0.8;
            
            // Draw the blade with curves
            if (i === 0) {
                shape.moveTo(x1, y1);
            }
            
            shape.bezierCurveTo(control1x, control1y, xTip, yTip, xTip, yTip);
            shape.bezierCurveTo(xTip, yTip, control2x, control2y, x2, y2);
            
            // For the last blade, close the shape
            if (i === blades - 1) {
                shape.closePath();
            }
        }
        
        return shape;
    };

    // Create extrusion settings
    const extrudeSettings = {
        steps: 1,
        depth: starSize * 0.15,
        bevelEnabled: true,
        bevelThickness: starSize * 0.05,
        bevelSize: starSize * 0.05,
        bevelSegments: 3
    };
    
    // Update star size based on screen width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 480) {
                setStarSize(2.0); // Increased size for mobile
            } else if (window.innerWidth <= 768) {
                setStarSize(2.0); // Medium size for tablets
            } else {
                setStarSize(2.5); // Original size for desktop
            }
        };
        
        // Set initial size
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Add rotation animation with a slight glow effect
    useFrame((state, delta) => {
        if (mesh.current) {
            // Add a subtle automatic rotation when not scrolling
            mesh.current.rotation.y += delta * 0.1;
            
            // Subtle pulsing effect for added visibility
            if (materialRef.current) {
                materialRef.current.emissiveIntensity = 0.2 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
            }
        }
    });
    
    return (
        <motion.group ref={mesh} rotation-y={progress} rotation-x={progress}>
            <mesh>
                <extrudeGeometry 
                    args={[createCurvedStarShape(), extrudeSettings]} 
                />
                <meshStandardMaterial 
                    ref={materialRef}
                    displacementMap={heightMap}
                    displacementScale={0.05}
                    aoMap={aoMap}
                    aoMapIntensity={0.6} // Reduced AO intensity to brighten dark areas
                    normalMap={normalMap}
                    roughnessMap={roughnessMap}
                    normalScale={new THREE.Vector2(1.5, 1.5)} // Slightly reduced for smoother appearance
                    roughness={0.7} // Reduced for more reflectivity
                    metalness={0.4} // Slightly increased for better reflections
                    envMapIntensity={1.5} // Increased for more ambient reflections
                    emissive="#ff5500" // Added emissive property for glow
                    emissiveIntensity={0.2} // Subtle emissive effect
                />
            </mesh>
        </motion.group>
    );
}