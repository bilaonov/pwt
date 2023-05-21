import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { GLTF, OrbitControls } from 'three-stdlib'
import { extend, useFrame, useThree } from '@react-three/fiber'
extend({ OrbitControls })

type GLTFResult = GLTF & {
    nodes: {
        ['C��rculo_B��zier001_0']: THREE.Mesh
    }
    materials: {
        Material_BTC: THREE.MeshStandardMaterial
    }
}

export function Model(props: JSX.IntrinsicElements['group']) {
    const { camera } = useThree()

    useEffect(() => {
        camera.position.z = 1.9 // Увеличиваем расстояние между камерой и моделью
    }, [camera])
    const groupRef = useRef<THREE.Group>()

    const { nodes, materials } = useGLTF('/coin/scene.gltf') as GLTFResult

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.004
        }
    })
    return (
        <group {...props} ref={groupRef} dispose={null} scale={1}>
            <group>
                <mesh
                    geometry={nodes['C��rculo_B��zier001_0'].geometry}
                    material={materials.Material_BTC}
                    rotation={[-1.6, Math.PI / 2, 0]}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/coin/scene.gltf')
