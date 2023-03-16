import {Canvas, useFrame} from '@react-three/fiber'
import * as S from './model.styled'
import * as H from '../../styles/ui.styled'
import {useRef, useState} from "react";
import * as THREE from 'three';
import {OrbitControls} from "@react-three/drei";

export default function My3dModel() {
    const earthTexture = new THREE.TextureLoader().load('/moon.jpg');
    const meshRef = useRef(null);

    useFrame((state, delta) => {
        // @ts-ignore

        // @ts-ignore

        meshRef.current.rotation.y += delta / 3;

    });
    return (
        <mesh ref={meshRef}>
            <ambientLight intensity={0.1}/>
            <directionalLight color="white" position={[1, 3, 3]}/>
            <sphereBufferGeometry args={[3, 32, 32]}/>
            <meshStandardMaterial map={earthTexture}/>
            <OrbitControls/>
        </mesh>
    )
}

