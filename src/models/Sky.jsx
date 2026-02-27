import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
    const sky = useGLTF(skyScene)
    const skyRef = useRef();

    useFrame(() => {
        skyRef.current.rotation.y += 0.001;
    });
    return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky