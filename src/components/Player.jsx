import { useFrame, useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useRef, useEffect } from "react";
import { Vector3 } from "three";
import { useKeyboard } from "../hooks/useKeyboard";

const JUMP_HEIGHT = 5;
const SPEED = 5;

export const Player = () => {
  const { forward, backward, right, left, jump } = useKeyboard();
  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 1, 0],
  }));

  const pos = useRef([0, 0, 0]);
  useEffect(() => {
    api.position.subscribe((p) => (pos.current = p));
  }, [api.position]);
  const vel = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v));
  }, [api.velocity]);
  useFrame(() => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );

    //MOVEMENT LOGIC
    const direction = new Vector3();
    const frontVector = new Vector3(0, 0, (backward ? 1 : 0) - (forward ? 1 : 0));
    const sideVector = new Vector3((left ? 1 : 0) - (right ? 1 : 0), 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);
    
    api.velocity.set(direction.x, vel.current[1], direction.z);

    if (jump && Math.abs(vel.current[1]) < 0.05)
      api.velocity.set(vel.current[0], JUMP_HEIGHT, vel.current[2]);
  });

  return <mesh ref={ref}></mesh>;
};
