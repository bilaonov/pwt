import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Model } from '../Scene/Scene'

const CanvasScene = () => {
    return (
        <Canvas className="canvas">
            <ambientLight intensity={0.5} />
            <spotLight position={[5, 5, -10]} angle={0.15} penumbra={0.1} />
            <pointLight position={[-10, -10, -10]} />

            <directionalLight />
            <Suspense fallback={false}>
                <Model />
            </Suspense>
        </Canvas>
    )
}

export default CanvasScene
