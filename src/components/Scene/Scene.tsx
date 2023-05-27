// import * as THREE from 'three'
// import { useEffect, useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// import { GLTF, OrbitControls } from 'three-stdlib'
// import { extend, useFrame, useThree } from '@react-three/fiber'
// extend({ OrbitControls })

// type GLTFResult = GLTF & {
//     nodes: {
//         ['C��rculo_B��zier001_0']: THREE.Mesh
//     }
//     materials: {
//         Material_BTC: THREE.MeshStandardMaterial
//     }
// }

// export function Model(props: JSX.IntrinsicElements['group']) {
//     const { camera } = useThree()

//     useEffect(() => {
//         camera.position.z = 1.9 // Увеличиваем расстояние между камерой и моделью
//     }, [camera])
//     const groupRef = useRef<any>()

//     const { nodes, materials } = useGLTF('/coin/scene.gltf') as GLTFResult

//     useFrame(() => {
//         if (groupRef.current) {
//             groupRef.current.rotation.y += 0.004
//         }
//     })
//     return (
//         <group {...props} ref={groupRef} dispose={null} scale={1}>
//             <group>
//                 <mesh
//                     geometry={nodes['C��rculo_B��zier001_0'].geometry}
//                     material={materials.Material_BTC}
//                     rotation={[-1.6, Math.PI / 2, 0]}
//                 />
//             </group>
//         </group>
//     )
// }

// useGLTF.preload('/coin/scene.gltf')

import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame, useThree } from '@react-three/fiber'

type GLTFResult = GLTF & {
    nodes: {
        Cylinder_1: THREE.Mesh
        Cylinder_2: THREE.Mesh
        Curve: THREE.Mesh
        Curve001: THREE.Mesh
    }
    materials: {
        ['Material.003']: THREE.MeshStandardMaterial
        ['Material.002']: THREE.MeshStandardMaterial
        ['Material.001']: THREE.MeshStandardMaterial
    }
}

export function Model(props: JSX.IntrinsicElements['group']) {
    const { camera } = useThree()

    useEffect(() => {
        camera.position.z = 1.9 // Увеличиваем расстояние между камерой и моделью
    }, [camera])
    const groupRef = useRef<any>()

    const { nodes, materials } = useGLTF('/coin/PWT.gltf') as GLTFResult

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.004
        }
    })

    return (
        <group {...props} ref={groupRef} dispose={null} scale={1}>
            <group rotation={[0, 0, -Math.PI / 2]}>
                <mesh geometry={nodes.Cylinder_1.geometry} material={materials['Material.003']} />
                <mesh geometry={nodes.Cylinder_2.geometry} material={materials['Material.002']} />
            </group>
            <mesh
                geometry={nodes.Curve.geometry}
                material={materials['Material.001']}
                position={[0, 0, 0]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={2.33}
            />
            <mesh
                geometry={nodes.Curve001.geometry}
                material={materials['Material.001']}
                position={[-0.06, -0.01, 0.01]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={2.33}
            />
        </group>
    )
}

useGLTF.preload('/PWT.gltf')
