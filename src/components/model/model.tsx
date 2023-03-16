import {Canvas, useFrame} from '@react-three/fiber'
import * as S from './model.styled'
import * as H from '../../styles/ui.styled'
import React, {useRef, useState} from "react";
import * as THREE from 'three';
import {OrbitControls} from "@react-three/drei";

function My3dModel() {
    return (
        <S.Container>
            <Canvas>
                <Model/>
            </Canvas>
        </S.Container>
    )
}


function Model() {
    const earthTexture = new THREE.TextureLoader().load('/moon.jpg');
    const meshRef = useRef(null);

    useFrame((state, delta) => {
        // @ts-ignore

        // @ts-ignore

        meshRef.current.rotation.y += delta / 3;

    });
    return (
        <mesh ref={meshRef}>
            <ambientLight intensity={0.5}/>
            <directionalLight color="white" position={[3, 3, 3]}/>
            <sphereBufferGeometry args={[2, 32, 32]}/>
            <meshPhysicalMaterial map={earthTexture}/>

            <OrbitControls/>
        </mesh>
    )
}

export const Memoized3dObject = React.memo(My3dModel)
