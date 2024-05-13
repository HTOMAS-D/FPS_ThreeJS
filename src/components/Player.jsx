import {useFrame, useThree} from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
import { useRef } from 'react';
import { Vector3 } from 'three';

export const Player = () => {
    const {camera} = useThree();
    const [ref] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        pos: [0, 0, 0]
    }))

    const pos = useRef([0, 0, 0]);
    useFrame(() => {
        console.log(ref.current.position)
        camera.position.copy(new Vector3(pos.current[0]), pos.current[1], pos.current[2])
    })

    return (
        <mesh ref={ref}>
            
        </mesh>
    )
}